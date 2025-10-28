// Simple API client for TenantVoice frontend
// Usage: import api from '../utils/api'; await api.getUsers();

const API_BASE = (process.env.REACT_APP_API_BASE_URL || "http://localhost:3000").replace(/\/$/, "");

async function request(path, options = {}) {
  const url = `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
  const defaultHeaders = { "Content-Type": "application/json" };

  options.headers = { ...(options.headers || {}), ...defaultHeaders };

  // If your backend uses cookie-based sessions, uncomment the next line:
  // options.credentials = "include";

  const res = await fetch(url, options);

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    const message = text || res.statusText;
    const err = new Error(`API request failed ${res.status}: ${message}`);
    err.status = res.status;
    throw err;
  }

  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

// Public / user endpoints
export async function getUsers() {
  return request("/api/users");
}

export async function signup(data) {
  return request("/api/users/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function login(data) {
  return request("/api/users/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getProfile(token) {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  return request("/api/users/profile", { headers });
}

export default {
  request,
  getUsers,
  signup,
  login,
  getProfile,
};
