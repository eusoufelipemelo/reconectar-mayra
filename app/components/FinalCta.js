"use client";

import { useLote } from "./LoteProvider";

export default function FinalCta() {
  const { finalText } = useLote();
  return (
    <section className="final">
      <div className="wrap">
        <span className="kicker center reveal">3ª edição do Re.conectar</span>
        <h2 className="reveal">
          Um dia. <em>Uma nova</em>
          <br />
          direção para sua vida.
        </h2>
        <p className="reveal d1">{finalText}</p>
        <a href="#ingressos" className="btn reveal d2">
          <span>Garantir meu convite</span>
          <span className="arr">→</span>
        </a>
        <div className="micro reveal d2">
          ACE de Santa Cruz do Rio Pardo · 09h às 18h
        </div>
      </div>
    </section>
  );
}
