"use client";

import { createContext, useContext, useEffect, useState } from "react";

/* >>> EDITE AQUI os lotes: datas e preços de cada um.
   Os links da Eduzz são os mesmos em todos os lotes (não mudam). <<< */
const LOTES = [
  { n: 1, start: "2026-05-28", end: "2026-06-01", precos: { ind: 97, prem: 497, dup: 147 } },
  { n: 2, start: "2026-06-02", end: "2026-06-08", precos: { ind: 107, prem: 507, dup: 157 } },
  { n: 3, start: "2026-06-09", end: "2026-06-15", precos: { ind: 117, prem: 517, dup: 167 } },
  { n: 4, start: "2026-06-16", end: "2026-06-26", precos: { ind: 127, prem: 527, dup: 177 } },
];

const MESES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const ord = (n) => n + "º";
const ini = (s) => new Date(s + "T00:00:00");
const fim = (s) => new Date(s + "T23:59:59");
const dataExt = (d) => d.getDate() + " de " + MESES[d.getMonth()];

function loteDe(now) {
  for (const l of LOTES) {
    if (now >= ini(l.start) && now <= fim(l.end)) return l;
  }
  if (now < ini(LOTES[0].start)) return LOTES[0];
  return null; // depois do último → encerrado
}

const chipsFor = (loteN, closed) =>
  LOTES.map((l) => ({
    n: l.n,
    start: l.start,
    end: l.end,
    active: !closed && l.n === loteN,
    past: closed ? true : l.n < loteN,
  }));

// Estado padrão (SSR + 1ª renderização no cliente) = Lote 1, sem hidratação divergente.
const DEFAULT_STATE = {
  closed: false,
  activeLote: 1,
  countdownPrefix: "Viradas de lote",
  countdownTime: "",
  precos: { ind: 97, prem: 497, dup: 147 },
  ingressosTxt: "1º lote — até 1 de Junho",
  heroBold: "1º lote",
  heroRest: " até 1 de Junho",
  finalText:
    "Reserve o dia 27 de Junho para reencontrar a sua essência. As vagas do 1º lote são limitadas e vão até 1 de Junho.",
  chips: chipsFor(1, false),
};

function formatTime(diff) {
  const dd = Math.floor(diff / 864e5);
  const hh = Math.floor((diff % 864e5) / 36e5);
  const mm = Math.floor((diff % 36e5) / 6e4);
  const ss = Math.floor((diff % 6e4) / 1e3);
  const p = (n) => String(n).padStart(2, "0");
  return (dd > 0 ? dd + "d " : "") + p(hh) + "h " + p(mm) + "m " + p(ss) + "s";
}

function compute(now) {
  const lote = loteDe(now);

  if (!lote) {
    return {
      closed: true,
      activeLote: null,
      countdownPrefix: "Inscrições encerradas",
      countdownTime: "",
      precos: { ind: 97, prem: 497, dup: 147 },
      ingressosTxt: "Inscrições encerradas",
      heroBold: "Inscrições encerradas",
      heroRest: "",
      finalText:
        "As inscrições para esta edição do Re.conectar foram encerradas. Fale com a nossa equipe pelo WhatsApp para entrar na lista de espera.",
      chips: chipsFor(null, true),
    };
  }

  const fimData = fim(lote.end);
  const o = ord(lote.n);
  const diff = fimData - now;

  return {
    closed: false,
    activeLote: lote.n,
    countdownPrefix: o + " lote encerra em ",
    countdownTime: diff > 0 ? formatTime(diff) : "00h 00m 00s",
    precos: lote.precos,
    ingressosTxt: o + " lote — até " + dataExt(fimData),
    heroBold: o + " lote",
    heroRest: " até " + dataExt(fimData),
    finalText:
      "Reserve o dia 27 de Junho para reencontrar a sua essência. As vagas do " +
      o +
      " lote são limitadas e vão até " +
      dataExt(fimData) +
      ".",
    chips: chipsFor(lote.n, false),
  };
}

const LoteContext = createContext(DEFAULT_STATE);
export const useLote = () => useContext(LoteContext);

export default function LoteProvider({ children }) {
  const [state, setState] = useState(DEFAULT_STATE);

  useEffect(() => {
    const update = () => setState(compute(new Date()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <LoteContext.Provider value={state}>{children}</LoteContext.Provider>;
}
