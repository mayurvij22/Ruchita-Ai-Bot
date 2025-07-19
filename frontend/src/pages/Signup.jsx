// src/pages/Signup.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");       // ← Added name field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("https://ruchita-ai-bot.onrender.com/api/auth/signup", {
        name,
        email,
        password
      });
      alert("Signup successful. Please login.");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Error signing up.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-emerald-100">
      <div className="bg-white shadow-md rounded p-6 w-96 space-y-4">
        <h2 className="text-xl font-bold text-center">Sign Up</h2>
        
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <input
          className="w-full p-2 border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          className="w-full p-2 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button
          onClick={handleSignup}
          className="bg-emerald-500 text-white w-full py-2 rounded hover:bg-emerald-600"
        >
          Sign Up
        </button>
        
        <p
          onClick={() => navigate("/")}
          className="text-center text-sm text-blue-500 hover:underline cursor-pointer"
        >
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}
