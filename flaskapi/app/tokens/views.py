from app.tokens import bp as api
from app.models import User, TokenBlacklist
from app import jwt
from flask import jsonify, request, current_app
from flask_jwt_extended import (
    create_access_token, create_refresh_token,
    jwt_required, get_jwt_identity, jwt_refresh_token_required
)
from app.tokens.helpers import (
    add_token_to_database, is_token_revoked,
    get_user_tokens, revoke_token, unrevoke_token 
)

@jwt.token_in_blacklist_loader
def check_if_token_revoked(decoded_token):
    return is_token_revoked(decoded_token)

@api.route('/auth/login', methods=['POST'])
def login():

    data = request.get_json()
    email, password = data['email'], data['password']
    user = User.query.filter_by(email=email).first()

    if user is None or not user.check_password(password):
        return jsonify({'msg': 'No user found or incorrect password'}), 404

    tokens = {
        "access": create_access_token(identity=user.id, user_claims=user.token_response()),
        "refresh": create_refresh_token(identity=user.id, user_claims=user.token_response())
    }

    add_token_to_database(tokens["access"], current_app.config['JWT_IDENTITY_CLAIM'])
    add_token_to_database(tokens["refresh"], current_app.config['JWT_IDENTITY_CLAIM'])

    return jsonify(tokens), 200

@api.route('/auth/tokens', methods=['GET'])
@jwt_required
def get_tokens():
    #User must send header with format Authorization: Bearer <JWT> 
    user_identity = get_jwt_identity()
    tokens = get_user_tokens(user_identity)
    return jsonify([token.json_response() for token in tokens]), 200

@api.route('/auth/tokens/all', methods=['GET'])
def get_all_tokens():
    tokens = TokenBlacklist.query.all()
    return jsonify([token.json_response() for token in tokens])

@api.route('/auth/refresh', methods=['POST'])
@jwt_refresh_token_required
def refresh():
    #User must provide authorization header with Bearer <JWT> 
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    access_token = create_access_token(identity=user.id, user_claims=user.json_response())
    add_token_to_database(access_token, current_app.config['JWT_IDENTITY_CLAIM'])

    return jsonify({'access_token': access_token}), 201

@api.route('/auth/logout/<int:token_id>', methods=['POST'])
@jwt_required
def logout(token_id):
    #user must provide JWT in authorization
    user_identity = get_jwt_identity()
    revoke_token(token_id, user_identity)
    return jsonify({'msg': 'Successfully logged out and revoked token'}), 200



