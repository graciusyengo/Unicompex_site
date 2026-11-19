import { useState } from 'react'
import './App.css'
import './ReferencesPage.css'
import { SiteFooter, SiteHeader, WhatsAppButton } from './SiteChrome'
import biomedicalPhoto from './assets/images/reference-biomedical-2020.png'
import kolweziPhoto from './assets/images/reference-kolwezi-2021.png'
import factoryPhoto from './assets/images/reference-factory-2020.png'
import futureTowerPhoto from './assets/images/reference-future-tower-2015.png'
import telecomLubumbashiPhoto from './assets/images/reference-telecom-lubumbashi-2013.png'
import kapuloPhoto from './assets/images/reference-kapulo-2012.png'
import telecomKinshasaPhoto from './assets/images/reference-telecom-kinshasa-2011.png'

const featuredProjects = [
  {
    image: biomedicalPhoto,
    alt: 'Groupe électrogène installé dans un centre de recherche biomédical à Kinshasa',
    year: '2020',
    location: 'Kinshasa',
    sector: 'Recherche biomédicale',
    title: 'Alimentation d’un centre de recherche biomédical',
    description: 'Installation d’un groupe électrogène FG Wilson P400.',
  },
  {
    image: kolweziPhoto,
    alt: 'Installation de groupes électrogènes FG Wilson à Kolwezi',
    year: '2021',
    location: 'Kolwezi',
    sector: 'Mines',
    title: 'Puissance et synchronisation pour un site minier',
    description: 'Vente, installation, mise en service et synchronisation de 3 groupes P850 FG Wilson.',
  },
  {
    image: factoryPhoto,
    alt: 'Groupe électrogène FG Wilson dans une usine de bouteilles d’eau à Kinshasa',
    year: '2020',
    location: 'Kinshasa',
    sector: 'Industrie alimentaire',
    title: 'Énergie pour une usine de fabrication',
    description: 'Installation d’un groupe FG Wilson P1500 pour une usine de fabrication de bouteilles d’eau.',
  },
  {
    image: futureTowerPhoto,
    alt: 'Installation électrique de groupes électrogènes pour l’immeuble Future Tower',
    year: '2015',
    location: 'Kinshasa',
    sector: 'Immobilier',
    title: 'Une alimentation sécurisée pour Future Tower',
    description: 'Installation et mise en marche d’un P1000 avec conteneur et de 2 groupes P550.',
  },
  {
    image: telecomLubumbashiPhoto,
    alt: 'Installation de deux groupes électrogènes pour une société de télécommunication à Lubumbashi',
    year: '2013',
    location: 'Lubumbashi',
    sector: 'Télécommunications',
    title: 'Continuité énergétique des télécommunications',
    description: 'Travaux d’installation de deux groupes FG Wilson P450.',
  },
  {
    image: kapuloPhoto,
    alt: 'Installation de groupes électrogènes pour un client minier à Kapulo',
    year: '2012',
    location: 'Kapulo',
    sector: 'Mines',
    title: 'Synchronisation de 8 groupes à Kapulo',
    description: 'Installation, synchronisation et mise en marche de 8 groupes P1250P3 pour un client minier.',
  },
  {
    image: telecomKinshasaPhoto,
    alt: 'Groupe électrogène FG Wilson installé sur un site de télécommunications à Kinshasa',
    year: '2011',
    location: 'Kinshasa',
    sector: 'Télécommunications',
    title: 'Installation d’un groupe FG Wilson P800E1',
    description: 'Travaux d’installation d’un groupe électrogène pour une société de télécommunication.',
  },
]

const projects = [
  { year: '2021', location: 'RDC, Kolwezi', sector: 'Minier', client: 'FG Wilson', power: '3 × P850', description: 'Vente, installation, mise en service et synchronisation avec contrôleurs Datakom D700.' },
  { year: '2021', location: 'RDC, Kinshasa', sector: 'Centre commercial', client: 'FG Wilson', power: '1 × P220-3, 1 × P400-3, 1 × P550-3', description: 'Synchronisation avec contrôleurs DeepSea et PowerWizard.' },
  { year: '2021', location: 'RDC, Matadi', sector: 'Télécommunications', client: 'FG Wilson', power: 'P250', description: 'Vente, installation et mise en service.' },
  { year: '2021', location: 'RC, Pointe-Noire', sector: 'Moulin', client: 'AKSA', power: '1 × 2500 kVA, 1 × 500 kVA', description: 'Montage, installation et mise en service.' },
  { year: '2021', location: 'RDC, Kolwezi', sector: 'Logistique', client: 'FG Wilson', power: '2 × P110', description: 'Vente, installation, mise en service et synchronisation avec contrôleurs Datakom D700.' },
  { year: '2021', location: 'RDC, Kolwezi', sector: 'Commerce', client: 'FG Wilson', power: '1 × P150, 1 × P250', description: 'Vente, installation, mise en service et synchronisation avec contrôleurs Datakom D700.' },
  { year: '2020', location: 'RDC, Kinshasa', sector: 'Alimentaire', client: 'FG Wilson', power: '1 × P1500 conteneur', description: 'Vente, installation et mise en service.' },
  { year: '2018', location: 'RDC, Kinshasa', sector: 'Événementiel', client: 'FG Wilson', power: 'P250', description: 'Vente, installation, mise en service et synchronisation avec contrôleurs Datakom D700.' },
  { year: '2017', location: 'RC, Brazzaville', sector: 'Hôtel', client: 'FG Wilson', power: '2 × P1650 conteneur', description: 'Installation et mise en service.' },
  { year: '2017', location: 'RDC, Kinshasa', sector: 'Immeuble résidentiel', client: 'FG Wilson', power: '1 × P150-3, 1 × P250-3', description: 'Vente, installation, mise en service et synchronisation avec contrôleurs Datakom D700.' },
  { year: '2017', location: 'RDC, Kinshasa', sector: 'Immeuble résidentiel', client: 'FG Wilson', power: '2 × P400-3', description: 'Vente, installation, mise en service et synchronisation avec contrôleurs Datakom D700.' },
  { year: '2017', location: 'RDC, Lubumbashi', sector: 'Télécommunications', client: 'FG Wilson', power: '2 × P400', description: 'Vente, installation et mise en service.' },
  { year: '2017', location: 'RDC, Kinshasa', sector: 'Banquier', client: 'FG Wilson', power: '2 × P660', description: 'Vente, installation, mise en service et synchronisation avec contrôleurs Datakom D700.' },
  { year: '2015', location: 'RDC, Kinshasa', sector: 'Immobilier de bureaux', client: 'FG Wilson', power: '1 × P1000, 2 × P500', description: 'Fourniture des deux P500, installation, synchronisation avec contrôleur DeepSea et mise en service.' },
  { year: '2013', location: 'RDC, Kinshasa', sector: 'Télécommunications', client: 'FG Wilson', power: '2 × P450', description: 'Vente, installation et mise en service.' },
  { year: '2012', location: 'RDC, Kapulo', sector: 'Minier', client: 'FG Wilson', power: '8 × P1250', description: 'Installation, synchronisation avec contrôleurs Woodward EasyGen et mise en service.' },
  { year: '2011', location: 'RDC, Kinshasa', sector: 'Télécommunications', client: 'FG Wilson', power: '2 × P250', description: 'Vente, installation et mise en service.' },
  { year: '2011', location: 'RDC, Kinshasa', sector: 'Télécommunications', client: 'FG Wilson', power: '1 × P800', description: 'Vente, installation et mise en service.' },
  { year: '2009', location: 'RDC, Kinshasa', sector: 'Télécommunications', client: 'FG Wilson', power: '2 × P350', description: 'Vente, installation et mise en service.' },
]

const projectsPerPage = 6

function ReferencesPage() {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const searchTerm = search.trim().toLocaleLowerCase('fr')
  const filteredProjects = featuredProjects.filter((project) => (
    [project.year, project.location, project.sector, project.title, project.description]
      .join(' ')
      .toLocaleLowerCase('fr')
      .includes(searchTerm)
  ))
  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage)
  const visibleProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage,
  )

  return (
    <div className="site-shell references-page">
      <SiteHeader referencesPage />

      <main>
        <section className="references-hero site-container">
          <div className="references-hero-copy">
            <p className="eyebrow"><span /> NOTRE SAVOIR-FAIRE SUR LE TERRAIN</p>
            <h1>Références<br />et <span>projets.</span></h1>
            <p>
              Depuis 2015, Unicompex a vendu et installé plus de <strong>200 groupes électrogènes FG Wilson</strong>,
              de 9 à 850 kVA, auprès de plus de <strong>175 clients</strong> issus de secteurs variés :
              résidentiel, minier, télécommunications, hôtelier, immobilier et fabrication.
            </p>
            <p>
              Découvrez quelques projets réalisés en République Démocratique du Congo et en République du Congo,
              ainsi que des références menées depuis 2009.
            </p>
          </div>
          <div className="references-hero-stat" aria-label="Plus de 200 groupes installés auprès de plus de 175 clients">
            <div><strong>200+</strong><span>groupes électrogènes vendus et installés</span></div>
            <div><strong>175+</strong><span>clients accompagnés</span></div>
            <div><strong>Depuis 2009</strong><span>des projets en RDC et en République du Congo</span></div>
          </div>
        </section>

        <section className="references-featured" id="projets">
          <div className="site-container">
            <div className="references-section-heading">
              <p className="eyebrow"><span /> QUELQUES RÉALISATIONS</p>
              <h2>Des projets concrets,<br /><span>dans tous les secteurs.</span></h2>
            </div>
            <div className="references-project-controls">
              <label className="references-search">
                <span>Rechercher un projet</span>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value)
                    setCurrentPage(1)
                  }}
                  placeholder="Ville, secteur, année..."
                />
              </label>
              <p className="references-result-count" aria-live="polite">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'projet trouvé' : 'projets trouvés'}
              </p>
            </div>
            <div className="references-project-grid">
              {visibleProjects.map((project) => (
                <article className="reference-project-card" key={`${project.year}-${project.title}`}>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <div className="reference-project-content">
                    <div className="reference-project-meta">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <p className="reference-sector">{project.sector}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
            {visibleProjects.length === 0 && (
              <p className="references-empty">Aucun projet ne correspond à votre recherche.</p>
            )}
            {pageCount > 1 && (
              <nav className="references-pagination" aria-label="Pagination des projets">
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => page - 1)}
                  disabled={currentPage === 1}
                  aria-label="Afficher les projets précédents"
                >
                  Précédent
                </button>
                {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                  <button
                    className={page === currentPage ? 'active' : ''}
                    type="button"
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    aria-label={`Page ${page}`}
                    aria-current={page === currentPage ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => page + 1)}
                  disabled={currentPage === pageCount}
                  aria-label="Afficher les projets suivants"
                >
                  Suivant
                </button>
              </nav>
            )}
          </div>
        </section>

        <section className="references-list site-container" id="liste-projets">
          <div className="references-section-heading">
            <p className="eyebrow"><span /> NOS RÉFÉRENCES</p>
            <h2>Une expérience construite<br /><span>projet après projet.</span></h2>
            <p>Un aperçu des installations, équipements et mises en service réalisés au fil des années.</p>
          </div>
          <div className="references-table-wrap">
            <table className="references-table">
              <thead>
                <tr>
                  <th scope="col">Année</th>
                  <th scope="col">Lieu</th>
                  <th scope="col">Secteur</th>
                  <th scope="col">Marque</th>
                  <th scope="col">Puissance</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={`${project.year}-${project.location}-${project.sector}-${index}`}>
                    <td data-label="Année">{project.year}</td>
                    <td data-label="Lieu">{project.location}</td>
                    <td data-label="Secteur">{project.sector}</td>
                    <td data-label="Marque">{project.client}</td>
                    <td data-label="Puissance">{project.power}</td>
                    <td data-label="Description">{project.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}

export default ReferencesPage
