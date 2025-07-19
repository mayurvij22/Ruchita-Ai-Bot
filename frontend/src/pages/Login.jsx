import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) {
      toast.error("Please correct the errors above");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("https://ruchita-ai-bot.onrender.com/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      toast.success("Login successful!");
      navigate("/chat");
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.error || "Invalid credentials";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-emerald-300 flex justify-center items-center px-4 py-8">
      <Toaster position="top-right" />

      <div className="absolute top-4 right-4 bg-yellow-200 text-yellow-900 px-3 py-1 text-lg rounded shadow">
        🚧 Under Construction
      </div>

      <div className="bg-white rounded-xl shadow-xl flex w-full max-w-4xl overflow-hidden">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-rose-200 w-1/2 p-10">
          <h1 className="text-4xl font-bold text-rose-700">Welcome Back!</h1>
          <p className="text-rose-800 mt-4 text-center">
            Ruchita is here to help you with health tips and guidance.
          </p>
          <img
            src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-hospital-logo-icon-abstract-alliance-picture-image_8313149.png"
            alt="health"
            className="mt-6 w-32"
          />
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-center text-rose-700 mb-6">Login to Ruchita Ai</h2>

          <div className="space-y-4">
            <div>
              <input
                className={`w-full p-3 border rounded-lg focus:outline-none transition ${
                  errors.email
                    ? "border-red-400 focus:ring-red-400"
                    : "border-rose-300 focus:ring-rose-400"
                }`}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                className={`w-full p-3 border rounded-lg focus:outline-none transition ${
                  errors.password
                    ? "border-red-400 focus:ring-red-400"
                    : "border-rose-300 focus:ring-rose-400"
                }`}
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

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
