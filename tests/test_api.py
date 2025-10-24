
import pytest

def test_properties_api(client):
    """
    GIVEN a Flask application configured for testing
    WHEN the '/api/properties' page is requested (GET)
    THEN check that the response is valid
    """
    response = client.get('/api/properties')
    assert response.status_code == 200
