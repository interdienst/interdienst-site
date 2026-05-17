import './App.css'

export default function App() {
  return (
    <div className="app">

      <header className="header">
        <div className="logo-wrap">
          <img src="/logo.png" alt="logo" className="logo" />
        </div>

        <nav className="nav">
          <a href="#">Startseite</a>
          <a href="#">Über uns</a>
          <a href="#">Leistungen</a>
          <a href="#">Projekte</a>
          <a href="#">Bewertungen</a>
          <a href="#">Kontakt</a>
        </nav>

        <div className="header-right">
          <button className="lang active">DE</button>
          <button className="lang">EN</button>

          <div className="phone">
            +49 1577 1506638
          </div>
        </div>
      </header>

      <section className="hero">

        <div className="hero-left">

          <div className="hero-subtitle">
            IHR PARTNER FÜR HOCHWERTIGEN INNENAUSBAU
          </div>

          <h1>
            Qualität, Präzision
            <br />
            und Zuverlässigkeit
          </h1>

          <p>
            Interdienst steht für professionellen Innenausbau
            und Wohnungsrenovierung auf höchstem Niveau.
            Wir verwandeln Ihre Räume in echte Wohlfühlorte.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Termin vereinbaren
            </button>

            <button className="secondary-btn">
              WhatsApp schreiben
            </button>
          </div>

        </div>

        <div className="hero-right">
          <img src="/hero.jpg" alt="hero" className="hero-image" />

          <div className="floating-card">
            <div className="floating-title">
              Saubere Arbeit
            </div>

            <div className="floating-text">
              Termintreu & zuverlässig
            </div>
          </div>
        </div>

      </section>

      <section className="services">

        <div className="service-item">
          <h3>Innenausbau</h3>
          <p>Individuelle Raumgestaltung</p>
        </div>

        <div className="service-item">
          <h3>Malerarbeiten</h3>
          <p>Professionelle Oberflächen</p>
        </div>

        <div className="service-item">
          <h3>Fliesenverlegung</h3>
          <p>Bäder, Küchen & mehr</p>
        </div>

        <div className="service-item">
          <h3>Wohnungsrenovierung</h3>
          <p>Komplette Renovierungen</p>
        </div>

      </section>

    </div>
  )
}