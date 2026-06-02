"use client";

import { useEffect, useRef } from "react";
import { useLote } from "./LoteProvider";

export default function Hero() {
  const { heroBold, heroRest } = useLote();
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const heroBg = bgRef.current;
    const heroContent = contentRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (!heroBg || reduce) return;
    const vh = () => window.innerHeight;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < vh()) {
          heroBg.style.transform = "translateY(" + y * 0.32 + "px)";
          if (heroContent) {
            heroContent.style.transform = "translateY(" + y * 0.12 + "px)";
            heroContent.style.opacity = Math.max(0, 1 - y / (vh() * 0.75));
          }
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="hero">
      <div className="hero-bg" aria-hidden="true" ref={bgRef}>
        <img src="/hero-mayra-hd.webp" alt="" className="hero-bg-img" fetchPriority="high" />
      </div>
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="hero-grain" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-top">
          <a href="#" className="hero-logo" aria-label="Re.conectar">
            <img src="/Logo.svg" alt="Re.conectar" />
          </a>
          <span className="hero-date-pill">
            Evento Presencial · <b>27 Jun</b>
          </span>
        </div>

        <div className="hero-content" ref={contentRef}>
          <div className="hero-eyebrow">
            <span className="edition-tag">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l2.4 6.3L21 9l-5 4.3L17.6 20 12 16.4 6.4 20 8 13.3 3 9l6.6-.7L12 2z" />
              </svg>
              3ª edição
            </span>
            <span className="kicker">Re.conectar — 1 dia de transformação</span>
          </div>
          <h1>
            Volte para quem <em>você</em> sempre foi por{" "}
            <span className="serif-italic">dentro</span>.
          </h1>
          <p className="hero-sub">
            Em um único dia de evento presencial, reconecte-se com a sua
            essência, resgate sua clareza e inicie uma transformação capaz de
            impactar sua vida pessoal, profissional e financeira.
          </p>

          <div className="hero-meta">
            <div className="m">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4.5" width="18" height="17" rx="2" />
                <path d="M3 9h18M8 2.5v4M16 2.5v4" />
              </svg>
              <div>
                <div className="lbl">Data</div>
                <div className="val">27 de Junho</div>
              </div>
            </div>
            <div className="m">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3.5 2" />
              </svg>
              <div>
                <div className="lbl">Horário</div>
                <div className="val">09h às 18h</div>
              </div>
            </div>
            <div className="m">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <div>
                <div className="lbl">Local</div>
                <div className="val">ACE · Santa Cruz do Rio Pardo</div>
              </div>
            </div>
          </div>

          <div className="hero-cta-row">
            <a href="#ingressos" className="btn">
              <span>Garantir meu convite</span>
              <span className="arr">→</span>
            </a>
            <a href="#metodo" className="btn ghost">
              <span>Conhecer o método</span>
            </a>
            <span className="note">
              <b>{heroBold}</b>
              {heroRest}
            </span>
          </div>
        </div>

        <div className="hero-photo-mobile" aria-hidden="true">
          <div className="hpm-frame">
            <img src="/hero-mayra-hd.webp" alt="Mayra Maximiano" fetchPriority="high" />
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="mouse">
          <i></i>
        </div>
      </div>
    </header>
  );
}
