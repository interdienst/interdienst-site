import './App.css'
import { useState } from 'react'

export default function App() {

  const [lang, setLang] = useState('de')

  const t = {
    de: {
      nav1: 'Startseite',
      nav2: 'Über uns',
      nav3: 'Leistungen',
      nav4: 'Projekte',
      nav5: 'Bewertungen',
      nav6: 'Kontakt',

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
      serviceText2: 'Spiegelglatte Oberflächen',
      serviceText3: 'Präzise Fliesenarbeiten',
      serviceText4: 'Komplette Renovierungen',

      why: 'Warum Interdienst?',

      why1: 'Erfahrenes & qualifiziertes Team',
      why2: 'Hochwertige Materialien',
      why3: 'Termintreue & Zuverlässigkeit',
      why4: 'Faire & transparente Preise',
      why5: 'Saubere & professionelle Arbeit',

      reviews: 'Kundenbewertungen',

      review1:
        'Sehr zufrieden mit der Arbeit von Interdienst. Alles wurde zuverlässig, sauber und termingerecht umgesetzt.',

      review2:
        'Top Qualität, gute Kommunikation und ein tolles Ergebnis. Wir können Interdienst nur weiterempfehlen!',

      review3:
        'Professionell, pünktlich und sehr genau. Unsere Wohnung sieht fantastisch aus!',

      location: 'Unser Standort'
    },

    en: {
      nav1: 'Home',
      nav2: 'About',
      nav3: 'Services',
      nav4: 'Projects',
      nav5: 'Reviews',
      nav6: 'Contact',

      heroSubtitle: 'YOUR PARTNER FOR PREMIUM INTERIOR CONSTRUCTION',

      heroTitle: 'Quality, Precision and Reliability',

      heroText:
        'Interdienst stands for professional interior construction and apartment renovation of the highest standard.',

      btn1: 'Book Appointment',
      btn2: 'Write on WhatsApp',

      service1: 'Interior Construction',
      service2: 'Painting Works',
      service3: 'Tile Installation',
      service4: 'Apartment Renovation',

      serviceText1: 'Individual room design',
      serviceText2: 'Professional painting works',
      serviceText3: 'Precise tile installation',
      serviceText4: 'Complete renovations',

      why: 'Why Interdienst?',

      why1: 'Experienced & qualified team',
      why2: 'Premium materials',
      why3: 'Reliable & punctual',
      why4: 'Fair & transparent pricing',
      why5: 'Clean & professional work',

      reviews: 'Customer Reviews',

      review1:
        'Very satisfied with the work. Everything was completed professionally and on time.',

      review2:
        'Top quality, excellent communication and great results. Highly recommended!',

      review3:
        'Professional, punctual and precise. Our apartment looks amazing!',

      location: 'Our Location'
    }
  }

  const text = t[lang]

  return (
    <div className="site">

      <header className="header">

        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>

        <nav className="nav">
          <a href="#">{text.nav1}</a>
          <a href="#about">{text.nav2}</a>
          <a href="#services">{text.nav3}</a>
          <a href="#projects">{text.nav4}</a>
          <a href="#reviews">{text.nav5}</a>
          <a href="#contact">{text.nav6}</a>
        </nav>

        <div className="header-right">

          <div className="lang-switch">

            <button
              onClick={() => setLang('de')}
              className={lang === 'de' ? 'active' : ''}
            >
              DE
            </button>

            <button
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'active' : ''}
            >
              EN
            </button>

          </div>

          <a className="phone" href="tel:+4915771506638">
            +49 1577 1506638
          </a>

        </div>

      </header>

      <section className="hero">

        <div className="hero-left">

          <div className="hero-subtitle">
            {text.heroSubtitle}
          </div>

          <h1>{text.heroTitle}</h1>

          <p>{text.heroText}</p>

          <div className="hero-buttons">

            <a
              href="tel:+4915771506638"
              className="primary-btn"
            >
              {text.btn1}
            </a>

            <a
              href="https://wa.me/4915771506638"
              target="_blank"
              className="secondary-btn"
            >
              {text.btn2}
            </a>

          </div>

        </div>

        <div className="hero-right">

          <img src="/hero.jpg" alt="hero" />

          <div className="hero-badge">
            <strong>Saubere Arbeit</strong>
            <span>Termintreu & zuverlässig</span>
          </div>

        </div>

      </section>
  
      <section
        className="services-bar"
        id="services"
      >
        <div className="services-grid">

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

        </div>
      </section>

      <section className="info-section">

        <div className="why">

          <h2>{text.why}</h2>

          <ul>
            <li>{text.why1}</li>
            <li>{text.why2}</li>
            <li>{text.why3}</li>
            <li>{text.why4}</li>
            <li>{text.why5}</li>
          </ul>

        </div>

        <div
          className="reviews"
          id="reviews"
        >

          <h2>{text.reviews}</h2>

          <div className="reviews-grid">

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>{text.review1}</p>
              <strong>Michael S.</strong>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>{text.review2}</p>
              <strong>Anna K.</strong>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>{text.review3}</p>
              <strong>Thomas R.</strong>
            </div>

          </div>

        </div>

        <section className="location-section">

  <div className="location-container">

    <div className="location-info">

      <span className="section-subtitle">
        Kontakt & Standort
      </span>

      <h2>Unser Standort</h2>

      <p>
        Wir sind Ihr zuverlässiger Partner für Innenausbau,
        Renovierung, Fliesenverlegung und Malerarbeiten.
      </p>

      <div className="location-details">

        <div className="detail-item">
          <strong>Adresse:</strong>
          <span>Elsdorf, Deutschland</span>
        </div>

        <div className="detail-item">
          <strong>Telefon:</strong>
          <span>+49 1577 1506638</span>
        </div>

        <div className="detail-item">
          <strong>E-Mail:</strong>
          <span>interdienst@gmail.com</span>
        </div>

      </div>

      <a href="#contact" className="location-btn">
        Termin vereinbaren
      </a>

    </div>

    <div className="location-map">

      <iframe
        title="map"
        src="https://maps.google.com/maps?q=Elsdorf&t=&z=13&ie=UTF8&iwloc=&output=embed"
        loading="lazy"
      ></iframe>

    </div>

  </div>

      </section>

      </section>

      <footer
        className="footer"
        id="contact"
      >

        <div>
          © 2015 Interdienst Innenausbau
        </div>

        <div className="footer-links">
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </div>

        <div>
          interdienst@gmail.com
        </div>

      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/4915771506638"
        target="_blank"
      >
        WhatsApp
      </a>

    </div>
  )
}