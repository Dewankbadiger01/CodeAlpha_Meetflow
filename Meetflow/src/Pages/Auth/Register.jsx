import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      {
        name,
        email,
        password,
      }
    );

    alert(response.data.message || "Registration Successful");

    setName("");
    setEmail("");
    setPassword("");

    navigate("/login");
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Something went wrong"
    );
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from to-blue-400-50 to-gray-100 px-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
        <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-blue-600">MeetFlow</h2>
          <h1 className="text-xl font-medium">Create Account</h1>

          <input
            type="text"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Register
          </button>

          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
