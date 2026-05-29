"use client";

import { useEffect, useRef } from "react";
import { useLote } from "./LoteProvider";

export default function LoteBar() {
  const { closed, activeLote, countdownPrefix, countdownTime, chips } = useLote();
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current || activeLote == null) return;
    const el = listRef.current.querySelector(`[data-lote="${activeLote}"]`);
    if (el) el.scrollIntoView({ inline: "center", block: "nearest" });
  }, [activeLote]);

  const dateLabel = (chip) => {
    const fmt = (s) => {
      const [, m, d] = s.split("-");
      return `${d}/${m}`;
    };
    return `${fmt(chip.start)} – ${fmt(chip.end)}`;
  };

  return (
    <div className="lote-bar" role="region" aria-label="Viradas de lote">
      <div className="lote-inner">
        <span className={`lote-countdown${closed ? " is-closed" : ""}`}>
          <span className="lote-pulse" aria-hidden="true"></span>
          <span>
            {countdownPrefix}
            {countdownTime && <b>{countdownTime}</b>}
          </span>
        </span>
        <div className="lote-list" ref={listRef}>
          {chips.map((chip) => (
            <span
              key={chip.n}
              className={`lote-chip${chip.active ? " is-active" : ""}${chip.past ? " is-past" : ""}`}
              data-lote={chip.n}
            >
              <b>{`Lote 0${chip.n}`}</b>
              {dateLabel(chip)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
