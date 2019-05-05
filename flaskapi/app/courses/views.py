from app.courses import bp as api
from flask import jsonify, request
from flask_jwt_extended import jwt_required
from app.models import Course, User, Module
from app import db

@api.route('/courses/clear/<int:user_id>', methods=['GET'])
def clear_all_courses(user_id):
    """ 
    Helper function to help clear courses for testing. Do not use in production.
    """
    user = User.query.get_or_404(user_id)
    student = user.student
    student.courses_taking.clear()
    db.session.commit()

    return jsonify({
        'msg': 'Deleted all courses'
    })




@api.route('/courses', methods=['GET'])
def get_all_courses():
    return jsonify([course.json_response() for course in Course.query.all()]), 200


@api.route('/courses/<int:id>', methods=['GET'])
def get_course(id):
    """
    Access token is required to access this route
    """
    course = Course.query.get(id)

    if course is None:
        return jsonify({'Error': 'Course not Found'}), 404

    return jsonify(course.json_response())

@api.route('/courses', methods=['POST'])
def create_new_course():
    data = request.get_json()

    teacher = None
    teacher_id = data.get('teacher_id', None)
    new_course = Course(**data)
    db.session.add(new_course)

    if teacher_id:
        user = User.query.get(teacher_id)
        if user is None:
            return jsonify({'error': 'Could not find teacher in DB'}), 500

        #This is under the assumption that the teacher/user relationship has already
        #been established. What we are doing below is grabbing the teacher object from
        #the user.
        teacher = user.teacher
        teacher.courses_teaching.append(new_course)
        db.session.add(teacher)
    
    db.session.commit()
    
    return jsonify(new_course.json_response()), 201

@api.route('/courses/<int:id>/module', methods=['POST'])
def add_module(id):

    """
    If we are adding a module to a course, it is assumed that
    the module is being created when we add it.
    A module cannot exist without a corresponding course.
    """

    course = Course.query.get(id)
    if course is None:
        return jsonify({'Error': 'Invalid Course'}, 500)

    module_data = request.get_json()

    new_module = Module(**module_data)

    course.modules.append(new_module)

    db.session.add_all([course, new_module])
    db.session.commit()

    return jsonify(new_module.json_response()), 201