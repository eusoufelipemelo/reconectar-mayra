export default function Receber() {
  return (
    <section className="receber">
      <span className="glow"></span>
      <div className="wrap">
        <div className="receber-grid">
          <div
            className="lead sec-head dark reveal"
            style={{ textAlign: "left", margin: "0 0 50px", maxWidth: "620px" }}
          >
            <span className="kicker">Durante a experiência</span>
            <h2 style={{ marginTop: "22px" }}>
              O que você vai <em>receber</em>
            </h2>
          </div>

          <div className="ritem reveal d1">
            <span className="rnum">I</span>
            <div>
              <h3>Condução e direcionamento transformador</h3>
              <p>
                Eu e nossa equipe vamos te conduzir por reflexões, dinâmicas e
                experiências cuidadosamente preparadas para o seu processo de
                reconexão pessoal e profissional.
              </p>
            </div>
          </div>
          <div className="ritem reveal d2">
            <span className="rnum">II</span>
            <div>
              <h3>Kit Boas-Vindas exclusivo</h3>
              <p>
                Ao chegar no Re.conectar, você recebe um kit preparado com
                carinho para tornar a sua experiência ainda mais especial,
                acolhedora e significativa.
              </p>
            </div>
          </div>
          <div className="ritem reveal d1">
            <span className="rnum">III</span>
            <div>
              <h3>Vivências e histórias reais de transformação</h3>
              <p>
                Conheça histórias de pessoas que também já se sentiram perdidas,
                sobrecarregadas ou desconectadas — e que iniciaram uma nova
                direção pela consciência e pela mudança de mentalidade.
              </p>
            </div>
          </div>
          <div className="ritem reveal d2">
            <span className="rnum">IV</span>
            <div>
              <h3>Um ambiente de acolhimento e crescimento</h3>
              <p>
                Mais do que um evento, um espaço seguro para desacelerar, olhar
                para dentro e perceber que você não está sozinha nessa caminhada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
