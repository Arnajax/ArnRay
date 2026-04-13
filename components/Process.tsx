const steps = [
  { roman: "I", code: "INTAKE", desc: "Kennismaking en pijnpunten in kaart" },
  { roman: "II", code: "AUDIT", desc: "Onder de motorkap kijken" },
  { roman: "III", code: "ONTWERP", desc: "Scope en vaste prijs" },
  { roman: "IV", code: "BOUW", desc: "Iteratief opleveren" },
  { roman: "V", code: "NAZORG", desc: "30 dagen support en handover" },
];

export function Process() {
  return (
    <section id="proces" className="py-32" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-4 reveal">
          <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(0, 224, 255, 0.7)' }}>
            HOE WE WERKEN
          </span>
        </div>
        <h2
          className="font-display font-black tracking-tight mb-20 reveal reveal-delay-1"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--text-primary)' }}
        >
          Vijf fases.{" "}
          <span className="font-serif italic" style={{ fontStyle: 'italic' }}>
            Geen omwegen.
          </span>
        </h2>
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.roman}
              className={`flex gap-8 md:gap-16 items-start py-8 border-t reveal reveal-delay-${i + 2}`}
              style={{ borderColor: 'rgba(232, 238, 247, 0.08)' }}
            >
              <div
                className="font-serif italic select-none flex-shrink-0 leading-none"
                style={{ fontSize: '5rem', color: 'rgba(0, 224, 255, 0.15)', fontStyle: 'italic', width: '6rem' }}
              >
                {step.roman}
              </div>
              <div className="pt-4">
                <div className="font-mono text-xs tracking-widest mb-2" style={{ color: 'var(--accent)' }}>
                  {step.code}
                </div>
                <p className="text-xl font-display font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t" style={{ borderColor: 'rgba(232, 238, 247, 0.08)' }} />
        </div>
      </div>
    </section>
  );
}
