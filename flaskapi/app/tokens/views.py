from app.tokens import bp as api
from app.models import User
from flask import jsonify, request
from flask_jwt_extended import create_access_token, create_refresh_token

@api.route('/token/access', methods=['POST'])
def get_access_token():

    data = request.get_json()
    email, password = data['email'], data['password']
    user = User.query.filter_by(email=email).first()

    if user is None or not user.check_password(password):
        return jsonify({'msg': 'No user found or incorrect password'}), 404

    tokens = {
        "access": create_access_token(identity=user.token_response()),
        "refresh": create_refresh_token(identity=user.token_response())
    }

    return jsonify({tokens}), 200

@api.route('/token/revoke', methods=['POST'])
def revoke_access_token():
    pass