import React, { useEffect, useState } from "react";
import api from "../utils/api";

export default function ExampleFetchUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        const data = await api.getUsers();
        setUsers(data || []);
      } catch (err) {
        console.error("Failed to load users", err);
        setError(err.message || "Unknown error");
      }
    })();
  }, []);

  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.length === 0 ? <li>No users</li> : users.map(u => <li key={u.user_id || u.id || u.email}>{u.username || u.email}</li>)}
      </ul>
    </div>
  );
}
