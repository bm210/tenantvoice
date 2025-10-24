from flask import Blueprint, jsonify, request
from flask_login import current_user
from services.users.auth import roles_required
from services.users.models import db
from .models import Service

services_bp = Blueprint('services', __name__)

@services_bp.route("/services")
def get_services():
    """Returns a list of all services."""
    services = Service.query.all()
    service_list = []
    for serv in services:
        service_list.append({
            "service_id": serv.service_id,
            "provider_id": serv.provider_id,
            "name": serv.name,
            "description": serv.description,
            "price": str(serv.price)
        })
    return jsonify(service_list)

@services_bp.route("/services", methods=["POST"])
@roles_required('service_provider')
def create_service():
    """Create a new service. Only accessible to service providers."""
    data = request.get_json()
    new_service = Service(
        provider_id=current_user.user_id,
        name=data.get('name'),
        description=data.get('description'),
        price=data.get('price')
    )
    db.session.add(new_service)
    db.session.commit()
    return jsonify({"message": "Service created successfully", "service_id": new_service.service_id}), 201
