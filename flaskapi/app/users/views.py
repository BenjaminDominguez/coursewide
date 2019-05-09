from app.users import bp as api
from app.models import User, Teacher, Student
from flask import jsonify, request
from app import db

@api.route('/users', methods=['GET'])
def get_all_users(): 
    return jsonify([u.json_response() for u in User.query.all()]), 200

@api.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get_or_404(id)
    return jsonify(user.json_response()), 200

@api.route('/teachers', methods=['GET'])
def get_all_teachers():
    return jsonify([t.json_response() for t in User.query.filter_by(isTeacher=True).all()])

