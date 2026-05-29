export default function Footer({ home = true }) {
  const logoHref = home ? "#" : "/";
  const inicioHref = home ? "#" : "/";
  const ingressosHref = home ? "#ingressos" : "/#ingressos";

  return (
    <footer className="site-footer">
      <div className="foot-inner">
        <a href={logoHref} className="foot-logo" aria-label="Ir ao topo da página">
          <img src="/Logo.svg" alt="Re.conectar" />
        </a>
        <p className="foot-meta">
          Evento presencial · <b>27 de Junho de 2026</b>
          <br />
          ACE de Santa Cruz do Rio Pardo-SP
        </p>
        <nav className="foot-nav" aria-label="Navegação do rodapé">
          <a href={inicioHref}>Início</a>
          <span className="foot-dot" aria-hidden="true"></span>
          <a href={ingressosHref}>Ingressos</a>
          <span className="foot-dot" aria-hidden="true"></span>
          <a href="/politica-de-privacidade">Política de Privacidade</a>
        </nav>
        <div className="foot-rule"></div>
        <p className="foot-legal">
          Re.conectar — com Mayra Maximiano · CNPJ 49.003.837/0001-83
        </p>
        <p className="foot-credit">
          Desenvolvido por{" "}
          <a href="https://outboxgroup.framer.ai/" target="_blank" rel="noopener noreferrer">
            OutBox Group
          </a>
        </p>
      </div>
    </footer>
  );
}
