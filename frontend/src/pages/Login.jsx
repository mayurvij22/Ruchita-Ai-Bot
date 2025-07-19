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
    <div className="min-h-screen bg-gradient-to-br  from-emerald-100 to-emerald-300 flex justify-center items-center px-4 py-8">
      <div className="bg-white rounded-xl shadow-xl flex w-full max-w-4xl overflow-hidden">
        {/* Left Side (Optional) */}
        <div className="hidden md:flex flex-col justify-center items-center bg-rose-200 w-1/2 p-10">
          <h1 className="text-4xl font-bold text-rose-700">Welcome Back!</h1>
          <p className="text-rose-800 mt-4 text-center">
            Ruchita is here to help you with health tips and guidance.
          </p>
          <img src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-hospital-logo-icon-abstract-alliance-picture-image_8313149.png" alt="health" className="mt-6 w-32" />
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-center text-rose-700 mb-6">Login to Ruchita</h2>

          <div className="space-y-4">
            <input
              className="w-full p-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full p-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleLogin}
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white font-semibold transition ${
                loading
                  ? "bg-emerald-300 cursor-not-allowed"
                  : "bg-emerald-500 hover:bg-emerald-600"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <p
            onClick={() => navigate("/signup")}
            className="mt-6 text-sm text-center text-blue-500 hover:underline cursor-pointer"
          >
            Don’t have an account? <span className="font-medium">Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
}
