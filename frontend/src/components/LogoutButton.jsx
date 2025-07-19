// src/components/LogoutButton.jsx
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-sm"
    >
      Logout
    </button>
  );
}
