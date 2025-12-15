// src/pages/Address.jsx
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Address() {
  const navigate = useNavigate();

  // Load existing saved address (autofill)
  const [fullName, setFullName] = useState(localStorage.getItem("addr_name") || "");
  const [mobile, setMobile] = useState(localStorage.getItem("addr_phone") || "");
  const [house, setHouse] = useState(localStorage.getItem("addr_street") || "");
  const [city, setCity] = useState(localStorage.getItem("addr_city") || "");
  const [state, setState] = useState(localStorage.getItem("addr_state") || "");
  const [pin, setPin] = useState(localStorage.getItem("addr_pin") || "");

  const [error, setError] = useState("");

  const validate = () => {
    if (!fullName || !mobile || !house || !city || !state || !pin) {
      return "Please fill all fields";
    }
    if (mobile.length !== 10) {
      return "Mobile number must be 10 digits";
    }
    if (pin.length !== 6) {
      return "Pincode must be 6 digits";
    }
    return "";
  };

  const saveAndNext = () => {
    const problem = validate();
    if (problem) {
      setError(problem);
      return;
    }

    localStorage.setItem("addr_name", fullName);
    localStorage.setItem("addr_phone", mobile);
    localStorage.setItem("addr_street", house);
    localStorage.setItem("addr_city", city);
    localStorage.setItem("addr_state", state);
    localStorage.setItem("addr_pin", pin);

    navigate("/checkout"); // CONTINUE TO PAYMENT
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Delivery Address</h1>

      <div className="max-w-xl bg-slate-900 p-6 rounded-xl space-y-4 shadow-lg">

        {error && (
          <p className="text-red-400 bg-red-900/30 p-2 rounded">{error}</p>
        )}

        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          className="w-full p-3 rounded bg-slate-800 outline-none"
        />

        <input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile Number (10 digits)"
          maxLength="10"
          className="w-full p-3 rounded bg-slate-800 outline-none"
        />

        <input
          value={house}
          onChange={(e) => setHouse(e.target.value)}
          placeholder="House No / Street"
          className="w-full p-3 rounded bg-slate-800 outline-none"
        />

        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="w-full p-3 rounded bg-slate-800 outline-none"
        />

        <div className="flex gap-4">
          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State"
            className="w-1/2 p-3 rounded bg-slate-800 outline-none"
          />

          <input
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Pincode"
            maxLength="6"
            className="w-1/2 p-3 rounded bg-slate-800 outline-none"
          />
        </div>

        <button
          onClick={saveAndNext}
          className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg w-full mt-4 font-semibold"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}
