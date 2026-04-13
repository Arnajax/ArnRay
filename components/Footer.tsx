export function Footer() {
  return (
    <footer
      className="py-12 border-t"
      style={{ borderColor: 'rgba(232, 238, 247, 0.08)', backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo + copyright */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
              <span className="font-mono font-bold tracking-widest text-sm" style={{ color: 'var(--text-primary)' }}>
                ARNRAY
              </span>
            </div>
            <p className="font-mono text-xs" style={{ color: 'rgba(232, 238, 247, 0.35)' }}>
              © 2026 ARNRAY. Alle rechten voorbehouden.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2">
            {["Werk", "Diensten", "Proces", "Wie", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-xs hover-line inline-block w-fit"
                style={{ color: 'rgba(232, 238, 247, 0.45)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232, 238, 247, 0.45)')}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Tagline */}
          <div className="md:text-right">
            <p className="font-mono text-xs" style={{ color: 'rgba(232, 238, 247, 0.35)' }}>
              Gebouwd in 2026.
              <br />
              Draait op koffie en Claude.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
