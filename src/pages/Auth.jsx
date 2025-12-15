import { useState } from "react";

const Auth = () => {
  const [mode, setMode] = useState("login");

  return (
    <main className="mx-auto max-w-md px-4 py-10 text-slate-100">
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
        <div className="flex mb-6 rounded-full bg-slate-800 p-1">
          <button onClick={() => setMode("login")} className={`flex-1 py-2 text-sm rounded-full ${mode === "login" ? "bg-blue-600" : "bg-transparent"}`}>Login</button>
          <button onClick={() => setMode("signup")} className={`flex-1 py-2 text-sm rounded-full ${mode === "signup" ? "bg-blue-600" : "bg-transparent"}`}>Sign Up</button>
        </div>

        {mode === "login" ? (
          <form className="space-y-3 text-sm">
            <input type="email" placeholder="Email" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500" />
            <input type="password" placeholder="Password" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500" />
            <button className="w-full rounded-full bg-blue-600 py-2 text-sm font-medium hover:bg-blue-500">Login</button>
          </form>
        ) : (
          <form className="space-y-3 text-sm">
            <input type="text" placeholder="Full Name" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500" />
            <input type="email" placeholder="Email" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500" />
            <input type="password" placeholder="Password" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500" />
            <button className="w-full rounded-full bg-blue-600 py-2 text-sm font-medium hover:bg-blue-500">Create Account</button>
          </form>
        )}
      </div>
    </main>
  );
};

export default Auth;
