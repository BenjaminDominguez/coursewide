from flask import Blueprint

bp = Blueprint('payments', __name__)

from app.payments import views