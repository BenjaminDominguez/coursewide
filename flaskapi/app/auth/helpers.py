from flask_jwt_extended import decode_token
from app.models import TokenBlacklist
from app import db
from datetime import datetime
from flask import current_app
from flask_jwt_extended import (
    create_access_token, create_refresh_token
)

class TokenNotFound(Exception):
    """ Raised when the token in question cannot be found """
    pass

def epoch_utc_to_datetime(epoch_utc):
    """ Helper function to convert 
    epoch timestamps (as stored in JWT), into python datetime
    for storage in database. """

    return datetime.fromtimestamp(epoch_utc)

def add_token_to_database(encoded_token, identity_claim):

    decoded_token = decode_token(encoded_token)

    data = {
        'jti': decoded_token['jti'],
        'token_type': decoded_token['type'],
        'user_identity': int(decoded_token[identity_claim]),
        'expires': epoch_utc_to_datetime(decoded_token['exp']),
        'revoked': False
    }

    token = TokenBlacklist(**data)
    db.session.add(token)
    db.session.commit()

def is_token_revoked(decoded_token):
    jti = decoded_token['jti']
    
    token = TokenBlacklist.query.filter_by(jti=jti).first()

    if token is None:
        #If there is no token in the DB the token is revoked
        return True
    
    return token.revoked

def create_tokens(user_obj):
    tokens = {
        "access": create_access_token(identity=user_obj.id, user_claims=user_obj.token_response()),
        "refresh": create_refresh_token(identity=user_obj.id, user_claims=user_obj.token_response())
    }

    add_token_to_database(tokens["access"], current_app.config['JWT_IDENTITY_CLAIM'])
    add_token_to_database(tokens["refresh"], current_app.config['JWT_IDENTITY_CLAIM'])

    return tokens

def get_user_tokens(user_identity):
    return TokenBlacklist.query.filter_by(user_identity=user_identity).all()

def revoke_token(user):
    tokens = get_user_tokens(user)

    if len(tokens) is 0:
        raise TokenNotFound('Could not find the given token {0}'.format(jti))

    for token in tokens:
        token.revoked = True
        
    db.session.commit()

def unrevoke_token(token_id, user):
    token = TokenBlacklist.query.filter_by(id=token_id, user_identity=user_identity).first()

    if token is None:
        raise TokenNotFound('Could not find the given token {0}'.format(token_id))

    token.revoked = False
    db.session.commit()

