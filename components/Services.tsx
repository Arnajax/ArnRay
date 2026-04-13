"use client";

import { useRef } from "react";

const services = [
  {
    num: "01",
    duration: "1–2 weken",
    title: "AI-Audit",
    subtitle: "AUDIT",
    desc: "Grondige doorlichting van je bedrijf om te ontdekken waar AI concrete waarde kan toevoegen. Eindrapport met 3–5 geprioriteerde kansen.",
  },
  {
    num: "02",
    duration: "2–6 weken",
    title: "Implementatie",
    subtitle: "BOUW",
    desc: "Wij bouwen één concreet ding van A tot Z tot het draait en werkt in jouw bedrijf. Inclusief 30 dagen nazorg.",
  },
  {
    num: "03",
    duration: "Maandelijks",
    title: "Retainer",
    subtitle: "GROEI",
    desc: "Doorlopende begeleiding voor onderhoud, uitbreiding en strategische sparring. Maandelijks opzegbaar na de eerste drie maanden.",
  },
];

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mx", `${x}%`);
    card.style.setProperty("--my", `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`service-card corner-frame p-8 border reveal reveal-delay-${delay} transition-all duration-300 hover:-translate-y-1`}
      style={{ borderColor: 'rgba(232, 238, 247, 0.08)' }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(0, 224, 255, 0.2)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(232, 238, 247, 0.08)')}
    >
      <div className="flex justify-between items-start mb-8">
        <span className="font-mono text-xs font-bold" style={{ color: 'var(--accent)' }}>
          {service.num} / {service.subtitle}
        </span>
        <span className="font-mono text-xs" style={{ color: 'rgba(232, 238, 247, 0.4)' }}>
          {service.duration}
        </span>
      </div>
      <h3
        className="font-display font-black tracking-tight mb-4"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}
      >
        {service.title}
      </h3>
      <p className="leading-relaxed" style={{ color: 'rgba(232, 238, 247, 0.65)' }}>
        {service.desc}
      </p>
    </div>
  );
}

export function Services() {
  return (
    <section id="diensten" className="py-32" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-4 reveal">
          <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(0, 224, 255, 0.7)' }}>
            DIENSTEN
          </span>
        </div>
        <h2
          className="font-display font-black tracking-tight mb-20 reveal reveal-delay-1"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--text-primary)' }}
        >
          Drie manieren om te{" "}
          <span className="font-serif italic" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            beginnen.
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.num} service={s} delay={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
