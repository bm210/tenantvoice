
from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from services.users.models import db, User
from services.users.profiles import TenantProfile, LandlordProfile, ServiceProviderProfile

profile_bp = Blueprint('profile', __name__)

@profile_bp.route('/users/profile', methods=['GET'])
@login_required
def get_profile():
    user = current_user
    user_data = {
        'user_id': user.user_id,
        'username': user.username,
        'email': user.email,
        'user_type': user.user_type
    }

    profile = None
    profile_data = {}

    if user.user_type == 'tenant':
        profile = TenantProfile.query.filter_by(user_id=user.user_id).first()
        if profile:
            profile_data = {
                'about': profile.about,
                'address': profile.address,
                'preferred_move_in_date': profile.preferred_move_in_date,
                'desired_lease_term': profile.desired_lease_term
            }
    elif user.user_type == 'landlord':
        profile = LandlordProfile.query.filter_by(user_id=user.user_id).first()
        if profile:
            profile_data = {
                'company': profile.company,
                'website': profile.website
            }
    elif user.user_type == 'service_provider':
        profile = ServiceProviderProfile.query.filter_by(user_id=user.user_id).first()
        if profile:
            profile_data = {
                'service_type': profile.service_type,
                'portfolio_url': profile.portfolio_url,
                'certifications': profile.certifications
            }

    if profile:
        return jsonify({'user': user_data, 'profile': profile_data})
    else:
        return jsonify({'user': user_data, 'profile': None, 'message': 'Profile not found'})

@profile_bp.route('/users/profile', methods=['PUT'])
@login_required
def update_profile():
    data = request.get_json()
    user_type = current_user.user_type
    profile = None

    if user_type == 'tenant':
        profile = TenantProfile.query.filter_by(user_id=current_user.user_id).first()
        if profile:
            profile.about = data.get('about', profile.about)
            profile.address = data.get('address', profile.address)
            profile.preferred_move_in_date = data.get('preferred_move_in_date', profile.preferred_move_in_date)
            profile.desired_lease_term = data.get('desired_lease_term', profile.desired_lease_term)

    elif user_type == 'landlord':
        profile = LandlordProfile.query.filter_by(user_id=current_user.user_id).first()
        if profile:
            profile.company = data.get('company', profile.company)
            profile.website = data.get('website', profile.website)

    elif user_type == 'service_provider':
        profile = ServiceProviderProfile.query.filter_by(user_id=current_user.user_id).first()
        if profile:
            profile.service_type = data.get('service_type', profile.service_type)
            profile.portfolio_url = data.get('portfolio_url', profile.portfolio_url)
            profile.certifications = data.get('certifications', profile.certifications)

    if profile:
        db.session.commit()
        return jsonify({'message': 'Profile updated successfully'})
    else:
        return jsonify({'message': 'Profile not found'}), 404

@profile_bp.route('/users/<int:user_id>/profile', methods=['GET'])
@login_required
def get_public_profile(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'User not found'}), 404

    profile = None
    user_type = user.user_type

    if user_type == 'tenant':
        profile = TenantProfile.query.filter_by(user_id=user_id).first()
    elif user_type == 'landlord':
        profile = LandlordProfile.query.filter_by(user_id=user_id).first()
    elif user_type == 'service_provider':
        profile = ServiceProviderProfile.query.filter_by(user_id=user_id).first()

    if profile:
        profile_data = {
            'user_id': user.user_id,
            'username': user.username,
            'user_type': user.user_type,
        }
        if user_type == 'landlord':
            profile_data['company'] = profile.company
            profile_data['website'] = profile.website
        elif user_type == 'tenant':
            # For tenants, maybe only show limited info
            profile_data['about'] = profile.about
        elif user_type == 'service_provider':
            profile_data['service_type'] = profile.service_type
            profile_data['portfolio_url'] = profile.portfolio_url

        return jsonify(profile_data)
    else:
        return jsonify({'message': 'Profile not found'}), 404
