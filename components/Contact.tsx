export function Contact() {
  return (
    <section
      id="contact"
      className="py-40 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(0, 224, 255, 0.05)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8 reveal">
          <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(0, 224, 255, 0.7)' }}>
            LATEN WE PRATEN
          </span>
        </div>
        <h2
          className="font-display font-black leading-tight tracking-tight mb-12 reveal reveal-delay-1"
          style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', color: 'var(--text-primary)' }}
        >
          Klaar om te{" "}
          <span className="font-serif italic" style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            beginnen?
          </span>
        </h2>
        <div className="reveal reveal-delay-2">
          <a
            href="mailto:Arn@quicknet.nl"
            className="btn-primary font-mono text-sm font-bold tracking-widest px-10 py-5 inline-flex items-center justify-center text-lg"
          >
            Stuur een mail →
          </a>
        </div>
        <div className="mt-8 reveal reveal-delay-3">
          <span className="font-mono text-xs" style={{ color: 'rgba(232, 238, 247, 0.4)' }}>
            of bel direct
          </span>
          <br />
          <a
            href="tel:+31651447199"
            className="font-mono text-sm mt-1 inline-block hover-line"
            style={{ color: 'rgba(232, 238, 247, 0.6)' }}
          >
            +31 6 51 44 71 99
          </a>
        </div>
      </div>
    </section>
  );
}
