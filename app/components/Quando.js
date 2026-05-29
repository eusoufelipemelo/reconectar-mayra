export default function Quando() {
  return (
    <section className="quando" id="quando">
      <span className="quando-orb" aria-hidden="true"></span>
      <span className="quando-orb b" aria-hidden="true"></span>
      <div className="wrap">
        <div
          className="sec-head dark reveal"
          style={{ textAlign: "left", marginBottom: "50px", maxWidth: "600px" }}
        >
          <span className="kicker">Quando &amp; onde</span>
          <h2 style={{ color: "var(--cream)", marginTop: "22px" }}>
            Reserve <em>esse dia</em> para você
          </h2>
        </div>
        <div className="quando-grid">
          <div className="big-date reveal d1">
            <span className="big-date">
              <span className="d">27</span>
              <span className="m">de Junho</span>
            </span>
            <span className="sat">Sábado · 2026</span>
          </div>
          <div className="reveal d2">
            <div className="place-card">
              <div className="rows">
                <div className="row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <div>
                    <div className="lbl">Local</div>
                    <div className="val">
                      ACE
                      <small>Praça Dep. Leônidas Camarinha, 290 · Centro</small>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.5 2" />
                  </svg>
                  <div>
                    <div className="lbl">Horário</div>
                    <div className="val">
                      09h às 18h<small>Sábado, 27 de Junho de 2026</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="map-wrap reveal d3">
                <iframe
                  className="map-embed"
                  title="Mapa — ACE de Santa Cruz do Rio Pardo"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-49.6347%2C-22.9132%2C-49.6187%2C-22.8992&layer=mapnik"
                ></iframe>
                <span className="map-pin" aria-hidden="true"></span>
              </div>
              <a
                className="map-btn"
                href="https://www.google.com/maps/dir/?api=1&destination=Pra%C3%A7a%20Dep.%20Le%C3%B4nidas%20Camarinha%2C%20290%20-%20Centro%2C%20Santa%20Cruz%20do%20Rio%20Pardo%20-%20SP%2C%2018900-019"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>Como chegar</span>
                <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
