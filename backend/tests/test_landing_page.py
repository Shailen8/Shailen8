import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

# Root and health
class TestRoot:
    def test_root_returns_hello_world(self):
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert data.get("message") == "Hello World"

# Inquiry endpoint tests
class TestInquiry:
    def test_post_inquiry_valid(self):
        payload = {
            "name": "TEST_John Doe",
            "email": "test@example.com",
            "phone": "9876543210",
            "destination": "Goa",
            "message": "Looking for a guide in Goa"
        }
        response = requests.post(f"{BASE_URL}/api/inquiry", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert "id" in data
        assert isinstance(data["id"], str)

    def test_post_inquiry_missing_required_fields(self):
        payload = {"name": "TEST_NoEmail"}
        response = requests.post(f"{BASE_URL}/api/inquiry", json=payload)
        assert response.status_code == 422

    def test_get_inquiries(self):
        response = requests.get(f"{BASE_URL}/api/inquiry")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)

    def test_post_inquiry_optional_fields(self):
        payload = {
            "name": "TEST_Jane",
            "email": "jane@test.com",
            "destination": "Manali"
        }
        response = requests.post(f"{BASE_URL}/api/inquiry", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert "id" in data
