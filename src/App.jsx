import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MessageCircle,
  Phone,
  Star,
  Globe
} from 'lucide-react'

import './App.css'

export default function App() {
  const [lang, setLang] = useState('de')

  const t = {
    de: {
      slogan: 'Premium Innenausbau & Renovierung',
      heroTitle: 'Innenausbau auf höchstem Niveau',
      heroText:
        'Professionelle Renovierungs- und Innenausbauarbeiten in Deutschland.',
      button1: 'Termin vereinbaren',
      button2: 'Jetzt anrufen',
      services: 'Unsere Leistungen',
      reviews: 'Kundenbewertungen',
      contact: 'Kontakt',
      location: '50189 Elsdorf, Deutschland'
    },

    en: {
      slogan: 'Premium Interior Construction & Renovation',
      heroTitle: 'High-End Interior Construction',
      heroText:
        'Professional renovation and interior construction services in Germany.',
      button1: 'Book Appointment',
      button2: 'Call Now',
      services: 'Our Services',
      reviews: 'Customer Reviews',
      contact: 'Contact',
      location: '50189 Elsdorf, Germany'
    }
  }

  return (
    <div className="site">

      {/* WhatsApp */}
      <a
        href="https://wa.me/4915771506638"
        target="_blank"
        className="whatsapp"
      >
        <MessageCircle size={30} />
      </a>

      {/* HEADER */}
      <header className="header">

        <div className="logo-wrap">

          <img
            src="/logo.png"
            alt="Interdienst Logo"
            className="logo-img"
          />

          <div>
            <h1>Interdienst</h1>
            <p>{t[lang].slogan}</p>
          </div>

        </div>

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

          <a href="tel:+4915771506638" className="call-btn">
            <Phone size={18} />
            +49 1577 1506638
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="hero">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >

          <div className="premium-badge">
            <Globe size={18} />
            Germany Premium Service
          </div>

          <h2>{t[lang].heroTitle}</h2>

          <p>{t[lang].heroText}</p>

          <div className="hero-buttons">

            <button className="primary-btn">
              {t[lang].button1}
            </button>

            <button className="secondary-btn">
              {t[lang].button2}
            </button>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-image-wrap"
        >

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
            alt="Interior"
            className="hero-image"
          />

        </motion.div>

      </section>

      {/* SERVICES */}
      <section className="services">

        <div className="section-title">
          <h3>{t[lang].services}</h3>
        </div>

        <div className="services-grid">

          {[
            'Innenausbau',
            'Wohnungsrenovierung',
            'Fliesenverlegung',
            'Malerarbeiten'
          ].map((service) => (

            <motion.div
              whileHover={{ y: -10 }}
              className="service-card"
              key={service}
            >

              <div className="service-icon"></div>

              <h4>{service}</h4>

            </motion.div>

          ))}

        </div>

      </section>

      {/* REVIEWS */}
      <section className="reviews">

        <div className="section-title">
          <h3>{t[lang].reviews}</h3>
        </div>

        <div className="reviews-grid">

          {[
            'Sehr professionelle Arbeit.',
            'Top Qualität und schnelle Umsetzung.',
            'Perfekte Renovierung und faire Preise.'
          ].map((review) => (

            <div className="review-card" key={review}>

              <div className="stars">

                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} />
                ))}

              </div>

              <p>{review}</p>

            </div>

          ))}

        </div>

      </section>

      {/* LOCATION */}
      <section className="location">

        <div className="section-title">
          <h3>{t[lang].contact}</h3>
        </div>

        <div className="location-card">

          <p>{t[lang].location}</p>

          <a href="tel:+4915771506638">
            +49 1577 1506638
          </a>

        </div>

      </section>

    </div>
  )
}