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
    
@api.route('/users', methods=['POST'])
def create_new_user():

    user_data = request.get_json()

    password = user_data.pop('password')

    user = User(**user_data)
    user.create_password(password)
    db.session.add(user)
    
    #this must be provided in the JSON or else other areas of code will not work.
    if user.isStudent:
        s = Student()
        db.session.add(s)
        user.student = s
    elif user.isTeacher:
        t = Teacher()
        db.session.add(t)
        user.teacher = t

    db.session.commit()

    return jsonify(user.json_response()), 201

