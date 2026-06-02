"use client";

import { useLote } from "./LoteProvider";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

function BuyButton({ href, label, closed }) {
  if (closed) {
    return (
      <a className="btn is-closed" aria-disabled="true" role="link">
        <span>Inscrições encerradas</span>
      </a>
    );
  }
  return (
    <a href={href} className="btn" target="_blank" rel="noopener noreferrer">
      <span>{label}</span>
      <span className="arr">→</span>
    </a>
  );
}

export default function Ingressos() {
  const { precos, ingressosTxt, closed } = useLote();

  return (
    <section className="ingressos" id="ingressos">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker center">Garanta seu lugar</span>
          <h2>
            Escolha o seu <em>convite</em>
          </h2>
          <span className="lote">
            <span className="pulse"></span>
            <span>{ingressosTxt}</span>
          </span>
        </div>

        <div className="tickets">
          <article className="ticket reveal d1">
            <span className="tag">Individual</span>
            <h3>Para você</h3>
            <div className="price">
              <small>R$</small>
              {precos.ind}
            </div>
            <ul>
              <li>
                <Check />
                01 convite para o evento
              </li>
              <li>
                <Check />
                01 Kit Boas-Vindas exclusivo
              </li>
              <li>
                <Check />
                Dia completo de experiência
              </li>
            </ul>
            <BuyButton href="https://chk.eduzz.com/KW8ZV87O01" label="Quero esse" closed={closed} />
          </article>

          <article className="ticket feat reveal d2">
            <span className="star-badge">★ Mais transformador</span>
            <span className="tag">Premium</span>
            <h3>Para ir além</h3>
            <div className="price">
              <small>R$</small>
              {precos.prem}
            </div>
            <ul>
              <li>
                <Check />
                01 convite para o evento
              </li>
              <li>
                <Check />
                01 Kit Boas-Vindas exclusivo
              </li>
              <li>
                <Check />
                01 Sessão Destrave Online
              </li>
              <li>
                <Check />
                Acompanhamento individual
              </li>
            </ul>
            <BuyButton href="https://chk.eduzz.com/8017DNA607" label="Quero o Premium" closed={closed} />
          </article>

          <article className="ticket reveal d3">
            <span className="tag">Duplo</span>
            <h3>Para vir junto</h3>
            <div className="price">
              <small>R$</small>
              {precos.dup}
            </div>
            <ul>
              <li>
                <Check />
                02 convites para o evento
              </li>
              <li>
                <Check />
                02 Kits Boas-Vindas exclusivos
              </li>
              <li>
                <Check />
                Traga alguém especial com você
              </li>
            </ul>
            <BuyButton href="https://chk.eduzz.com/7WXG1K6D0A" label="Quero esse" closed={closed} />
          </article>
        </div>
      </div>
    </section>
  );
}
