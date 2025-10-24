from flask import Blueprint, jsonify, request
from flask_login import current_user
from services.users.auth import roles_required
from services.users.models import db
from .models import Booking
import datetime

bookings_bp = Blueprint('bookings', __name__)

@bookings_bp.route("/bookings/property", methods=["POST"])
@roles_required('tenant')
def book_property():
    """Book a property. Only accessible to tenants."""
    data = request.get_json()
    new_booking = Booking(
        property_id=data.get('property_id'),
        tenant_id=current_user.user_id,
        start_date=datetime.datetime.strptime(data.get('start_date'), '%Y-%m-%d').date(),
        end_date=datetime.datetime.strptime(data.get('end_date'), '%Y-%m-%d').date(),
        booking_type='tenant'
    )
    db.session.add(new_booking)
    db.session.commit()
    return jsonify({"message": "Property booked successfully"}), 201

@bookings_bp.route("/bookings/service", methods=["POST"])
@roles_required('landlord')
def book_service():
    """Book a service for a property. Only accessible to landlords."""
    data = request.get_json()
    new_booking = Booking(
        property_id=data.get('property_id'),
        service_id=data.get('service_id'),
        start_date=datetime.datetime.strptime(data.get('start_date'), '%Y-%m-%d').date(),
        end_date=datetime.datetime.strptime(data.get('end_date'), '%Y-%m-%d').date(),
        booking_type='service'
    )
    db.session.add(new_booking)
    db.session.commit()
    return jsonify({"message": "Service booked successfully"}), 201
