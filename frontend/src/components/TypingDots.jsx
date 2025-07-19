export default function TypingDots() {
  return (
    <div className="flex gap-1 items-center mt-2">
      <span className="text-emerald-500">Ruchita is typing</span>
      <div className="flex gap-1">
        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
      </div>
    </div>
  );
}
