import { useEffect, useRef, useState } from 'react'
import './App.css'
import './SparePartsPage.css'
import { SiteFooter, SiteHeader, WhatsAppButton } from './SiteChrome'
import temperatureSensorPhoto from './assets/images/spare-part-temperature-sensor.png'
import liftPumpPhoto from './assets/images/spare-part-lift-pump.png'
import headGasketPhoto from './assets/images/spare-part-head-gasket.png'
import injectorPhoto from './assets/images/spare-part-injector.png'

const spareParts = [
  { name: 'Capteur de température', category: 'Électricité', details: 'Capteur pour surveiller la température du moteur.', compatibility: 'Selon le modèle du moteur', image: temperatureSensorPhoto },
  { name: 'Pompe d’alimentation', category: 'Moteur', details: 'Pompe de transfert du carburant vers le système d’injection.', compatibility: 'Moteurs Perkins', image: liftPumpPhoto },
  { name: 'Joint de culasse', category: 'Moteur', details: 'Joint d’étanchéité pour moteur diesel.', compatibility: 'Selon le modèle du moteur', image: headGasketPhoto },
  { name: 'Injecteur', category: 'Moteur', details: 'Injecteur pour le système d’injection du moteur diesel.', compatibility: 'Moteurs Perkins', image: injectorPhoto },
  { name: 'Filtres à huile', category: 'Filtration', details: 'Pour l’entretien et la protection du moteur diesel.', compatibility: 'Moteurs Perkins et groupes FG Wilson' },
  { name: 'Filtres à carburant', category: 'Filtration', details: 'Filtration du carburant pour préserver le système d’injection.', compatibility: 'Moteurs Perkins et groupes FG Wilson' },
  { name: 'Filtres à air', category: 'Filtration', details: 'Aident à protéger le moteur contre les poussières et impuretés.', compatibility: 'Selon le modèle du groupe' },
  { name: 'Courroies moteur', category: 'Moteur', details: 'Courroies de remplacement pour les équipements entraînés par le moteur.', compatibility: 'Selon le modèle du groupe' },
  { name: 'Pompes à eau', category: 'Refroidissement', details: 'Composants du circuit de refroidissement du moteur.', compatibility: 'Moteurs Perkins et groupes FG Wilson' },
  { name: 'Radiateurs', category: 'Refroidissement', details: 'Éléments de refroidissement adaptés à la configuration du groupe.', compatibility: 'Selon le modèle du groupe' },
  { name: 'Démarreurs', category: 'Électricité', details: 'Démarreurs et composants associés pour groupes électrogènes.', compatibility: 'Selon le modèle du groupe' },
  { name: 'Alternateurs de charge', category: 'Électricité', details: 'Alternateurs de charge moteur et composants associés.', compatibility: 'Selon le modèle du moteur' },
  { name: 'Batteries de démarrage', category: 'Électricité', details: 'Batteries adaptées au démarrage des groupes électrogènes.', compatibility: 'À confirmer selon le groupe' },
]

const partsPerPage = 6

function SparePartsPage() {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPart, setSelectedPart] = useState(null)
  const detailsDialogRef = useRef(null)
  const searchTerm = search.trim().toLocaleLowerCase('fr')
  const filteredParts = spareParts.filter((part) => (
    [part.name, part.category, part.details, part.compatibility]
      .join(' ')
      .toLocaleLowerCase('fr')
      .includes(searchTerm)
  ))
  const pageCount = Math.ceil(filteredParts.length / partsPerPage)
  const visibleParts = filteredParts.slice(
    (currentPage - 1) * partsPerPage,
    currentPage * partsPerPage,
  )

  useEffect(() => {
    const dialog = detailsDialogRef.current
    if (selectedPart && dialog && !dialog.open) {
      dialog.showModal()
    }
  }, [selectedPart])

  return (
    <div className="site-shell spare-parts-page">
      <SiteHeader sparePartsPage />

      <main>
        <section className="spare-parts-hero site-container">
          <div className="spare-parts-hero-copy">
            <p className="eyebrow"><span /> PIÈCES D’ORIGINE POUR VOTRE GROUPE</p>
            <h1>Pièces de<br /><span>rechange.</span></h1>
            <p>
              Retrouvez les principales familles de pièces pour l’entretien et la réparation de vos groupes
              électrogènes FG Wilson et moteurs Perkins. La référence exacte dépend du modèle et du numéro
              de série de votre équipement.
            </p>
            <a className="button button-primary" href="/devis.html">Demander un devis</a>
          </div>
          <div className="spare-parts-hero-note">
            <strong>Besoin d’une référence précise ?</strong>
            <p>Transmettez-nous le modèle et le numéro de série du groupe pour vérifier la compatibilité.</p>
            <a href="/contact.html">Contacter notre équipe <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="spare-parts-catalog" id="catalogue">
          <div className="site-container">
            <div className="spare-parts-heading">
              <p className="eyebrow"><span /> NOTRE CATALOGUE</p>
              <h2>Les pièces essentielles<br /><span>pour vos générateurs.</span></h2>
              <p>Parcourez les familles de pièces disponibles et contactez-nous pour confirmer la compatibilité et la disponibilité. Sélectionnez une pièce pour afficher sa fiche détaillée.</p>
            </div>

            <div className="spare-parts-controls">
              <label className="spare-parts-search">
                <span>Rechercher une pièce</span>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value)
                    setCurrentPage(1)
                  }}
                  placeholder="Ex. filtre, moteur, électricité..."
                />
              </label>
              <p className="spare-parts-result-count" aria-live="polite">
                {filteredParts.length} {filteredParts.length === 1 ? 'famille de pièces trouvée' : 'familles de pièces trouvées'}
              </p>
            </div>

            <div className="spare-parts-grid">
              {visibleParts.map((part) => (
                <article className="spare-part-card" key={part.name}>
                  <button
                    className="spare-part-card-details"
                    type="button"
                    onClick={() => setSelectedPart(part)}
                    aria-label={`Ouvrir la fiche de ${part.name}`}
                  >
                    {part.image ? (
                      <span className="spare-part-image">
                        <img src={part.image} alt="" loading="lazy" />
                      </span>
                    ) : (
                      <span className="spare-part-image spare-part-image-placeholder">
                        <span className="spare-part-icon" aria-hidden="true">
                          <svg viewBox="0 0 32 32" fill="none">
                            <path d="M7 10.5h18v11H7zM11 7v3.5m10-3.5v3.5M11 21.5V25m10-3.5V25M4 14h3m18 0h3m-21 4h3m18 0h3" />
                          </svg>
                        </span>
                        <span>Photo non disponible</span>
                      </span>
                    )}
                    <span className="spare-part-card-name">{part.name}</span>
                  </button>
                </article>
              ))}
            </div>

            {visibleParts.length === 0 && (
              <p className="spare-parts-empty">Aucune pièce ne correspond à votre recherche. Essayez un autre terme ou contactez-nous.</p>
            )}

            {pageCount > 1 && (
              <nav className="spare-parts-pagination" aria-label="Pagination des pièces de rechange">
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => page - 1)}
                  disabled={currentPage === 1}
                  aria-label="Afficher les pièces précédentes"
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
                  aria-label="Afficher les pièces suivantes"
                >
                  Suivant
                </button>
              </nav>
            )}
          </div>
        </section>
      </main>

      <dialog
        className="spare-part-dialog"
        ref={detailsDialogRef}
        onClose={() => setSelectedPart(null)}
        aria-labelledby="spare-part-dialog-title"
      >
        {selectedPart && (
          <>
            <button
              className="spare-part-dialog-close"
              type="button"
              onClick={() => detailsDialogRef.current.close()}
              aria-label="Fermer les détails"
            >
              ×
            </button>
            <div className="spare-part-dialog-content">
              {selectedPart.image ? (
                <img className="spare-part-dialog-image" src={selectedPart.image} alt={selectedPart.name} />
              ) : (
                <div className="spare-part-dialog-image spare-part-dialog-image-placeholder">
                  Photo non disponible
                </div>
              )}
              <div>
                <p className="eyebrow"><span /> {selectedPart.category}</p>
                <h2 id="spare-part-dialog-title">{selectedPart.name}</h2>
                <p>{selectedPart.details}</p>
                <div className="spare-part-compatibility">
                  <span>Compatibilité</span>
                  <strong>{selectedPart.compatibility}</strong>
                </div>
                <a className="button button-primary" href="/devis.html">Demander cette pièce</a>
              </div>
            </div>
          </>
        )}
      </dialog>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}

export default SparePartsPage
