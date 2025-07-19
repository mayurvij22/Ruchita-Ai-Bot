import React from "react";
import RuchitaChat from "../components/RuchitaChat";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-teal-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-extrabold text-emerald-700 mb-2">
          👩‍⚕️ Ruchita <span className="text-rose-400 text-sm">Your AI Health Assistant</span>
        </h1>
        <p className="text-lg italic text-rose-500 mb-4">किती गोड आहेस गं तू!</p>
        <RuchitaChat />
      </div>
    </div>
  );
}
