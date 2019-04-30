from app.payments import bp as api
from flask import jsonify, request, current_app
from app.models import User
import stripe

@api.route('/payments/charge', methods=['POST'])
def charge():
    data = request.get_json()
    course_id, userID = data['paymentDetails']['courseID'], data['paymentDetails']['userID']

    return jsonify(data)