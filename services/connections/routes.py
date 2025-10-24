from flask import Blueprint, request, jsonify
from services.connections.models import Connection
from services.users.models import User, db
from flask_jwt_extended import jwt_required, get_jwt_identity

connections_blueprint = Blueprint('connections', __name__)

@connections_blueprint.route('/connect', methods=['POST'])
@jwt_required()
def send_connection_request():
    data = request.get_json()
    requester_id = get_jwt_identity()
    receiver_id = data.get('receiver_id')

    if not receiver_id:
        return jsonify({"message": "Receiver ID is required"}), 400

    if requester_id == receiver_id:
        return jsonify({"message": "You cannot connect with yourself"}), 400

    existing_connection = Connection.query.filter(
        ((Connection.requester_id == requester_id) & (Connection.receiver_id == receiver_id)) |
        ((Connection.requester_id == receiver_id) & (Connection.receiver_id == requester_id))
    ).first()

    if existing_connection:
        return jsonify({"message": "Connection request already sent or you are already connected"}), 400

    new_connection = Connection(requester_id=requester_id, receiver_id=receiver_id, status='pending')
    db.session.add(new_connection)
    db.session.commit()

    return jsonify({"message": "Connection request sent successfully"}), 201

@connections_blueprint.route('/respond', methods=['POST'])
@jwt_required()
def respond_to_connection_request():
    data = request.get_json()
    user_id = get_jwt_identity()
    connection_id = data.get('connection_id')
    response = data.get('response')  # 'accept' or 'reject'

    if not connection_id or not response:
        return jsonify({"message": "Connection ID and response are required"}), 400

    connection = Connection.query.get(connection_id)

    if not connection or connection.receiver_id != user_id:
        return jsonify({"message": "Connection request not found or you are not the receiver"}), 404

    if response.lower() == 'accept':
        connection.status = 'accepted'
    elif response.lower() == 'reject':
        connection.status = 'rejected'
    else:
        return jsonify({"message": "Invalid response"}), 400

    db.session.commit()
    return jsonify({"message": f"Connection request {connection.status}"}), 200

@connections_blueprint.route('/status', methods=['GET'])
@jwt_required()
def get_connection_status():
    user_id = get_jwt_identity()
    connections = Connection.query.filter((Connection.requester_id == user_id) | (Connection.receiver_id == user_id)).all()

    return jsonify([{
        'connection_id': conn.connection_id,
        'requester_id': conn.requester_id,
        'receiver_id': conn.receiver_id,
        'status': conn.status,
        'created_at': conn.created_at
    } for conn in connections]), 200
