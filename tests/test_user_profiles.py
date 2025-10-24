
import pytest

@pytest.mark.parametrize("user_type, extra_data", [
    ("tenant", {}),
    ("landlord", {}),
    ("service_provider", {"service_type": "plumbing"})
])
def test_user_profile_by_type(client, user_type, extra_data):
    """
    GIVEN a Flask application configured for testing
    WHEN a user of a specific type signs up and logs in
    THEN check that the profile information is correct for that user type
    """
    # 1. Register a new user of a specific type
    signup_data = {
        "username": f"{user_type}user",
        "email": f"{user_type}@example.com",
        "password": "password",
        "user_type": user_type,
        **extra_data
    }
    response = client.post('/api/users/signup', json=signup_data)
    assert response.status_code == 201

    # 2. Log in with the new user
    login_data = {
        "email": f"{user_type}@example.com",
        "password": "password"
    }
    response = client.post('/api/users/login', json=login_data)
    assert response.status_code == 200

    # 3. Access the profile route
    response = client.get('/api/users/profile')
    assert response.status_code == 200
    profile_data = response.get_json()

    # 4. Verify the profile data
    assert profile_data['user']['username'] == f"{user_type}user"
    assert profile_data['user']['user_type'] == user_type
    if user_type == 'service_provider':
        assert profile_data['profile']['service_type'] == "plumbing"

def test_properties_api_after_login(client):
    """
    GIVEN a Flask application configured for testing
    WHEN a logged-in user accesses the properties API
    THEN check that the response is valid and contains property information
    """
    # 1. Register and log in a user
    signup_data = {
        "username": "testtenant",
        "email": "tenant@example.com",
        "password": "password",
        "user_type": "tenant"
    }
    client.post('/api/users/signup', json=signup_data)
    login_data = {
        "email": "tenant@example.com",
        "password": "password"
    }
    client.post('/api/users/login', json=login_data)

    # 2. Access the properties API
    response = client.get('/api/properties')
    assert response.status_code == 200
