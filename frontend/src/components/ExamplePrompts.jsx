const prompts = [
  "I have a sore throat and fever. What should I do?",
  "What are home remedies for a headache?",
  "What should I eat during a cold?",
  "How to improve my sleep quality?",
  "Can stress cause physical symptoms?",
];

export default function ExamplePrompts({ setQuestion }) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-600 font-medium">💡 Try asking:</p>
      <div className="flex flex-wrap gap-3">
        {prompts.map((example, idx) => (
          <button
            key={idx}
            onClick={() => setQuestion(example)}
            className="text-sm bg-rose-100 hover:bg-rose-200 text-rose-700 px-4 py-2 rounded-full shadow-sm transition-all duration-200 ease-in-out hover:scale-105"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
}
