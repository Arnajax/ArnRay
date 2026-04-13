import { DoubleWord } from "./DoubleWord";

const items = [
  {
    num: "01",
    title: "Builder, geen theoreticus",
    text: "Arn draait zelf een e-commerce merk op systemen die hij zelf bouwde. Hij verkoopt geen theorie.",
  },
  {
    num: "02",
    title: "Vaste prijs, geen uren",
    text: "Je weet vooraf wat je krijgt en wat het kost. Geen urenfabriek, geen verrassingen achteraf.",
  },
  {
    num: "03",
    title: "Alles in eigen beheer",
    text: "Wat wij bouwen, bezit jij. Geen vendor lock-in. Geen afhankelijkheid. Volledige controle.",
  },
];

export function Promise() {
  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(0, 224, 255, 0.06)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="mb-6 reveal">
            <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(0, 224, 255, 0.7)' }}>
              ONZE BELOFTE
            </span>
          </div>
          <h2
            className="font-display font-black leading-tight tracking-tight reveal reveal-delay-1"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 4.5rem)', color: 'var(--text-primary)' }}
          >
            <DoubleWord word="Wij" /> leveren geen rapporten.
            <br />
            <DoubleWord word="Wij" /> leveren{" "}
            <span className="font-serif italic" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              oplossingen.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={item.num} className={`reveal reveal-delay-${i + 2}`}>
              <div
                className="font-serif italic text-6xl mb-4"
                style={{ color: 'var(--accent)', fontStyle: 'italic', lineHeight: 1 }}
              >
                {item.num}
              </div>
              <h3 className="font-display font-black text-xl mb-3 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(232, 238, 247, 0.65)' }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
