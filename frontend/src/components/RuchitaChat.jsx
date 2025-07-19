import React, { useState } from "react";
import axios from "axios";
import TypingDots from "./TypingDots";
import ExamplePrompts from "./ExamplePrompts";

export default function RuchitaChat() {
  const [question, setQuestion] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setReply("");

    try {
      const res = await axios.post("https://ruchita-ai-bot.onrender.com/api/ask-health", {
        prompt: `You are Ruchita, an AI health assistant. Respond in a helpful and friendly way.\n\nUser: ${question}`,
      });
      setReply(res.data.reply);
    } catch (err) {
      setReply("Sorry, Ruchita couldn't fetch a reply.");
    }

    setLoading(false);
  };

  const renderReply = () => {
    if (loading) return <TypingDots />;
    if (!reply) return null;

    const cleaned = reply
      .replace(/Hi there!.*?\n\n/, "")
      .replace(/I'm not a doctor.*?\n\n/, "")
      .replace(/Remember, I'm here to help.*$/s, "");

    const lines = cleaned.split(/\n\s*\* /);
    const summary = lines[0].trim();
    const tips = lines.slice(1).filter(Boolean);

    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
        <p className="font-semibold text-emerald-600 mb-2">Ruchita says:</p>
        <p className="mb-4">{summary}</p>
        <ul className="list-disc pl-6 space-y-2">
          {tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={4}
        placeholder="How can I help you today?"
        className="w-full p-4 border-2 border-emerald-200 rounded-lg"
      />
      <ExamplePrompts setQuestion={setQuestion} />
      <button
        onClick={handleAsk}
        disabled={loading}
        className="bg-emerald-500 text-white px-6 py-3 rounded-lg w-full"
      >
        {loading ? "Thinking..." : "Ask Ruchita"}
      </button>
      {renderReply()}
    </div>
  );
}
