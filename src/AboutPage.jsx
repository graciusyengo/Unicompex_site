import { useEffect, useState } from 'react'
import './App.css'
import './AboutPage.css'
import { SiteFooter, SiteHeader, WhatsAppButton } from './SiteChrome'
import aboutImage from './assets/generator-hero.jpg'

const founderImage =
  'https://i0.wp.com/unicompex.com/wp-content/uploads/2021/05/image.png?resize=642%2C528&ssl=1'

const milestones = [
  {
    period: 'Années 1950',
    title: 'Les premiers commerces',
    description:
      'Sultanali Noorani s’installe au Congo et développe ses premières activités commerciales, d’abord à Léopoldville (Kinshasa), puis à Mbuji-Mayi, Kananga et Lubumbashi.',
  },
  {
    period: 'Années 1970–1980',
    title: 'Une entreprise familiale',
    description:
      'Sultan développe notamment Sopal et Isombe Honda. Son fils Karim, ingénieur en génie mécanique diplômé de l’Université Concordia, rejoint l’entreprise familiale en 1980.',
  },
  {
    period: '19 juillet 1997',
    title: 'La création d’Unicompex',
    description:
      'Karim et son père Sultan fondent Unicompex et relancent leurs activités en RDC autour de la vente et de la maintenance de groupes électrogènes.',
  },
  {
    period: '2001',
    title: 'Partenaire FG Wilson',
    description:
      'Unicompex devient le distributeur exclusif de FG Wilson en République Démocratique du Congo.',
  },
  {
    period: 'Depuis 2010',
    title: 'Une présence qui grandit',
    description:
      'L’entreprise accompagne des projets télécoms et industriels dans plusieurs provinces et poursuit le développement de ses équipes et de ses services.',
  },
]

const values = [
  {
    number: '01',
    title: 'Fiabilité',
    description:
      'Nous aidons nos clients à assurer la continuité de leurs activités grâce à des équipements adaptés et à un service attentif.',
  },
  {
    number: '02',
    title: 'Expertise',
    description:
      'Notre expérience en énergie de secours, maintenance et pièces nous permet d’accompagner les installations dans la durée.',
  },
  {
    number: '03',
    title: 'Proximité',
    description:
      'Présents dans plusieurs villes de la RDC, nous travaillons au plus près des réalités de nos clients et de leurs équipes.',
  },
]

const engagementPhotos = [
  {
    src: 'https://i0.wp.com/unicompex.com/wp-content/uploads/2024/01/image-3.png?resize=800%2C533&ssl=1',
    alt: 'Équipe Unicompex au travail',
  },
  {
    src: 'https://i0.wp.com/unicompex.com/wp-content/uploads/2024/01/image-1.png?resize=687%2C1024&ssl=1',
    alt: 'Intervention et engagement des équipes Unicompex',
  },
]

const jobOpenings = [
  {
    title: 'Manager SHEQ RDC',
    locations: 'Kinshasa',
    contract: 'Contrat expatrié ou local',
    requirements: [
      'Excellentes compétences pour mettre en place et maintenir un système SHEQ, et faire du SHEQ la priorité avant toute intervention.',
      'Améliorer les comportements et attitudes du personnel, piloter les projets d’amélioration SHEQ et assurer le lien avec les clients et fournisseurs.',
      'Gérer une équipe SHEQ, obtenir des résultats rapidement, former le personnel et réaliser des audits internes.',
      'Expérience prouvée en SHEQ (diplôme et/ou expérience en RDC ou ailleurs). La connaissance de l’anglais est un atout.',
      'Suivre les procédures de certification ISO 45001, ISO 14001 et ISO 9001, et transmettre des rapports hebdomadaires et mensuels à la direction.',
    ],
    note: 'Liste non exhaustive des responsabilités.',
  },
  {
    title: 'Technicien(ne) Power – Groupes électrogènes grande puissance',
    locations: 'Kinshasa, Lubumbashi',
    contract: 'Contrat expatrié ou local, selon le profil et les besoins',
    requirements: [
      'Assurer la synchronisation, la mise en route, l’entretien et le dépannage de groupes électrogènes.',
      'Grande expérience en mécanique de moteurs thermiques Perkins, en électronique et en électricité.',
      'Expérience en installation de groupes électrogènes et habilitation électrique.',
    ],
  },
  {
    title: 'Technicien(ne) Power Telecom',
    locations: 'Toute la RDC',
    contract: 'Contrat local, selon le profil et les besoins',
    requirements: [
      'Assurer l’entretien électromécanique des groupes électrogènes et des équipements Power des sites télécoms (BBS, redresseurs, AVR, etc.).',
      'Permis de conduire voiture et moto, diplôme technique en électromécanique et excellentes compétences en mécanique de moteurs diesel.',
      'Être rigoureux(se), curieux(se) et justifier d’une expérience en entretien et dépannage de groupes électrogènes (références nécessaires).',
      'La connaissance de l’anglais est un atout.',
    ],
  },
  {
    title: 'Technicien(ne) Ravitaillement',
    locations: 'Kinshasa',
    contract: 'Contrat local, selon le profil et les besoins',
    requirements: [
      'Assurer le ravitaillement en carburant des sites télécoms et le travail sur le terrain.',
      'Faire preuve d’intégrité, d’honnêteté et de compétence.',
      'Être à l’aise avec l’informatique, les applications sur smartphone et avoir des connaissances en électronique.',
    ],
  },
  {
    title: 'Agent Network Operating Center',
    locations: 'Kinshasa, Goma',
    contract: 'Contrat local, selon le profil et les besoins',
    requirements: [
      'Suivre à distance les sites télécoms et coordonner en temps réel les techniciens sur le terrain.',
      'Avoir une bonne gestion de la pression et du temps, des bases techniques et le sens du service client.',
    ],
  },
  {
    title: 'Commercial(e)',
    locations: 'Kinshasa, Lubumbashi',
    contract: 'Contrat expatrié ou local, selon le profil et les besoins',
    requirements: [
      'Développer les ventes et le marketing, en ligne et sur le terrain.',
      'Avoir une formation en marketing et vente, être dynamique et présenter une attitude professionnelle.',
      'Justifier d’une expérience en ventes et marketing B2B. La connaissance de l’anglais et des groupes électrogènes est un atout.',
    ],
  },
]

function AboutLayout({ children, pageClass = '' }) {
  return (
    <div className={`site-shell about-page ${pageClass}`.trim()}>
      <SiteHeader aboutPage />
      <main>{children}</main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}

function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="about-section-heading">
      <p className="eyebrow"><span /> {eyebrow}</p>
      <h1>{title}</h1>
      {children && <p>{children}</p>}
    </div>
  )
}

function AboutPage() {
  return (
    <AboutLayout>
      <section className="about-hero site-container">
        <div className="about-hero-copy">
          <p className="eyebrow"><span /> À PROPOS D’UNICOMPEX</p>
          <h1>Une histoire de confiance, d’énergie et d’engagement.</h1>
          <p>
            Depuis plusieurs générations, Unicompex accompagne le développement
            des entreprises en République Démocratique du Congo avec des
            solutions énergétiques et un service de proximité.
          </p>
          <a className="button button-primary" href="/histoire.html">
            Découvrir notre histoire <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="about-hero-image">
          <img src={aboutImage} alt="Groupe électrogène Unicompex" />
          <span>Au service de la continuité de vos activités</span>
        </div>
      </section>

      <section className="about-pages-section">
        <div className="site-container about-pages-grid">
          <a className="about-page-card" href="/histoire.html">
            <span>01</span>
            <h2>Notre histoire</h2>
            <p>Découvrez le parcours des fondateurs et les étapes clés d’Unicompex.</p>
            <strong>Découvrir <span aria-hidden="true">→</span></strong>
          </a>
          <a className="about-page-card" href="/carrieres.html">
            <span>02</span>
            <h2>Carrières</h2>
            <p>Découvrez nos métiers et les possibilités de rejoindre nos équipes.</p>
            <strong>Nous rejoindre <span aria-hidden="true">→</span></strong>
          </a>
          <a className="about-page-card" href="/engagement.html">
            <span>03</span>
            <h2>Engagement &amp; valeurs</h2>
            <p>Les principes qui guident notre travail auprès de nos clients et équipes.</p>
            <strong>Nos engagements <span aria-hidden="true">→</span></strong>
          </a>
        </div>
      </section>
    </AboutLayout>
  )
}

export function HistoryPage() {
  const [founderImageOpen, setFounderImageOpen] = useState(false)

  useEffect(() => {
    if (!founderImageOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') setFounderImageOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [founderImageOpen])

  return (
    <AboutLayout>
      <section className="about-detail-section">
        <div className="site-container">
          <SectionIntro
            eyebrow="NOTRE PARCOURS"
            title="Une histoire familiale devenue une expertise reconnue."
          >
            Notre passé est lié à celui de nos fondateurs, Sultan et son fils
            Karim Noorani. Tous deux ont vécu en République Démocratique du
            Congo depuis les années 1950. Unicompex est le fruit de leurs
            efforts et poursuit leur vision.
          </SectionIntro>

          <article className="history-feature">
            <figure className="founder-figure">
              <button
                className="founder-photo-button"
                type="button"
                onClick={() => setFounderImageOpen(true)}
                aria-label="Agrandir la photo de Sultan Noorani"
              >
                <img
                  className="founder-photo"
                  src={founderImage}
                  alt="Sultan Noorani, fondateur d’Unicompex"
                  loading="lazy"
                />
              </button>
              <figcaption>
                <span>Fondateur</span>
                <strong>Sultan Noorani</strong>
              </figcaption>
            </figure>

            <div className="history-feature-copy">
              <div className="founder-note">
                <h2>Sultan Noorani, fondateur</h2>
                <p>
                  Entrepreneur, lecteur passionné et homme profondément attaché
                  à sa communauté, Sultan a développé de nombreuses activités
                  en RDC. Sa persévérance et son sens du service ont marqué
                  l’histoire de l’entreprise familiale.
                </p>
              </div>

              <ol className="about-timeline">
                {milestones.map((milestone) => (
                  <li className="timeline-item" key={milestone.period}>
                    <span className="timeline-period">{milestone.period}</span>
                    <div>
                      <h2>{milestone.title}</h2>
                      <p>{milestone.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        </div>
      </section>
      {founderImageOpen && (
        <div
          className="founder-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo de Sultan Noorani"
          onClick={() => setFounderImageOpen(false)}
        >
          <button
            className="founder-lightbox-close"
            type="button"
            onClick={() => setFounderImageOpen(false)}
            aria-label="Fermer la photo agrandie"
          >
            ×
          </button>
          <img
            src={founderImage}
            alt="Sultan Noorani, fondateur d’Unicompex"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </AboutLayout>
  )
}

export function CareersPage() {
  return (
    <AboutLayout pageClass="careers-page">
      <section className="about-detail-section">
        <div className="site-container">
          <div className="careers-content">
            <SectionIntro
              eyebrow="NOUS REJOINDRE"
              title="Construisons la suite ensemble."
            >
              Unicompex rassemble des équipes aux compétences variées dans
              l’énergie, la maintenance, les opérations et le service client.
              Consultez nos postes à pourvoir ci-dessous.
            </SectionIntro>
            <div className="job-list">
              {jobOpenings.map((job, index) => (
                <article className="job-card" key={job.title}>
                  <div className="job-card-heading">
                    <span className="job-number">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h2>{job.title}</h2>
                      <p className="job-locations">{job.locations}</p>
                    </div>
                  </div>
                  <ul>
                    {job.requirements.map((requirement) => (
                      <li key={requirement}>{requirement}</li>
                    ))}
                  </ul>
                  {job.note && <p className="job-note">{job.note}</p>}
                  <div className="job-card-footer">
                    <span className="job-contract-label">Type de contrat</span>
                    <span className="job-contract">{job.contract}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="careers-panel">
              <h2>Comment postuler</h2>
              <p>
                Envoyez-nous une <strong>lettre de motivation</strong> précisant
                vos objectifs et les raisons pour lesquelles vous souhaitez
                rejoindre Unicompex, ainsi que votre <strong>CV complet et à
                jour</strong>. Indiquez également <strong>votre ville de
                résidence</strong>.
              </p>
              <div className="application-methods">
                <section>
                  <h3>Par e-mail</h3>
                  <p>
                    Envoyez votre dossier à{' '}
                    <a href="mailto:contact@unicompex.net">contact@unicompex.net</a>
                    {' '}et aux ressources humaines{' '}
                    <a href="mailto:abazonga@unicompex.net">abazonga@unicompex.net</a>.
                    Indiquez dans l’objet : <strong>« Carrière + Nom + Poste »</strong>.
                    Les pièces jointes doivent peser moins de 2 MB.
                  </p>
                </section>
                <section>
                  <h3>Sur LinkedIn</h3>
                  <p>
                    Vous pouvez transmettre votre profil à{' '}
                    <a href="https://cd.linkedin.com/company/unicompexcongo" target="_blank" rel="noreferrer">
                      notre équipe RH
                    </a>
                    {' '}ou contacter{' '}
                    <a href="https://cd.linkedin.com/in/emilionoorani" target="_blank" rel="noreferrer">
                      notre directeur Khalid Emilio Noorani
                    </a>
                    {' '}uniquement sur LinkedIn. Demandes sérieuses uniquement.
                  </p>
                </section>
              </div>
              <aside className="anti-discrimination">
                <h3>Politique anti-discrimination</h3>
                <p>
                  Unicompex ne pratique aucune discrimination fondée sur
                  l’origine, le sexe, l’orientation sexuelle ou toute autre forme
                  de préjugé. Tout comportement discriminatoire fera l’objet
                  d’une investigation approfondie et pourra entraîner des
                  mesures disciplinaires, pouvant aller jusqu’au licenciement.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </AboutLayout>
  )
}

export function EngagementPage() {
  const [reportStatus, setReportStatus] = useState('')

  function handleReportSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') || 'Anonyme'
    const email = formData.get('email') || 'Anonyme'
    const message = formData.get('message')
    const subject = encodeURIComponent('Signalement d’un abus ou d’une non-conformité')
    const body = encodeURIComponent(
      `Nom : ${name}\nCourriel : ${email}\n\nDétails du signalement :\n${message}`,
    )

    setReportStatus('Votre logiciel de messagerie va s’ouvrir pour transmettre le signalement.')
    window.location.href = `mailto:contact@unicompex.net?subject=${subject}&body=${body}`
  }

  return (
    <AboutLayout>
      <section className="about-detail-section about-values">
        <div className="site-container">
          <SectionIntro
            eyebrow="NOS ENGAGEMENTS & VALEURS"
            title="Agir avec compétence, intégrité et responsabilité."
          >
            Nos engagements guident la qualité de nos services, la sécurité de
            nos équipes et notre impact sur l’environnement.
          </SectionIntro>

          <div className="engagement-highlights">
            <article className="engagement-photo-card">
              <img src={engagementPhotos[0].src} alt={engagementPhotos[0].alt} loading="lazy" />
              <div>
                <span>Notre savoir-faire</span>
                <h2>La compétence au service de nos clients.</h2>
              </div>
            </article>
            <article className="engagement-photo-card">
              <img src={engagementPhotos[1].src} alt={engagementPhotos[1].alt} loading="lazy" />
              <div>
                <span>Notre responsabilité</span>
                <h2>La sécurité et le respect au quotidien.</h2>
              </div>
            </article>
          </div>

          <div className="values-grid engagement-values-grid">
            <article className="value-card">
              <span>01</span>
              <h2>Compétence</h2>
              <p>
                Nous mettons du personnel qualifié en face de vos produits.
                Certains techniciens suivent des formations auprès de nos
                fournisseurs pour assurer un meilleur suivi de votre achat.
              </p>
            </article>
            <article className="value-card">
              <span>02</span>
              <h2>Excellence</h2>
              <p>
                Nous nous efforçons de donner le meilleur de nous-mêmes et de
                fournir des résultats qui dépassent les attentes de nos clients.
              </p>
            </article>
            <article className="value-card">
              <span>03</span>
              <h2>Amélioration continue</h2>
              <p>
                Chaque jour, nous cherchons à apprendre et à améliorer nos
                services et nos produits par rapport à la veille.
              </p>
            </article>
            <article className="value-card">
              <span>04</span>
              <h2>Pièces de rechange d’origine</h2>
              <p>
                Nous nous engageons à fournir des pièces de rechange d’origine
                à tous nos clients dans les meilleurs délais.
              </p>
            </article>
          </div>

          <section className="planet-commitment">
            <div>
              <p className="eyebrow"><span /> ENVIRONNEMENT</p>
              <h2>Réduire notre impact sur la planète</h2>
              <p>
                Les énergies renouvelables (hydraulique, solaire et éolienne)
                sont des solutions pour réduire notre impact. Nos fournisseurs
                recherchent des technologies moins polluantes, tout en
                préservant la fiabilité 24 h/24, notamment grâce aux batteries.
                Des solutions hybrides solaires sont disponibles avec nos
                sociétés partenaires.
              </p>
              <p>
                Nous recherchons des propositions plus écologiques qui réduisent
                la consommation de gasoil et les émissions de gaz à effet de
                serre, ainsi que des partenaires pour le recyclage des huiles
                et consommables et le traitement des eaux usées.
              </p>
              <a href="https://www.fgwilson.com/en_GB/company/sustainability.html" target="_blank" rel="noreferrer">
                FG Wilson — Durabilité (anglais) <span aria-hidden="true">↗</span>
              </a>
              <p className="planet-note">
                Nous nous intéressons également aux biocarburants à faible
                intensité carbone.
              </p>
            </div>
            <img src={engagementPhotos[0].src} alt={engagementPhotos[0].alt} loading="lazy" />
          </section>

          <section className="ethics-section">
            <div className="ethics-copy">
              <p className="eyebrow"><span /> ÉTHIQUE</p>
              <h2>Anti-corruption</h2>
              <p>
                Nous respectons notre engagement envers des pratiques
                commerciales éthiques, notamment en interdisant les pots-de-vin
                et la corruption. Selon{' '}
                <a href="https://www.transparency.org/what-is-corruption#costs-of-corruption" target="_blank" rel="noreferrer">
                  Transparency International
                </a>
                , la corruption a des coûts :
              </p>
              <ul>
                <li><strong>Politiques :</strong> elle entrave la démocratie et l’État de droit.</li>
                <li><strong>Économiques :</strong> elle épuise la richesse nationale.</li>
                <li><strong>Sociaux :</strong> elle sape la confiance dans la société et ses institutions.</li>
                <li><strong>Environnementaux :</strong> elle facilite le non-respect des règles environnementales.</li>
              </ul>
              <p>
                En 2017, la Banque mondiale estimait que les entreprises et les
                particuliers versaient environ 1,5 milliard de dollars US en
                pots-de-vin chaque année.{' '}
                <a href="https://www.worldbank.org/en/topic/governance/brief/anti-corruption" target="_blank" rel="noreferrer">
                  En savoir plus auprès de la Banque mondiale
                </a>
                .
              </p>
            </div>
            <div className="safety-card">
              <span className="safety-mark" aria-hidden="true">ISO</span>
              <p className="eyebrow"><span /> SANTÉ &amp; SÉCURITÉ</p>
              <h2>Sécurité au travail</h2>
              <p>
                Suite aux engagements pris auprès de nos clients et employés,
                nous avons été certifiés ISO 45001:2018 — Santé et sécurité au
                travail — en 2021.
              </p>
            </div>
          </section>

          <section className="provider-standards">
            <h2>Normes santé et sécurité pour nos prestataires</h2>
            <p>
              Vous souhaitez nous vendre vos services ou produits ? Nous vous
              demandons de signer et de respecter notre déclaration de
              prestataire concernant les règles de santé et de sécurité sur les
              sites de nos clients.
            </p>
            <a
              className="button button-primary"
              href="https://unicompex.com/wp-content/uploads/2024/01/Declaration-de-prestataire-de-respect-des-regles-de-sante-et-securite-d-2.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Lire la déclaration prestataire <span aria-hidden="true">↗</span>
            </a>
          </section>

          <section className="report-section">
            <div className="report-intro">
              <p className="eyebrow"><span /> VOTRE PAROLE COMPTE</p>
              <h2>Signalez un abus ou une non-conformité</h2>
              <p>
                Vous avez rencontré un problème lié à une action ou à une
                personne ? Écrivez-nous en donnant autant de détails que
                possible : date, lieu, personnes concernées et faits observés.
                Vous pouvez rester anonyme.
              </p>
            </div>
            <form className="report-form" onSubmit={handleReportSubmit}>
              <div className="report-form-row">
                <label>
                  Nom <span>(anonyme possible)</span>
                  <input name="name" autoComplete="name" />
                </label>
                <label>
                  E-mail <span>(anonyme possible)</span>
                  <input name="email" type="email" autoComplete="email" />
                </label>
              </div>
              <label>
                Message <span>(requis — ajoutez le plus de détails possible)</span>
                <textarea name="message" rows="6" required />
              </label>
              <button className="button button-primary" type="submit">
                Signaler <span aria-hidden="true">→</span>
              </button>
              {reportStatus && <p className="report-status" role="status">{reportStatus}</p>}
              <p className="report-disclaimer">
                L’envoi ouvre votre logiciel de messagerie avec les informations
                du signalement préremplies.
              </p>
            </form>
          </section>
        </div>
      </section>
    </AboutLayout>
  )
}

export default AboutPage
