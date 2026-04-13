"use client";

import { DoubleWord } from "./DoubleWord";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 grid-bg overflow-hidden"
    >
      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(0, 224, 255, 0.08)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(0, 224, 255, 0.05)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        {/* Meta label */}
        <div className="flex items-center gap-3 mb-12 reveal">
          <span className="w-8 h-px" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(232, 238, 247, 0.5)' }}>
            AI CONSULTANCY · 2026
          </span>
        </div>

        {/* Headline */}
        <div className="reveal reveal-delay-1">
          <h1
            className="font-display font-black leading-[0.92] tracking-tight mb-8"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)' }}
          >
            <span className="block" style={{ color: 'var(--text-primary)' }}>ARNRAY</span>
            <span className="block">
              <span className="font-serif italic" style={{ color: 'var(--text-primary)', fontStyle: 'italic' }}>voor echt</span>
            </span>
            <span className="block">
              <DoubleWord word="efficiënter" className="text-accent-glow" />
            </span>
            <span className="block font-display" style={{ color: 'var(--text-primary)' }}>
              WERKEN
            </span>
            <span className="block font-serif italic" style={{ color: 'var(--text-primary)', fontStyle: 'italic' }}>
              met AI
            </span>
          </h1>
        </div>

        {/* Sub content */}
        <div className="grid md:grid-cols-2 gap-12 mt-12 reveal reveal-delay-2">
          <div /> {/* spacer */}
          <div>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(232, 238, 247, 0.7)' }}>
              Wij bouwen AI die daadwerkelijk draait in jouw bedrijf. Geen rapporten, geen PowerPoints. Werkende oplossingen die uren per week terugwinnen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary font-mono text-sm font-bold tracking-wider px-6 py-3 inline-flex items-center justify-center"
              >
                Start een gesprek →
              </a>
              <a
                href="#werk"
                className="btn-ghost font-mono text-sm font-bold tracking-wider px-6 py-3 inline-flex items-center justify-center"
              >
                Bekijk ons werk
              </a>
            </div>
          </div>
        </div>

        {/* Code-like label with blinking cursor */}
        <div className="mt-16 reveal reveal-delay-3">
          <span className="font-mono text-xs" style={{ color: 'rgba(0, 224, 255, 0.5)' }}>
            {'>'} gebouwd met Claude, n8n, Python
            <span className="blink-cursor ml-1 inline-block w-2 h-4 align-middle" style={{ backgroundColor: 'var(--accent)' }} />
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 flex items-center gap-3 reveal">
        <div className="w-px h-12" style={{ backgroundColor: 'rgba(0, 224, 255, 0.4)' }} />
        <span
          className="font-mono text-xs tracking-widest"
          style={{
            color: 'rgba(232, 238, 247, 0.4)',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)'
          }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
}
