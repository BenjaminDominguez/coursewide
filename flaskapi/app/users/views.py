from app.users import bp as api
from app.models import User, Teacher, Student
from flask import jsonify, request
from app import db
from app.emails.templates import send_teacher_registration_email

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

@api.route('/users/teachers/register', methods=['POST'])
def init_teacher():
    data = request.get_json()

    teacher_data = {
        github: data.get('github', None),
        subject: data['subject'],
        link_to_resume: data.get('resume', None)
    }

    user_data = {
        first: data['first'],
        last: data['last'],
        email: data['email'],
        location: data['location']
    }

    user = User(**user_data)
    teacher = Teacher(**teacher_data)
    user.set_password(str(os.urandom(24))) #set random password for now that user will not be able to guess
    user.teacher = teacher
    db.session.add_all([user, teacher])

    db.session.commit()

    msg, token, status = send_teacher_registration_email(user)

    if status == 200:
        return jsonify({
          'Initial registration complete'  
        }), status