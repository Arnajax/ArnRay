"use client";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5" style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)' }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="font-mono font-bold tracking-widest text-sm text-primary" style={{ color: 'var(--text-primary)' }}>
            ARNRAY
          </span>
        </div>

        {/* Nav links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {["WERK", "DIENSTEN", "PROCES", "WIE"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs tracking-widest hover-line pb-0.5 transition-colors"
              style={{ color: 'rgba(232, 238, 247, 0.6)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232, 238, 247, 0.6)')}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="btn-primary font-mono text-xs font-bold tracking-widest px-4 py-2 rounded-none"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
}
