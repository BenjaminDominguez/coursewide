from app.payments import bp as api
from flask import jsonify, request, current_app
from app.models import User, Course
import stripe

@api.route('/payments/charge', methods=['POST'])
def charge():
    data = request.get_json()
    course_id, userID = data['paymentDetails']['courseID'], data['paymentDetails']['userID']
    
    course = Course.query.get_or_404(course_id)
    user = User.query.get_or_404(user_id)

    #Add student to course here

    return jsonify(data)