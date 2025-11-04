const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

export function apiUrl(path) {
  return API_BASE.replace(/\/$/, '') + path;
}

export function authHeaders() {
  const token = localStorage.getItem('admin_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}
