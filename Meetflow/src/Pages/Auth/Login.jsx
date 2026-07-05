import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
  e.preventDefault();

  console.log({
    email,
    password,
  });

  // Temporary authentication
  localStorage.setItem("isAuthenticated", "true");

  // Go to dashboard
  navigate("/dashboard");

  // Clear form
  setEmail("");
  setPassword("");
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 to-gray-100 px-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
        <form onSubmit={onSubmit} className="flex flex-col items-center gap-5">

          <h2 className="text-3xl font-bold text-blue-600">
            MeetFlow
          </h2>

          <h1 className="text-xl font-medium">
            Welcome Back
          </h1>

          <p className="text-gray-500 text-sm">
            Sign in to your account
          </p>

          <input
            type="email"
            placeholder="Enter your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            className="w-full bg-blue-700 hover:bg-blue-900 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>

          <p>
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-blue-600 hover:underline font-semibold"
            >
              Register
            </button>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;