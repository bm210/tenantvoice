from flask import Blueprint, jsonify, request
from flask_login import current_user
from services.users.auth import roles_required
from services.users.models import db
from .models import Property
from .api_client import DomainAPIClient

properties_bp = Blueprint('properties', __name__)

@properties_bp.route("/properties")
def get_properties():
    """
    Returns a list of properties.
    If 'country' is 'Australia', it fetches data from the Domain API.
    Otherwise, it fetches from the local database.
    """
    country = request.args.get('country')

    if country and country.lower() == 'australia':
        # Prepare search criteria for Domain API
        search_criteria = {
            "listingType": "Rent",
            "propertyTypes": ["House", "Townhouse", "ApartmentUnitFlat"],
            "locations": []
        }

        location = request.args.get('location')
        min_rent = request.args.get('min_rent', type=int)
        max_rent = request.args.get('max_rent', type=int)

        if location:
            # Assuming location is a suburb
            search_criteria["locations"].append({"state": "", "region": "", "area": "", "suburb": location})

        price_details = {}
        if min_rent is not None:
            price_details["minPrice"] = min_rent
        if max_rent is not None:
            price_details["maxPrice"] = max_rent
        
        if price_details:
            search_criteria["priceDetails"] = price_details

        # Fetch from Domain API
        client = DomainAPIClient()
        listings = client.search_properties(search_criteria)

        if listings:
            # Transform the API response to our application's format
            property_list = []
            # The actual listings are in a nested structure, check for 'listings' key
            for listing_group in listings:
                if 'listing' in listing_group:
                    listing = listing_group['listing']
                    prop = {
                        "property_id": listing.get('id'),
                        "owner_id": None,  # Not available from Domain API
                        "title": listing.get('headline'),
                        "description": listing.get('summary'),
                        "rent": listing.get('priceDetails', {}).get('displayPrice'),
                        "location": listing.get('propertyDetails', {}).get('displayableAddress'),
                        "status": 'available'
                    }
                    property_list.append(prop)
            return jsonify(property_list)
        else:
            return jsonify({"message": "Could not retrieve properties from Domain API."}), 500

    else:
        # Fetch from local database (existing logic)
        query = Property.query
        location = request.args.get('location')
        min_rent = request.args.get('min_rent', type=float)
        max_rent = request.args.get('max_rent', type=float)

        if location:
            query = query.filter(Property.location.ilike(f"%{location}%"))
        if min_rent is not None:
            query = query.filter(Property.rent >= min_rent)
        if max_rent is not None:
            query = query.filter(Property.rent <= max_rent)

        properties = query.all()
        property_list = []
        for prop in properties:
            property_list.append({
                "property_id": prop.property_id,
                "owner_id": prop.owner_id,
                "title": prop.title,
                "description": prop.description,
                "rent": str(prop.rent),
                "location": prop.location,
                "status": prop.status
            })
        return jsonify(property_list)

@properties_bp.route("/properties", methods=["POST"])
@roles_required('landlord')
def create_property():
    """Create a new property. Only accessible to landlords."""
    data = request.get_json()
    new_property = Property(
        owner_id=current_user.user_id,
        title=data.get('title'),
        description=data.get('description'),
        rent=data.get('rent'),
        location=data.get('location')
    )
    db.session.add(new_property)
    db.session.commit()
    return jsonify({"message": "Property created successfully", "property_id": new_property.property_id}), 201
