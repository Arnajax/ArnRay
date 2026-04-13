export function Problem() {
  const columns = [
    {
      num: "01",
      label: "HERKENNING",
      text: "Je hoort overal dat AI alles gaat veranderen. Maar bij jou in het bedrijf verandert er nog niks.",
    },
    {
      num: "02",
      label: "FRUSTRATIE",
      text: "Je hebt misschien al eens een consultant gesproken. Je kreeg een rapport. Niemand las het.",
    },
    {
      num: "03",
      label: "REALITEIT",
      text: "Ondertussen gaat er elke week tijd verloren aan taken die een computer zou moeten doen.",
    },
  ];

  return (
    <section id="werk" className="py-32" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6 reveal">
          <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(0, 224, 255, 0.7)' }}>
            HET PROBLEEM
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="reveal reveal-delay-1">
            <h2
              className="font-display font-black leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--text-primary)' }}
            >
              AI is <span className="font-serif italic" style={{ fontStyle: 'italic' }}>overal.</span>
              <br />
              Waarde is <span style={{ color: 'var(--accent)' }}>zeldzaam.</span>
            </h2>
          </div>
          <div className="grid gap-8">
            {columns.map((col, i) => (
              <div
                key={col.num}
                className={`pl-5 border-l reveal reveal-delay-${i + 2}`}
                style={{ borderColor: 'var(--accent)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold" style={{ color: 'var(--accent)' }}>
                    {col.num} /
                  </span>
                  <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(232, 238, 247, 0.5)' }}>
                    {col.label}
                  </span>
                </div>
                <p className="leading-relaxed" style={{ color: 'rgba(232, 238, 247, 0.75)' }}>
                  {col.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
