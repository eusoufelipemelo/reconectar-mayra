"use client";

import { useEffect, useRef, useState } from "react";

const SLIDES = [
  { src: "/evento-01.webp", alt: "Mayra Maximiano abrindo uma edição anterior do Re.conectar no palco", caption: "A abertura" },
  { src: "/evento-02.webp", alt: "Plateia reunida em uma edição anterior do Re.conectar", caption: "Presença total" },
  { src: "/evento-03.webp", alt: "Mayra Maximiano palestrando sobre o poder da mente sobre o corpo", caption: "O poder da mente" },
  { src: "/evento-04.webp", alt: "Kits de boas-vindas preparados para os participantes", caption: "Kit boas-vindas" },
  { src: "/evento-05.webp", alt: "Foto de grupo das participantes de uma edição anterior do Re.conectar", caption: "Todos juntos" },
  { src: "/evento-06.webp", alt: "Mesa de coffee break do evento Re.conectar", caption: "Coffee break" },
  { src: "/evento-07.webp", alt: "Participantes atentas durante a palestra do Re.conectar", caption: "Escuta e troca" },
  { src: "/evento-08.webp", alt: "Mesa com bolo e doces preparados com carinho para o evento", caption: "Nos detalhes" },
  { src: "/evento-09.webp", alt: "Mesa de café e recepção do evento Re.conectar", caption: "Receber bem" },
];

const EmptyIco = () => (
  <svg className="car-empty-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <rect x="3" y="6" width="18" height="14" rx="2" />
    <circle cx="12" cy="13" r="3.5" />
    <path d="M8 6l1.5-2h5L16 6" />
  </svg>
);

export default function Galeria() {
  const trackRef = useRef(null);
  const [lb, setLb] = useState(null); // { src, alt } | null

  // marquee: deslocamento exato (emenda perfeita c/ gap) + velocidade ~70px/s
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const setVel = () => {
      const cs = getComputedStyle(track);
      const gap = parseFloat(cs.columnGap || cs.gap || "0") || 0;
      const larguraConjunto = (track.scrollWidth + gap) / 2;
      track.style.setProperty("--shift", "-" + larguraConjunto + "px");
      const dur = Math.max(28, Math.round(larguraConjunto / 70));
      track.style.setProperty("--marq", dur + "s");
    };
    setVel();
    window.addEventListener("resize", setVel);
    return () => window.removeEventListener("resize", setVel);
  }, []);

  // lightbox: trava o scroll do body + fecha no Esc
  useEffect(() => {
    if (!lb) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setLb(null);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [lb]);

  const openSlide = (e, slide) => {
    if (!window.matchMedia("(min-width:769px)").matches) return; // mobile = arraste manual
    if (e.currentTarget.classList.contains("is-empty")) return;
    setLb({ src: slide.src, alt: slide.alt });
  };

  const onImgError = (e) => {
    const fig = e.currentTarget.closest(".car-slide");
    if (fig) fig.classList.add("is-empty");
  };

  const renderSlide = (slide, i, clone) => (
    <figure
      key={(clone ? "c" : "s") + i}
      className={`car-slide${clone ? " is-clone" : ""}`}
      aria-hidden={clone ? "true" : undefined}
      onClick={(e) => openSlide(e, slide)}
    >
      <EmptyIco />
      <img src={slide.src} alt={slide.alt} onError={onImgError} loading="lazy" />
      <figcaption>
        <span>Re.conectar</span>
        {slide.caption}
      </figcaption>
    </figure>
  );

  return (
    <section className="galeria" id="galeria">
      <div className="gal-orb gal-orb1" aria-hidden="true"></div>
      <div className="gal-orb gal-orb2" aria-hidden="true"></div>
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker center">Edições anteriores</span>
          <h2>
            Momentos que já <em>transformaram</em>
          </h2>
          <p className="gal-sub">
            Um pouco do que acontece quando centenas de pessoas decidem se
            reconectar. Veja como foram as edições anteriores do Re.conectar.
          </p>
        </div>
      </div>

      <div className="carousel reveal">
        <div className="car-track" ref={trackRef}>
          {SLIDES.map((s, i) => renderSlide(s, i, false))}
          {SLIDES.map((s, i) => renderSlide(s, i, true))}
        </div>
      </div>

      {lb && (
        <div
          className="lightbox is-open"
          role="dialog"
          aria-label="Foto ampliada"
          onClick={() => setLb(null)}
        >
          <button
            className="lb-close"
            type="button"
            aria-label="Fechar"
            onClick={(e) => {
              e.stopPropagation();
              setLb(null);
            }}
          >
            ×
          </button>
          <img className="lb-img" src={lb.src} alt={lb.alt} />
        </div>
      )}
    </section>
  );
}
