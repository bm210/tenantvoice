
import pytest
from main import create_app

def test_user_authentication_flow(client):
    """
    GIVEN a Flask application configured for testing
    WHEN a new user is registered and logs in
    THEN check that the user can access a protected route and then log out
    """
    # 1. Register a new user
    signup_data = {
        "username": "testuser",
        "email": "testuser@example.com",
        "password": "password",
        "user_type": "tenant"
    }
    response = client.post('/api/users/signup', json=signup_data)
    assert response.status_code == 201
    assert b"User created successfully" in response.data

    # 2. Log in with the new user
    login_data = {
        "email": "testuser@example.com",
        "password": "password"
    }
    response = client.post('/api/users/login', json=login_data)
    assert response.status_code == 200
    assert b"Logged in successfully" in response.data

    # 3. Access a protected route
    response = client.get('/api/users/user_by_email/testuser@example.com')
    assert response.status_code == 200
    assert b"testuser" in response.data

    # 4. Log out
    response = client.get('/api/users/logout')
    assert response.status_code == 200
    assert b"Logged out successfully" in response.data

    # 5. Verify that the protected route is no longer accessible
    response = client.get('/api/users/user_by_email/testuser@example.com')
    assert response.status_code == 401 # Unauthorized
