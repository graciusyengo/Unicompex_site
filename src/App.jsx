import { useEffect, useState } from 'react'
import './App.css'
import generatorHero from './assets/generator-hero.jpg'
import generatorPhoto from './assets/images/GENERATEUR1.jpeg'
import servicePhoto from './assets/images/blog2.jpg'
import productPhoto from './assets/images/blog4.jpeg'
import partnerLogos from './assets/images/partner-logos.png'
import { ArrowIcon, SiteFooter, SiteHeader, WhatsAppButton } from './SiteChrome'

const galleryPhotos = [
  {
    src: productPhoto,
    alt: 'Présentation d’un groupe électrogène FG Wilson',
    caption: 'Découverte de nos équipements et solutions.',
  },
  {
    src: generatorHero,
    alt: 'Groupe électrogène FG Wilson en environnement industriel',
    caption: 'La fiabilité énergétique au cœur de vos activités.',
  },
  {
    src: servicePhoto,
    alt: 'Technicien intervenant sur un groupe électrogène',
    caption: 'L’expertise technique au service de vos installations.',
  },
  {
    src: generatorPhoto,
    alt: 'Groupe électrogène FG Wilson',
    caption: 'Des équipements de puissance pour vos projets.',
  },
]

const solutions = [
  {
    number: '01',
    title: 'Équipements fiables',
    description: 'Des équipements sélectionnés pour répondre aux exigences de votre activité.',
  },
  {
    number: '02',
    title: 'Accompagnement expert',
    description: 'Une équipe à vos côtés pour trouver la solution adaptée à votre projet.',
  },
  {
    number: '03',
    title: 'Service de proximité',
    description: 'Un suivi attentif, de votre première demande jusqu’à la mise en service.',
  },
]

const clients = [
  'Airtel',
  'Helios Towers',
  'Vodacom',
  'Rawbank',
  'Orange',
  'TMB',
  'Pullman',
  'FPI',
  'Kamoto',
  'The American School of Kinshasa',
  'REGIDESO',
  'RVA',
]

function App() {
  const [activePhoto, setActivePhoto] = useState(null)

  useEffect(() => {
    if (activePhoto === null) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') setActivePhoto(null)
      if (event.key === 'ArrowRight') {
        setActivePhoto((index) => (index + 1) % galleryPhotos.length)
      }
      if (event.key === 'ArrowLeft') {
        setActivePhoto((index) => (index - 1 + galleryPhotos.length) % galleryPhotos.length)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activePhoto])

  function scrollGallery(event) {
    if (event.deltaY === 0) return
    event.preventDefault()
    setActivePhoto((index) => (
      event.deltaY > 0
        ? (index + 1) % galleryPhotos.length
        : (index - 1 + galleryPhotos.length) % galleryPhotos.length
    ))
  }

  return (
    <div className="site-shell" id="accueil">
      <SiteHeader />

      <main className="site-container">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Votre partenaire en solutions énergétiques</p>
            <h1 id="hero-title">
              L’énergie qui fait avancer <span>vos projets.</span>
            </h1>
            <p className="hero-description">
              Des équipements fiables et un accompagnement sur mesure pour les
              entreprises, les professionnels et les collectivités.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/devis.html">
                Obtenir un devis <ArrowIcon />
              </a>
              <a className="text-link" href="#solutions">
                Découvrir nos solutions <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-icon" aria-hidden="true">✓</span>
              <span>Un accompagnement de confiance, à chaque étape.</span>
            </div>
          </div>

          <div className="hero-visual">
            <img
              className="hero-image"
              src={generatorHero}
              alt="Groupe électrogène FG Wilson installé sur un site industriel"
            />
            <span className="photo-caption">L’énergie fiable, partout où vous en avez besoin.</span>
          </div>
        </section>

        <section className="trust-strip" aria-label="Nos engagements">
          <p>Un partenaire engagé pour la continuité de vos activités</p>
          <div className="trust-items">
            <span><i aria-hidden="true">✳</i> Fiabilité</span>
            <span><i aria-hidden="true">↗</i> Performance</span>
            <span><i aria-hidden="true">◎</i> Proximité</span>
          </div>
        </section>

        <section className="clients-section" aria-labelledby="clients-title">
          <div className="clients-heading">
            <p className="eyebrow"><span /> ILS NOUS FONT CONFIANCE</p>
            <h2 id="clients-title">Et pourquoi pas vous ?</h2>
            <p>
              Nous accompagnons des entreprises et des institutions de
              référence dans leurs besoins en énergie et en maintenance.
            </p>
          </div>
          <div className="clients-logos" aria-label={`Partenaires : ${clients.join(', ')}`}>
            <img
              src={partnerLogos}
              alt={`Logos de partenaires et clients d’Unicompex : ${clients.join(', ')}`}
              loading="lazy"
            />
          </div>
        </section>

        <section className="solutions-section" id="solutions">
          <div className="section-heading" id="apropos">
            <div>
              <p className="eyebrow"><span /> CE QUI NOUS ANIME</p>
              <h2>Des solutions pensées<br />pour <span>aller plus loin.</span></h2>
            </div>
            <p className="section-intro">
              Chaque projet est différent. Nous mettons notre expertise à votre
              service pour vous proposer des réponses concrètes et adaptées.
            </p>
          </div>
          <div className="solution-cards">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.number}>
                <span className="card-number">{solution.number}</span>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <a href="/devis.html" aria-label={`En savoir plus : ${solution.title}`}>
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section" id="galerie" aria-labelledby="gallery-title">
          <div className="gallery-heading">
            <div>
              <p className="eyebrow"><span /> EN IMAGES</p>
              <h2 id="gallery-title">Notre galerie</h2>
            </div>
            <p>Découvrez nos équipements et quelques-unes de nos solutions énergétiques.</p>
          </div>
          <div className="gallery-grid">
            {galleryPhotos.map((photo, index) => (
              <button
                className="gallery-item"
                key={photo.src}
                type="button"
                onClick={() => setActivePhoto(index)}
                aria-label={`Agrandir la photo : ${photo.alt}`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <span>{photo.caption}</span>
              </button>
            ))}
          </div>
          <p className="gallery-hint">Cliquez sur une photo pour l’agrandir, puis faites défiler pour voir les suivantes.</p>
        </section>
      </main>

      {activePhoto !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Galerie photo"
          onClick={() => setActivePhoto(null)}
          onWheel={scrollGallery}
        >
          <button
            className="gallery-close"
            type="button"
            onClick={() => setActivePhoto(null)}
            aria-label="Fermer la galerie"
          >
            ×
          </button>
          <button
            className="gallery-arrow gallery-previous"
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setActivePhoto((index) => (index - 1 + galleryPhotos.length) % galleryPhotos.length)
            }}
            aria-label="Photo précédente"
          >
            ‹
          </button>
          <figure className="gallery-lightbox-figure" onClick={(event) => event.stopPropagation()}>
            <img src={galleryPhotos[activePhoto].src} alt={galleryPhotos[activePhoto].alt} />
            <figcaption>
              <span>{galleryPhotos[activePhoto].caption}</span>
              <span>{activePhoto + 1} / {galleryPhotos.length}</span>
            </figcaption>
          </figure>
          <button
            className="gallery-arrow gallery-next"
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setActivePhoto((index) => (index + 1) % galleryPhotos.length)
            }}
            aria-label="Photo suivante"
          >
            ›
          </button>
        </div>
      )}

      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}

export default App
