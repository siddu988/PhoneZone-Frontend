// src/utils/api.js

const BASE = "http://127.0.0.1:5000/api";

// helper function to send request
async function request(path, options = {}) {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(BASE + path, {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || `Backend error: ${res.status}`);
    }

    return data;
  } catch (err) {
    console.error("API request failed:", err);
    throw err;
  }
}

export default {
  get: (path) => request(path),
  post: (path, body) => request(path, { method: "POST", body }),
  put: (path, body) => request(path, { method: "PUT", body }),
  del: (path) => request(path, { method: "DELETE" }),
};
