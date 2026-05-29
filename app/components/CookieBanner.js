"use client";

import { useEffect, useState } from "react";

const CHAVE = "reconectar_cookies_ok";

export default function CookieBanner() {
  const [phase, setPhase] = useState("idle"); // idle | show | hide | gone

  useEffect(() => {
    let accepted = false;
    try {
      accepted = localStorage.getItem(CHAVE) === "1";
    } catch (e) {}
    if (accepted) {
      setPhase("gone");
      return;
    }
    const t = setTimeout(() => setPhase("show"), 800);
    return () => clearTimeout(t);
  }, []);

  const aceitar = () => {
    try {
      localStorage.setItem(CHAVE, "1");
    } catch (e) {}
    setPhase("hide");
    setTimeout(() => setPhase("gone"), 600);
  };

  if (phase === "gone") return null;

  const cls = "cookie-card" + (phase === "show" ? " show" : phase === "hide" ? " hide" : "");

  return (
    <div className={cls} role="dialog" aria-label="Aviso de cookies">
      <span className="cookie-ico" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-4-4 4 4 0 0 1-4-4 2 2 0 0 0-2-2Z" />
          <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none" />
          <circle cx="13.5" cy="15" r="1" fill="currentColor" stroke="none" />
          <circle cx="8" cy="16" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="9.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <div className="cookie-body">
        <strong className="cookie-title">Sua privacidade importa</strong>
        <p className="cookie-txt">
          Usamos cookies para oferecer a melhor experiência e entender como você
          navega. Ao continuar, você concorda com o uso.{" "}
          <a href="/politica-de-privacidade" className="cookie-link">
            Saiba mais
          </a>
          .
        </p>
        <button className="cookie-accept" type="button" onClick={aceitar}>
          Aceitar
        </button>
      </div>
    </div>
  );
}
