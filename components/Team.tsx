const members = [
  {
    initials: "AB",
    name: "ARN BRAUNSCHWEIGER",
    role: "Builder & AI-strateeg",
    bio: "Bouwt de oplossingen, kiest de tools, voert de implementatie uit. Co-founder House of Tones, bouwde zijn eigen AI-assistent Alfred op een VPS.",
  },
  {
    initials: "RK",
    name: "RAYMOND KAMP",
    role: "Interim professional Finance",
    bio: "Business navigator en controller. Zorgt dat wat wij bouwen ook financieel en operationeel aansluit bij jouw bedrijfsrealiteit.",
  },
];

export function Team() {
  return (
    <section id="wie" className="py-32" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-4 reveal">
          <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(0, 224, 255, 0.7)' }}>
            WIE
          </span>
        </div>
        <h2
          className="font-display font-black tracking-tight mb-20 reveal reveal-delay-1"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--text-primary)' }}
        >
          Twee mensen.{" "}
          <span className="font-serif italic" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            Eén belofte.
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {members.map((m, i) => (
            <div key={m.name} className={`reveal reveal-delay-${i + 2}`}>
              {/* Avatar */}
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mb-6 border"
                style={{ borderColor: 'var(--accent)', backgroundColor: 'var(--bg-tertiary)' }}
              >
                <span
                  className="font-serif text-2xl"
                  style={{ color: 'var(--accent)', fontStyle: 'italic' }}
                >
                  {m.initials}
                </span>
              </div>
              <div className="font-mono text-xs tracking-widest mb-1" style={{ color: 'var(--accent)' }}>
                {m.name}
              </div>
              <div className="font-display font-semibold text-lg mb-4" style={{ color: 'var(--text-primary)' }}>
                {m.role}
              </div>
              <p className="leading-relaxed" style={{ color: 'rgba(232, 238, 247, 0.65)' }}>
                {m.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
