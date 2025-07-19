
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChatPage from "./pages/ChatPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import Footer from "./components/Footer";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatPage />
              <Footer />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}



// import React, { useState } from "react";
// import axios from "axios";

// // Animated typing dots component
// const TypingDots = () => (
//   <div className="flex gap-1 items-center justify-start mt-2 ml-1">
//     <span className="text-emerald-500 font-medium">Ruchita is typing</span>
//     <div className="flex gap-1">
//       <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
//       <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
//       <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></span>
//     </div>
//   </div>
// );

// function App() {
//   const [question, setQuestion] = useState("");
//   const [reply, setReply] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleAsk = async () => {
//     if (!question.trim()) return;

//     setLoading(true);
//     setReply("");

//     try {
//       const res = await axios.post("https://ruchita-ai-bot.onrender.com/api/ask-health", {
//         prompt: `You are Ruchita, an AI health assistant. Respond in a helpful and friendly way.\n\nUser: ${question}`,
//       });
//       setReply(res.data.reply);
//     } catch (err) {
//       console.error(err);
//       setReply("Sorry, Ruchita couldn't fetch a reply. Try again shortly.");
//     }

//     setLoading(false);
//   };

//   const renderReply = () => {
//     if (loading) return <TypingDots />;
//     if (!reply) return null;

//     const cleaned = reply
//       .replace(/Hi there!.*?\n\n/, "")
//       .replace(/I'm not a doctor.*?\n\n/, "")
//       .replace(/Remember, I'm here to help.*$/s, "");

//     const lines = cleaned.split(/\n\s*\* /);
//     const summary = lines[0].trim();
//     const tips = lines.slice(1).filter(Boolean);

//     return (
//       <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-gray-800">
//         <p className="font-semibold text-emerald-600 mb-2">Ruchita says:</p>
//         <p className="mb-4 font-medium text-gray-800">{summary}</p>
//         <ul className="list-disc pl-6 space-y-2 text-gray-700">
//           {tips.map((tip, idx) => (
//             <li key={idx}>{tip.replace(/^\*+/, "").trim()}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-rose-100 to-teal-100 flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-8 space-y-6">
//         <h1 className="text-3xl font-extrabold text-emerald-700 flex items-center gap-2">
//           👩‍⚕️ Ruchita{" "}
//           <span className="text-sm font-medium text-rose-400">
//             Your AI Health Assistant
//           </span>
//         </h1>

//         <p className="text-lg italic text-rose-500">किती गोड आहेस गं तू,!</p>

//         <textarea
//           rows="4"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           placeholder="How can I help you today? 🤔"
//           className="w-full p-4 border-2 border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700 placeholder:text-gray-400"
//         />

//         <div className="space-y-2">
//   <p className="text-sm text-gray-500">Example questions:</p>
//   <div className="flex flex-wrap gap-2">
//     {[
//       "I have a sore throat and fever. What should I do?",
//       "What are home remedies for a headache?",
//       "What should I eat during a cold?",
//       "How to improve my sleep quality?",
//       "Can stress cause physical symptoms?",
//     ].map((example, idx) => (
//       <button
//         key={idx}
//         onClick={() => setQuestion(example)}
//         className="text-sm bg-rose-100 hover:bg-rose-200 text-rose-700 px-3 py-1 rounded-full transition duration-200"
//       >
//         {example}
//       </button>
//     ))}
//   </div>
// </div>


//         <button
//           onClick={handleAsk}
//           disabled={loading}
//           className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg transition duration-200 w-full disabled:opacity-50"
//         >
//           {loading ? "Thinking..." : "Ask Ruchita"}
//         </button>

//         {renderReply()}
//       </div>
//     </div>
//   );
// }

// export default App;
// src/App.jsx
