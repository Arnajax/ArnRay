"use client";

import { useEffect, useRef } from "react";
import { DoubleWord } from "./DoubleWord";

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const targetPos = useRef({ x: 50, y: 50 });
  const currentPos = useRef({ x: 50, y: 50 });

  useEffect(() => {
    const section = document.getElementById("hero");
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      targetPos.current = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      };
    };

    const animate = () => {
      const lerp = 0.06;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerp;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerp;

      if (orbRef.current) {
        orbRef.current.style.left = `${currentPos.current.x}%`;
        orbRef.current.style.top = `${currentPos.current.y}%`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    section.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 grid-bg overflow-hidden"
    >
      {/* Mouse-following glow orb */}
      <div
        ref={orbRef}
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          backgroundColor: 'rgba(0, 224, 255, 0.07)',
          left: '50%',
          top: '50%',
          willChange: 'left, top',
        }}
      />
      {/* Static secondary orb */}
      <div
        className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(0, 224, 255, 0.04)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        {/* Meta label */}
        <div className="flex items-center gap-3 mb-12 reveal">
          <span className="w-8 h-px" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(232, 238, 247, 0.5)' }}>
            AI CONSULTANCY · 2026
          </span>
        </div>

        {/* Headline — Instrument Serif as primary display */}
        <div className="reveal reveal-delay-1">
          <h1
            className="font-serif leading-[0.92] mb-8"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)', fontWeight: 400 }}
          >
            <span className="block font-display font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
              ARNRAY
            </span>
            <span className="block italic" style={{ color: 'var(--text-primary)', fontStyle: 'italic' }}>
              voor echt
            </span>
            <span className="block">
              <DoubleWord word="efficiënter" className="text-accent-glow italic" />
            </span>
            <span className="block font-display font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
              WERKEN
            </span>
            <span className="block italic" style={{ color: 'var(--text-primary)', fontStyle: 'italic' }}>
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
