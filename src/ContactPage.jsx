import { useRef, useState } from 'react'
import './App.css'
import './ContactPage.css'
import { ArrowIcon, SiteFooter, SiteHeader, WhatsAppButton } from './SiteChrome'

const team = [
  {
    name: 'Karim Noorani',
    role: 'Directeur Général',
    image: 'IMG_0194-2.jpg',
  },
  {
    name: 'Aracelli Noorani',
    role: 'Directrice Financière',
    image: 'IMG_0341-2.jpg',
  },
  {
    name: 'Khalid Emilio Noorani',
    role: 'Directeur',
    image: 'IMG_0142-4-1.jpg',
  },
  {
    name: 'Azeem Mughal',
    role: 'Finances',
    image: 'IMG_0132-3-1.jpg',
  },
  {
    name: 'Sohil Jariya',
    role: 'Operations',
    image: 'IMG_0131-4-1.jpg',
  },
  {
    name: 'Lydie Luyindula',
    role: 'Importations',
    image: 'IMG_0134-2-1.jpg',
  },
  {
    name: 'Henry Gwana',
    role: 'Manager Service Après-Vente',
    image: 'IMG_0118-4-1.jpg',
  },
  {
    name: 'Andy Kalemba',
    role: 'Manager pièces de rechange',
    image: 'IMG_0128-2-1.jpg',
  },
  {
    name: 'Papy Tshitolo',
    role: 'Électricien / SHEQ',
    image: 'IMG_0138-2-1.jpg',
  },
  {
    name: 'Emmanuel Fienga',
    role: 'Technicien Service Après-Vente',
    image: 'IMG_0120-4-1.jpg',
  },
].map((person) => ({
  ...person,
  photo: `https://i0.wp.com/unicompex.com/wp-content/uploads/2022/11/${person.image}?resize=640%2C640&ssl=1`,
}))

const offices = [
  {
    name: 'Kinshasa',
    country: 'République Démocratique du Congo',
    address: [
      '1458 Avenue Lieutenant Colonel Lukusa',
      'Croisement Avenue Mbuji-Mayi',
      'En face de Japan Motors Garage',
      'Commune de la Gombe',
      'Kinshasa, République Démocratique du Congo',
    ],
    map: 'https://goo.gl/maps/a4EykqcoaiovbVFKA',
    mapImage: 'https://i0.wp.com/unicompex.com/wp-content/uploads/2021/05/image-72.png?resize=900%2C680&ssl=1',
    contacts: [
      { title: 'Réception', phone: '+243 81 99 35 000', email: 'contact@unicompex.net' },
      {
        title: 'Ventes groupes électrogènes – Cotations',
        person: 'Mukesh Kumar Vishwakarma, Directeur Commercial',
        phone: '+243 973 833 338',
        email: 'mvishwakarma@unicompex.net',
      },
      {
        title: 'Dépannages et entretiens FG Wilson',
        person: 'Henry Gwana, Coordinateur Technique',
        phone: '+243 814 734 344',
        email: 'hgwana@unicompex.net',
      },
      {
        title: 'Pièces FG Wilson et Perkins',
        person: 'Andy Kalemba, Responsable Magasin',
        phone: '+243 817 383 000',
        email: 'akalemba@unicompex.net',
      },
    ],
  },
  {
    name: 'Lubumbashi',
    country: 'République Démocratique du Congo',
    address: [
      '42A Avenue Tshiniama',
      'Quartier Golf',
      'Commune de Kabulameshi',
      'Lubumbashi, République Démocratique du Congo',
    ],
    map: 'https://goo.gl/maps/zAyEseMPBjpomNmC6',
    mapImage: 'https://i0.wp.com/unicompex.com/wp-content/uploads/2021/05/image-74.png?resize=900%2C680&ssl=1',
    contacts: [
      {
        title: 'Responsable',
        person: 'Eric Kasongo',
        phone: '+243 816 474 499',
        email: 'ekasongo@unicompex.net',
      },
    ],
  },
  {
    name: 'Kolwezi',
    country: 'République Démocratique du Congo',
    address: ['Route Nationale N39, à côté de UAC, Kolwezi'],
    map: 'https://maps.app.goo.gl/HL21cwgikgx62h8n8',
    mapImage: 'https://i0.wp.com/unicompex.com/wp-content/uploads/2023/12/image-2.png?resize=900%2C680&ssl=1',
    contacts: [
      {
        title: 'Responsable Zone',
        person: 'Nathan Kodravele',
        phone: '+243 818 568 606',
        email: 'nkodravele@unicompex.net',
      },
    ],
  },
  {
    name: 'Goma',
    country: 'République Démocratique du Congo',
    address: ['2 Avenue Tulipier', 'Goma, République Démocratique du Congo'],
    map: 'https://goo.gl/maps/ySVE1QRzqKzBhJpR8',
    mapImage: 'https://i0.wp.com/unicompex.com/wp-content/uploads/2021/05/image-76.png?resize=900%2C680&ssl=1',
    contacts: [],
  },
  {
    name: 'Brazzaville',
    country: 'République du Congo',
    address: [],
    contacts: [{ title: 'Contact', email: 'contact@unicompex.net' }],
  },
  {
    name: 'Johannesburg',
    country: 'Afrique du Sud',
    address: [],
    contacts: [
      {
        title: 'Responsable Achats et Exportations',
        person: 'Patricia Olondo',
        phone: '+27 11 706 2912',
        mobile: '+27 79 871 9105',
        email: 'polondo@unicompex.net',
      },
    ],
  },
]

const contactHeroImage = 'https://unicompex.com/wp-content/uploads/2021/05/unicompex-2003-21.jpg'

function ContactForm() {
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const message = formData.get('message')
    const subject = encodeURIComponent(`Demande de contact — ${name}`)
    const body = encodeURIComponent(
      `Nom : ${name}\nCourriel : ${email}\nTéléphone : ${phone}\n\nMessage :\n${message}`,
    )

    setStatus('Votre logiciel de messagerie va s’ouvrir pour envoyer votre demande.')
    window.location.href = `mailto:contact@unicompex.net?subject=${subject}&body=${body}`
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="contact-name">Nom <span>(requis)</span></label>
        <input id="contact-name" name="name" autoComplete="name" required />
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Courriel <span>(requis)</span></label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form-field">
        <label htmlFor="contact-phone">Téléphone <span>(requis)</span></label>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Message <span>(requis)</span></label>
        <textarea id="contact-message" name="message" rows="5" required />
      </div>
      <button className="button button-primary form-submit" type="submit">
        Contactez-nous <ArrowIcon />
      </button>
      {status && <p className="form-status" role="status">{status}</p>}
      <p className="form-disclaimer">
        L’envoi ouvre votre logiciel de messagerie avec les informations préremplies.
      </p>
    </form>
  )
}

function ContactCard({ contact }) {
  return (
    <div className="office-contact">
      <h4>{contact.title}</h4>
      {contact.person && <p className="contact-person">{contact.person}</p>}
      {contact.phone && <a href={`tel:${contact.phone.replaceAll(' ', '')}`}>Téléphone : {contact.phone}</a>}
      {contact.mobile && <a href={`tel:${contact.mobile.replaceAll(' ', '')}`}>Mobile : {contact.mobile}</a>}
      {contact.email && <a href={`mailto:${contact.email}`}>{contact.email}</a>}
    </div>
  )
}

function OfficeCard({ office }) {
  return (
    <article className="office-card">
      {office.mapImage && (
        <a
          className="office-map"
          href={office.map}
          target="_blank"
          rel="noreferrer"
          aria-label={`Voir l’emplacement de l’agence de ${office.name} sur la carte`}
        >
          <img src={office.mapImage} alt={`Carte de localisation de l’agence Unicompex à ${office.name}`} loading="lazy" />
          <span>Voir l’emplacement <ArrowIcon /></span>
        </a>
      )}
      <div className="office-content">
        <p className="office-kicker">AGENCE</p>
        <h3>{office.name}</h3>
        <p className="office-country">{office.country}</p>
        {office.address.length > 0 && (
          <address>
            {office.address.map((line) => <span key={line}>{line}</span>)}
          </address>
        )}
        {office.map && (
          <a className="map-text-link" href={office.map} target="_blank" rel="noreferrer">
            Itinéraire sur Google Maps <ArrowIcon />
          </a>
        )}
        <div className="office-contacts">
          {office.contacts.map((contact) => <ContactCard contact={contact} key={contact.title} />)}
        </div>
      </div>
    </article>
  )
}

function ContactPage() {
  const teamGalleryRef = useRef(null)
  const teamPhotoRefs = useRef([])

  function openTeamPhoto(index) {
    teamGalleryRef.current.showModal()
    requestAnimationFrame(() => {
      teamPhotoRefs.current[index]?.scrollIntoView({ block: 'start' })
    })
  }

  return (
    <div className="site-shell">
      <SiteHeader contactPage />

      <main>
        <section className="contact-hero site-container">
          <div className="contact-hero-copy">
            <p className="eyebrow"><span /> NOUS SOMMES À VOTRE ÉCOUTE</p>
            <h1>Contactez-<span>nous.</span></h1>
            <p>
              Une question ? Vous ne savez pas quelle puissance choisir ? Besoin
              d’insonorisation ou d’une demande spéciale ? Écrivez-nous.
            </p>
            <a className="contact-hero-email" href="mailto:contact@unicompex.net">
              contact@unicompex.net <ArrowIcon />
            </a>
          </div>
          <img
            className="contact-hero-image"
            src={contactHeroImage}
            alt="Équipe et activités d’Unicompex"
            fetchPriority="high"
          />
        </section>

        <section className="contact-form-section site-container" id="contact-form">
          <div className="contact-form-intro">
            <p className="eyebrow"><span /> PARLONS DE VOTRE PROJET</p>
            <h2>Comment pouvons-nous vous aider&nbsp;?</h2>
            <p>
              Remplissez le formulaire et notre équipe vous répondra. Pour votre
              demande, indiquez un numéro de téléphone où nous pouvons vous joindre.
            </p>
            <div className="quick-contact">
              <span className="quick-contact-icon" aria-hidden="true">☎</span>
              <div>
                <span>Appelez notre réception</span>
                <a href="tel:+243819935000">+243 81 99 35 000</a>
              </div>
            </div>
            <div className="quick-contact">
              <span className="quick-contact-icon" aria-hidden="true">@</span>
              <div>
                <span>Écrivez-nous directement</span>
                <a href="mailto:contact@unicompex.net">contact@unicompex.net</a>
              </div>
            </div>
          </div>
          <ContactForm />
        </section>

        <section className="team-section">
          <div className="site-container">
            <div className="contact-section-heading">
              <div>
                <p className="eyebrow"><span /> UNE ÉQUIPE À VOTRE SERVICE</p>
                <h2>Rencontrez notre équipe</h2>
              </div>
              <p>À Kinshasa, nos équipes commerciales, financières et techniques vous accompagnent. Cliquez sur une photo pour l’agrandir et faites défiler pour découvrir l’équipe.</p>
            </div>
            <div className="team-grid">
              {team.map((person, index) => (
                <article className="team-card" key={person.name}>
                  <button
                    className="team-photo-button"
                    type="button"
                    onClick={() => openTeamPhoto(index)}
                    aria-label={`Agrandir la photo de ${person.name}`}
                  >
                    <img src={person.photo} alt={person.name} loading="lazy" />
                  </button>
                  <div className="team-card-caption">
                    <h3>{person.name}</h3>
                    <p>{person.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="offices-section site-container">
          <div className="contact-section-heading">
            <div>
              <p className="eyebrow"><span /> NOS IMPLANTATIONS</p>
              <h2>Retrouvez-nous près de chez vous</h2>
            </div>
            <p>Nos équipes sont présentes en République Démocratique du Congo et dans la région.</p>
          </div>
          <div className="offices-grid">
            {offices.map((office) => <OfficeCard office={office} key={office.name} />)}
          </div>
        </section>
      </main>

      <dialog className="team-gallery-dialog" ref={teamGalleryRef} aria-label="Photos de notre équipe">
        <button
          className="team-gallery-close"
          type="button"
          onClick={() => teamGalleryRef.current.close()}
          aria-label="Fermer la galerie photo"
        >
          ×
        </button>
        <div className="team-gallery-scroll">
          {team.map((person, index) => (
            <figure
              className="team-gallery-item"
              key={person.name}
              ref={(element) => { teamPhotoRefs.current[index] = element }}
            >
              <img src={person.photo} alt={`${person.name}, ${person.role}`} loading="lazy" />
              <figcaption>
                <strong>{person.name}</strong>
                <span>{person.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </dialog>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}

export default ContactPage
