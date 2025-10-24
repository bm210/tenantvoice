
from flask import Blueprint, jsonify
from flask_login import current_user, login_required
from services.users.models import User
from services.users.profiles import TenantProfile, LandlordProfile
from services.properties.models import Property

recommendations_bp = Blueprint('recommendations', __name__)

@recommendations_bp.route("/recommendations/properties", methods=["GET"])
@login_required
def recommend_properties():
    """Recommends properties to tenants based on their profile."""
    if current_user.user_type != 'tenant':
        return jsonify({"error": "Only tenants can receive property recommendations"}), 403

    tenant_profile = TenantProfile.query.filter_by(user_id=current_user.user_id).first()
    if not tenant_profile:
        return jsonify({"error": "Tenant profile not found"}), 404

    # Improved recommendation logic
    query = Property.query
    if tenant_profile.desired_lease_term:
        # This is a simplification; you might need more complex logic
        # to match lease terms (e.g., numeric ranges).
        pass # No direct mapping to property attributes

    # For now, we recommend all available properties.
    # In a real application, you would use a more sophisticated matching algorithm.
    recommended_properties = query.filter_by(status='available').all()

    properties_list = [{
        "property_id": prop.property_id,
        "title": prop.title,
        "description": prop.description,
        "rent": str(prop.rent), # Convert Decimal to string for JSON serialization
        "location": prop.location,
        "photos": prop.photos
    } for prop in recommended_properties]

    return jsonify(properties_list)

@recommendations_bp.route("/recommendations/tenants", methods=["GET"])
@login_required
def recommend_tenants():
    """Recommends tenants to landlords."""
    if current_user.user_type != 'landlord':
        return jsonify({"error": "Only landlords can receive tenant recommendations"}), 403

    # Improved recommendation logic
    all_tenants = User.query.filter_by(user_type='tenant').all()
    
    recommended_tenants = []
    for tenant in all_tenants:
        tenant_profile = TenantProfile.query.filter_by(user_id=tenant.user_id).first()
        if tenant_profile:
            recommended_tenants.append({
                "tenant_id": tenant.user_id,
                "username": tenant.username,
                "email": tenant.email,
                "about": tenant_profile.about,
                "preferred_move_in_date": tenant_profile.preferred_move_in_date,
                "desired_lease_term": tenant_profile.desired_lease_term
            })

    return jsonify(recommended_tenants)

