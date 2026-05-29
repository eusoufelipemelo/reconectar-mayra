export default function Metodo() {
  return (
    <section className="metodo" id="metodo">
      <div className="wrap">
        <div className="intro reveal">
          <span className="kicker center">O método Re.conectar</span>
          <h2
            style={{
              fontSize: "clamp(2.2rem,5vw,3.5rem)",
              fontWeight: 300,
              color: "var(--petrol-700)",
              marginTop: "22px",
            }}
          >
            Não são palestras soltas.
            <br />É um{" "}
            <span className="serif-italic" style={{ color: "var(--gold-deep)" }}>
              caminho
            </span>{" "}
            em três degraus.
          </h2>
          <p>
            Toda a experiência é conduzida de forma intencional, acolhedora e
            organizada, para você sair com mais clareza, consciência e direção —
            e não mais sobrecarregada.
          </p>
        </div>

        <div className="degraus">
          <article className="degrau reveal">
            <div className="dnum">1</div>
            <div>
              <span className="dlbl">Degrau 1</span>
              <h3>Autoconhecimento</h3>
              <p>
                O primeiro passo da transformação é olhar para dentro. Aqui você
                vai compreender melhor quem você é, os padrões que carrega, o que
                tem roubado a sua energia e o que impede você de viver com mais
                leveza, clareza e direção.
              </p>
            </div>
          </article>
          <article className="degrau reveal d1">
            <div className="dnum">2</div>
            <div>
              <span className="dlbl">Degrau 2</span>
              <h3>Conscientização</h3>
              <p>
                Depois de se enxergar com mais profundidade, chega o momento de
                despertar a consciência: entender como emoções, comportamentos,
                escolhas e mentalidade impactam diretamente sua vida — e como
                mudar isso de forma prática e possível.
              </p>
            </div>
          </article>
          <article className="degrau reveal d2">
            <div className="dnum">3</div>
            <div>
              <span className="dlbl">Degrau 3</span>
              <h3>Plano de Ação</h3>
              <p>
                Transformação sem direção se perde no tempo. No último degrau,
                você organiza os próximos passos da sua vida com clareza e
                intenção, criando um plano de ação alinhado com quem você deseja
                se tornar daqui para frente.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
