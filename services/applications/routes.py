from flask import Blueprint, request, jsonify
from services.applications.models import Application, db
from services.users.models import User
from services.properties.models import Property
from flask_jwt_extended import jwt_required, get_jwt_identity

applications_bp = Blueprint('applications', __name__)

@applications_bp.route('/applications', methods=['POST'])
@jwt_required()
def submit_application():
    data = request.get_json()
    current_user_id = get_jwt_identity()

    # Check if user is a tenant
    user = User.query.get(current_user_id)
    if user.role != 'tenant':
        return jsonify({"message": "Only tenants can submit applications"}), 403

    new_application = Application(
        property_id=data['property_id'],
        tenant_id=current_user_id
    )

    db.session.add(new_application)
    db.session.commit()

    return jsonify({"message": "Application submitted successfully", "application_id": new_application.application_id}), 201

@applications_bp.route('/applications', methods=['GET'])
@jwt_required()
def get_applications():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if user.role == 'tenant':
        applications = Application.query.filter_by(tenant_id=current_user_id).all()
    elif user.role == 'owner':
        # Get all properties owned by the user
        properties = Property.query.filter_by(owner_id=current_user_id).all()
        property_ids = [prop.property_id for prop in properties]
        applications = Application.query.filter(Application.property_id.in_(property_ids)).all()
    else:
        return jsonify({"message": "Invalid user role"}), 403

    application_list = []
    for app in applications:
        application_list.append({
            'application_id': app.application_id,
            'property_id': app.property_id,
            'tenant_id': app.tenant_id,
            'status': app.status,
            'created_at': app.created_at,
            'updated_at': app.updated_at
        })

    return jsonify(application_list), 200

@applications_bp.route('/applications/<int:application_id>', methods=['PUT'])
@jwt_required()
def update_application_status(application_id):
    data = request.get_json()
    current_user_id = get_jwt_identity()
    
    application = Application.query.get(application_id)
    if not application:
        return jsonify({"message": "Application not found"}), 404
    
    user = User.query.get(current_user_id)

    # Check if the user is the owner of the property
    prop = Property.query.get(application.property_id)
    if prop.owner_id != current_user_id:
        return jsonify({"message": "You are not authorized to update this application"}), 403

    new_status = data.get('status')
    if new_status not in ['accepted', 'rejected', 'appeal']:
        return jsonify({"message": "Invalid status"}), 400

    application.status = new_status
    db.session.commit()

    return jsonify({"message": f"Application {application_id} has been {new_status}"}), 200
