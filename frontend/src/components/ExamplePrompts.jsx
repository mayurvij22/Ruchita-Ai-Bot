const prompts = [
  "I have a sore throat and fever. What should I do?",
  "What are home remedies for a headache?",
  "What should I eat during a cold?",
  "How to improve my sleep quality?",
  "Can stress cause physical symptoms?",
];

export default function ExamplePrompts({ setQuestion }) {
  return (
    <div className="space-y-2">
      <p className="text-sm text-gray-500">Example questions:</p>
      <div className="flex flex-wrap gap-2">
        {prompts.map((example, idx) => (
          <button
            key={idx}
            onClick={() => setQuestion(example)}
            className="text-sm bg-rose-100 hover:bg-rose-200 text-rose-700 px-3 py-1 rounded-full"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
}
