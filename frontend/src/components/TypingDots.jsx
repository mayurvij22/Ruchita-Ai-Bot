export default function TypingDots() {
  return (
    <div className="flex items-center space-x-3 mt-4">
      <span className="text-sm font-medium text-emerald-600 italic">
        💬 Ruchita is typing
      </span>
      <div className="flex gap-1">
        <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-bounce" />
      </div>
    </div>
  );
}
