interface DoubleWordProps {
  word: string;
  className?: string;
}

export function DoubleWord({ word, className = "" }: DoubleWordProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{word}</span>
      <span
        className="absolute left-[3px] top-[3px] z-0 select-none text-outline"
        aria-hidden="true"
      >
        {word}
      </span>
    </span>
  );
}
