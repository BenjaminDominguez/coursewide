from app.payments import bp as api
from app import db
from flask import jsonify, request, current_app
from app.models import User, Course
from stripe import Charge

@api.route('/payments/charge', methods=['POST'])
def charge():
    data = request.get_json()
    course_id, user_id = data['paymentDetails']['courseID'], data['paymentDetails']['userID']
    
    course = Course.query.get_or_404(course_id)
    user = User.query.get_or_404(user_id)
    student = user.student

    #Add student to course here

    # Convert 9.99 for example to 999 for valid integer format
    amount = int(course.price*100)
    token = data['stripeToken']['token']['id']

    charge = Charge.create(
        amount = amount,
        currency = 'usd',
        description = 'test charge',
        source = token
    )

    student.enroll_in_course(course)
    course.num_sales += 1
    db.session.commit()

    return jsonify({
        "msg": "Succesfully charged user"
    }), 200