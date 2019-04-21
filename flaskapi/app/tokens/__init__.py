from flask import Blueprint

bp = Blueprint('tokens', __name__)

from app.tokens import views