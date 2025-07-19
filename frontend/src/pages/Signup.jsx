import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast"; // ✅ import toast

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!name || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await axios.post("https://ruchita-ai-bot.onrender.com/api/auth/signup", {
        name,
        email,
        password,
      });

      toast.success("Signup successful. Please login.");
      navigate("/");
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.error || "Error signing up.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-emerald-300 flex justify-center items-center px-4 py-8">
      <Toaster position="top-right" /> {/* ✅ Toast renderer */}

      <div className="absolute top-4 right-4 bg-yellow-200 text-yellow-900 px-3 py-1 text-lg rounded shadow">
        🚧 Under Construction
      </div>

      <div className="bg-white rounded-xl shadow-xl flex w-full max-w-4xl overflow-hidden">
        {/* Left Side (Optional Image/Message) */}
        <div className="hidden md:flex flex-col justify-center items-center bg-rose-200 w-1/2 p-10">
          <h1 className="text-4xl font-bold text-emerald-800">Join Ruchita</h1>
          <p className="text-emerald-900 mt-4 text-center">
            Your AI health guide is here to assist you on your journey.
          </p>
          <img
            src="https://img.icons8.com/clouds/100/heart-with-pulse.png"
            alt="health"
            className="mt-6 w-32"
          />
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-center text-emerald-700 mb-6">Create Your Account</h2>

          <div className="space-y-4">
            <input
              className="w-full p-3 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="w-full p-3 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full p-3 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleSignup}
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white font-semibold transition ${
                loading
                  ? "bg-emerald-300 cursor-not-allowed"
                  : "bg-emerald-500 hover:bg-emerald-600"
              }`}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </div>

          <p
            onClick={() => navigate("/")}
            className="mt-6 text-sm text-center text-blue-500 hover:underline cursor-pointer"
          >
            Already have an account? <span className="font-medium">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}
