import React from "react";
import RuchitaChat from "../components/RuchitaChat";
import LogoutButton from "../components/LogoutButton";

export default function ChatPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-rose-100 via-amber-50 to-teal-100 px-4 py-12 relative">
      
      {/* Top right controls */}
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <div className="bg-yellow-200 text-yellow-900 px-3 py-1 text-sm rounded shadow">
          🚧 Under Construction
        </div>
        <LogoutButton />
      </div>

      {/* Main Chat Container */}
      <div className="flex justify-center items-start mt-12">
        <div className="w-full max-w-2xl bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-rose-200">
          <h1 className="text-4xl font-extrabold text-emerald-700 mb-1 text-center drop-shadow">
            👩‍⚕️ Ruchita
          </h1>

          <p className="text-sm text-center text-rose-400 mb-2 tracking-wide font-semibold animate-pulse">
            Your AI Health Assistant
          </p>

          <p className="text-center italic text-rose-500 text-lg mb-4">
            "Taking care of yourself is the most powerful way to begin caring for others."
          </p>

          <div className="text-center text-sm text-emerald-600 mb-6">
            Ask me anything about your health, lifestyle, or wellness.
          </div>

          <RuchitaChat />
        </div>
      </div>
    </div>
  );
}
