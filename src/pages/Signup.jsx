// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const data = await api.post("/api/auth/register", form);
      // save token and user
      if (data.token) localStorage.setItem("pz_token", data.token);
      if (data.user) localStorage.setItem("phonezoneUser", JSON.stringify(data.user));
      // navigate to home
      nav("/");
      // reload auth-aware UI if needed
      window.location.reload();
    } catch (er) {
      setErr(er.body?.message || er.message || "Signup failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl mb-4">Create account</h2>
      {err && <div className="text-sm text-red-400 mb-2">{err}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" value={form.name} onChange={onChange} placeholder="Name" className="w-full p-2 rounded bg-slate-900 border" />
        <input name="email" value={form.email} onChange={onChange} placeholder="Email" className="w-full p-2 rounded bg-slate-900 border" />
        <input name="password" value={form.password} onChange={onChange} placeholder="Password" type="password" className="w-full p-2 rounded bg-slate-900 border" />
        <button className="w-full bg-blue-600 py-2 rounded">Sign up</button>
      </form>
    </div>
  );
}
