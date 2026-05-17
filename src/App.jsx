import { useState } from "react"

export default function App() {
  const [lang, setLang] = useState("de")
  const t = {
  de: {
    home: 'Startseite',
    about: 'Über uns',
    services: 'Leistungen',
    projects: 'Projekte',
    reviews: 'Bewertungen',
    contact: 'Kontakt',

    heroSubtitle: 'IHR PARTNER FÜR HOCHWERTIGEN INNENAUSBAU',

    heroTitle: 'Qualität, Präzision und Zuverlässigkeit',

    heroText:
      'Interdienst steht für professionellen Innenausbau und Wohnungsrenovierung auf höchstem Niveau. Wir verwandeln Ihre Räume in echte Wohlfühlorte.',

    btn1: 'Termin vereinbaren',
    btn2: 'WhatsApp schreiben',

    service1: 'Innenausbau',
    service2: 'Trockenbau & Malerarbeiten',
    service3: 'Fliesenverlegung',
    service4: 'Wohnungsrenovierung',

    serviceText1: 'Individuelle Raumgestaltung',
    serviceText2: 'Professionelle Oberflächen',
    serviceText3: 'Bäder, Küchen & mehr',
    serviceText4: 'Komplette Renovierungen',
  },

  en: {
    home: 'Home',
    about: 'About us',
    services: 'Services',
    projects: 'Projects',
    reviews: 'Reviews',
    contact: 'Contact',

    heroSubtitle: 'YOUR PARTNER FOR PREMIUM INTERIOR CONSTRUCTION',

    heroTitle: 'Quality, Precision and Reliability',

    heroText:
      'Interdienst stands for professional interior construction and apartment renovation at the highest level. We transform your spaces into places of comfort.',

    btn1: 'Book appointment',
    btn2: 'Write on WhatsApp',

    service1: 'Interior Construction',
    service2: 'Painting Works',
    service3: 'Tile Installation',
    service4: 'Apartment Renovation',

    serviceText1: 'Individual room design',
    serviceText2: 'Professional surfaces',
    serviceText3: 'Bathrooms, kitchens & more',
    serviceText4: 'Complete renovations',
  }
  }
  const text = t[lang]
  return (
    <div className="app">

      <header className="header">
        <div className="logo-wrap">
          <img src="/logo.png" alt="logo" className="logo" />
        </div>

        <nav className="nav">
          <a href="#">{text.home}</a>
          <a href="#">{text.about}</a>
          <a href="#">{text.services}</a>
          <a href="#">{text.projects}</a>
          <a href="#">{text.reviews}</a>
          <a href="#">{text.contact}</a>
        </nav>

      <div className="lang-switch">
  <button
    className={lang === "de" ? "active" : ""}
    onClick={() => setLang("de")}
  >
    DE
  </button>

  <button
    className={lang === "en" ? "active" : ""}
    onClick={() => setLang("en")}
  >
    EN
  </button>

          <div
             className="phone">
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
            {text.heroText}
        
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              {text.btn1}
            </button>

            <button className="secondary-btn">
              {text.btn2}
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
          <h3>{text.service1}</h3>
          <p>{text.serviceText1}</p>
        </div>

        <div className="service-item">
          <h3>{text.service2}</h3>
          <p>{text.serviceText2}</p>
        </div>

        <div className="service-item">
          <h3>{text.service3}</h3>
          <p>{text.serviceText3}</p>
        </div>

        <div className="service-item">
          <h3>{text.service4}</h3>
          <p>{text.serviceText4}</p>
        </div>

      </section>

      <section className="reviews">
        <div className="review-card">
          <h3>★★★★★</h3>

          <p>
            Sehr professionelle Arbeit und perfekte Qualität.
          </p>

          <span>— Michael K.</span>
        </div>
      </section>

    </div>
  )
}
