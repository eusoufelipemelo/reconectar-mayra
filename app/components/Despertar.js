export default function Despertar() {
  return (
    <section className="despertar">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker center">No Re.conectar você vai despertar</span>
          <h2>
            Mais <em>clareza</em>, consciência e direção
          </h2>
        </div>
        <div className="cards-3">
          <article className="card reveal d1">
            <span className="num">01</span>
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
              </svg>
            </div>
            <h3>Mais Clareza</h3>
            <p>
              Para compreender melhor seus sentimentos, suas escolhas e os
              próximos passos da sua vida pessoal e profissional.
            </p>
          </article>
          <article className="card reveal d2">
            <span className="num">02</span>
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1.2 1.5 1.3 2.5h5.4c.1-1 .5-1.7 1.3-2.5A6 6 0 0 0 12 3Z" />
                <path d="M9.5 19h5M10 21.5h4" />
              </svg>
            </div>
            <h3>Mais Consciência</h3>
            <p>
              Para perceber o que tem roubado a sua energia, a sua leveza e a sua
              paz — e começar a recuperá-las.
            </p>
          </article>
          <article className="card reveal d3">
            <span className="num">03</span>
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 12h13M12 5l7 7-7 7" />
                <path d="M21 5v14" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Mais Direção</h3>
            <p>
              Para construir uma vida mais alinhada com quem você realmente
              deseja ser daqui para frente.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
