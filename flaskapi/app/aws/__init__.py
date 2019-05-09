from flask import Blueprint

bp = Blueprint('aws', __name__)

from app.aws import views