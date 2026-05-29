export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="mf-orb mf-orb1" aria-hidden="true"></div>
      <div className="mf-orb mf-orb2" aria-hidden="true"></div>
      <div className="mf-orb mf-orb3" aria-hidden="true"></div>
      <div className="wrap">
        <div className="mf-ornament reveal" aria-hidden="true">
          <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 8 C33 17 33 22 28 28 C23 22 23 17 28 8Z" fill="#FFBE70" opacity=".5" />
            <path d="M28 48 C33 39 33 34 28 28 C23 34 23 39 28 48Z" fill="#FFBE70" opacity=".5" />
            <path d="M8 28 C17 33 22 33 28 28 C22 23 17 23 8 28Z" fill="#FFBE70" opacity=".5" />
            <path d="M48 28 C39 33 34 33 28 28 C34 23 39 23 48 28Z" fill="#FFBE70" opacity=".5" />
            <circle cx="28" cy="28" r="4.5" fill="#FFBE70" opacity=".9" />
            <circle cx="28" cy="28" r="14" stroke="#FFBE70" strokeWidth=".8" strokeDasharray="2 4" opacity=".28" />
          </svg>
        </div>

        <p className="ask">
          <span className="ln reveal">Um dia pode ser suficiente para</span>
          <span className="ln reveal d1">
            <em>mudar</em> a forma como você enxerga
          </span>
          <span className="ln reveal d2">a si mesmo e a sua vida?</span>
        </p>

        <span className="mf-answer-wrap reveal d2">
          <em className="mf-answer">No Re.conectar, acreditamos que sim.</em>
        </span>

        <div className="mf-vline reveal d3" aria-hidden="true"></div>

        <div className="mf-body">
          <p className="reveal d2">
            Em uma experiência presencial acolhedora e transformadora, você será
            conduzida a olhar para dentro, desacelerar o excesso e se reconectar
            com a sua <b>essência</b>, a sua <b>clareza</b> e a sua{" "}
            <b>direção</b>.
          </p>
          <p className="reveal d3">
            Porque o Re.conectar nasce justamente para isso: para te ajudar a
            lembrar da <b>força</b>, da <b>capacidade</b> e do <b>caminho</b> que
            já existem dentro de você.
          </p>
        </div>

        <div className="sig reveal d3">
          <span>Re.conectar</span>
          <div className="dot"></div>
        </div>
      </div>
    </section>
  );
}
