const items = [
  { text: "Claude", style: "serif" },
  { text: "n8n", style: "mono" },
  { text: "Python", style: "bold" },
  { text: "Next.js", style: "serif" },
  { text: "Vercel", style: "mono" },
  { text: "Claude Code", style: "bold" },
  { text: "Telegram", style: "serif" },
  { text: "Gmail API", style: "mono" },
  { text: "OpenAI", style: "bold" },
  { text: "Zapier", style: "serif" },
  { text: "Make.com", style: "mono" },
  { text: "PostgreSQL", style: "bold" },
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="py-12 overflow-hidden border-t border-b" style={{ borderColor: 'rgba(232, 238, 247, 0.08)', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(232, 238, 247, 0.4)' }}>
          GEBOUWD MET
        </span>
      </div>
      <div className="flex overflow-hidden">
        <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
          {doubled.map((item, i) => (
            <span key={i} className="flex items-center gap-12">
              {item.style === "serif" && (
                <span className="font-serif italic text-2xl" style={{ color: 'var(--text-primary)' }}>
                  {item.text}
                </span>
              )}
              {item.style === "mono" && (
                <span className="font-mono text-sm tracking-wider" style={{ color: 'rgba(232, 238, 247, 0.6)' }}>
                  {item.text}
                </span>
              )}
              {item.style === "bold" && (
                <span className="font-display font-black text-2xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  {item.text}
                </span>
              )}
              <span style={{ color: 'rgba(0, 224, 255, 0.3)' }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
