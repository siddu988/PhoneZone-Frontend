// src/hooks/useAuth.js
import { useState, useEffect } from "react";

/**
 * Minimal auth hook for UI:
 * - reads phonezoneUser from localStorage (guest or saved profile)
 * - exposes accountUser and a logout helper
 */
export default function useAuth() {
  const [accountUser, setAccountUser] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("phonezoneUser");
      if (raw) {
        setAccountUser(JSON.parse(raw));
        return;
      }
    } catch (e) {
      console.warn("useAuth parse error", e);
    }
    setAccountUser(null);
  }, []);

  function logout() {
    localStorage.removeItem("phonezoneUser");
    localStorage.removeItem("pz_token");
    // full reload to reset UI quickly
    window.location.href = "/";
  }

  return { accountUser, logout };
}
