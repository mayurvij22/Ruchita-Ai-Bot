// src/pages/Login.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) return alert("Please fill all fields");
    
    setLoading(true);
    try {
      const res = await axios.post("https://ruchita-ai-bot.onrender.com/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/chat");
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.error || "Invalid credentials";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-rose-100">
      <div className="bg-white shadow-md rounded p-6 w-96 space-y-4">
        <h2 className="text-xl font-bold text-center">Login</h2>

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
          onClick={handleLogin}
          className={`${
            loading ? "bg-emerald-300" : "bg-emerald-500 hover:bg-emerald-600"
          } text-white w-full py-2 rounded`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p
          onClick={() => navigate("/signup")}
          className="text-center text-sm text-blue-500 hover:underline cursor-pointer"
        >
          New here? Sign up
        </p>
      </div>
    </div>
  );
}