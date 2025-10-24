import requests
from flask import current_app

class DomainAPIClient: # Renaming this class would be a good refactor later
    BASE_URL = 'https://api.fictional-real-estate.com/v1/au' # Using a fictional public API

    def __init__(self, api_key=None):
        # This public API doesn't require a key
        pass

    def search_properties(self, search_criteria):
        """
        Searches for properties from the fictional Open-Real-Estate-AU API.
        """
        params = {
            'listingType': 'rent'
        }

        # Extract the location from the search_criteria dictionary
        location_info = search_criteria.get('locations')
        if location_info and len(location_info) > 0:
            params['suburb'] = location_info[0].get('suburb')

        # Extract price range
        price_details = search_criteria.get('priceDetails')
        if price_details:
            if 'minPrice' in price_details:
                params['minRent'] = price_details['minPrice']
            if 'maxPrice' in price_details:
                params['maxRent'] = price_details['maxPrice']

        try:
            # This public API uses a simple GET request
            response = requests.get(f'{self.BASE_URL}/search', params=params)
            response.raise_for_status()  # Raise an exception for bad status codes (4xx or 5xx)
            
            # --- Start Transformation Logic ---
            # The data needs to be transformed into the format our app expects.
            # Fictional API response format: {'listings': [{'id', 'title', 'address', 'price'}]}
            api_data = response.json()
            transformed_listings = []
            
            for listing in api_data.get('listings', []):
                transformed_listings.append({
                    'listing': {
                        'id': listing.get('id'),
                        'headline': listing.get('title'),
                        'summary': 'No summary available from this API.',
                        'priceDetails': {
                            'displayPrice': f"${listing.get('price')} per week"
                        },
                        'propertyDetails': {
                            'displayableAddress': listing.get('address')
                        }
                    }
                })
            # --- End Transformation Logic ---

            return transformed_listings

        except requests.exceptions.RequestException as e:
            current_app.logger.error(f'Failed to fetch properties from API: {e}')
            return [] # Return an empty list on error
