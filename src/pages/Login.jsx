// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    try {
      // 🔥 Correct API call (api already has /api base path)
      const res = await api.post("/auth/login", form);

      // Backend returns:
      // { message, user, token }
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      nav("/");
      window.location.reload();
    } catch (error) {
      setErr("Invalid credentials");
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-900 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Welcome back</h2>

        {err && <p className="text-red-400 text-sm mb-2">{err}</p>}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            className="w-full p-2 rounded bg-slate-800 border border-slate-700"
            placeholder="Email"
          />

          <input
            name="password"
            value={form.password}
            onChange={onChange}
            type="password"
            className="w-full p-2 rounded bg-slate-800 border border-slate-700"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
