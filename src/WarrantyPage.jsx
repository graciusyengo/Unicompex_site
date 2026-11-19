import './App.css'
import './WarrantyPage.css'
import { ArrowIcon, SiteFooter, SiteHeader, WhatsAppButton } from './SiteChrome'
import warrantyPhoto from './assets/images/fg-wilson-warranty.png'

const userResponsibilities = [
  'Installer, utiliser et entretenir le groupe électrogène conformément aux instructions du fabricant.',
  'Renvoyer le formulaire d’enregistrement de la garantie au revendeur dans un délai d’un mois à compter de la livraison.',
  'S’assurer que le démarrage initial est effectué par un représentant autorisé de l’entreprise ou de ses concessionnaires. Dans des circonstances exceptionnelles, cette mise en service peut être annulée si une inspection avant livraison a été effectuée. La garantie sera alors réputée commencer un mois après l’expédition et se terminer 13 mois après cette date.',
  'Rendre l’équipement disponible pour réparation dès l’apparition du défaut et accepter le jugement de la Société quant à la nature du défaut de matériau ou de fabrication.',
  'Prendre en charge la main-d’œuvre, sauf indication contraire dans les responsabilités de la Société. La Société n’est pas responsable des frais de main-d’œuvre associés au retrait ou à la réinstallation de l’équipement sur site.',
  'Prendre en charge les frais et risques de transport ou d’expédition ainsi que les frais liés au remplacement des pièces de rechange.',
  'Prendre en charge tout coût supérieur au prix d’achat du produit et les frais divers (courrier, déplacement, kilométrage, hébergement, taxes, appels téléphoniques, heures supplémentaires, etc.), sauf indication contraire dans les responsabilités de la Société.',
  'Effectuer tout paiement impayé relatif à l’achat de l’équipement, des pièces ou des services associés à l’équipement sous garantie.',
]

const companyResponsibilities = [
  'Remplacer ou, à la discrétion de la Société, réparer les pièces défectueuses.',
  'Prendre en charge des frais de main-d’œuvre raisonnables et habituels pour corriger le défaut, y compris la déconnexion et la reconnexion du produit aux équipements, supports et systèmes associés, sauf s’ils sont fournis par un tiers.',
  'Prendre en charge le coût des fournitures de service, telles que l’huile de refroidissement et les filtres, rendues inutilisables par le défaut.',
  'Fournir la main-d’œuvre de déplacement, jusqu’à quatre heures et 250 miles aller-retour, si le moteur est inopérant en raison d’un défaut et ne peut raisonnablement pas être transporté vers un lieu de service approprié, selon l’avis de la Société.',
]

const exclusions = [
  'Les défauts dus à une installation, un entretien ou une utilisation inappropriés de la part de l’utilisateur, selon l’évaluation de la Société.',
  'Les modifications ou réparations non autorisées par écrit par la Société.',
  'Toute utilisation au-delà des limites définies par la Société ou en dehors des conditions indiquées sur le site.',
  'L’usure normale.',
  'Les dommages aux pièces, montages, boîtiers, accessoires et équipements qui ne font pas partie du produit de production d’énergie électrique.',
  'Les limites d’heures spécifiques au produit.',
]

function WarrantyPage() {
  return (
    <div className="site-shell warranty-page">
      <SiteHeader warrantyPage />

      <main>
        <section className="warranty-hero site-container">
          <div className="warranty-hero-copy">
            <p className="eyebrow"><span /> INFORMATIONS SUR VOTRE ÉQUIPEMENT</p>
            <h1>Garantie, termes<br />et <span>conditions.</span></h1>
            <p>
              Retrouvez les conditions de garantie FG Wilson applicables aux produits
              de production d’énergie électrique.
            </p>
            <a className="button button-primary warranty-download" href={warrantyPhoto} download="garantie-fg-wilson.png">
              Télécharger la photo <ArrowIcon />
            </a>
          </div>
          <figure className="warranty-photo">
            <img src={warrantyPhoto} alt="Groupe électrogène FG Wilson installé dans un environnement industriel" />
            <figcaption>La fiabilité FG Wilson au service de vos installations.</figcaption>
          </figure>
        </section>

        <article className="warranty-content site-container">
          <header className="warranty-document-heading">
            <p className="eyebrow"><span /> DOCUMENT DE GARANTIE</p>
            <h2>Déclaration de garantie FG Wilson</h2>
            <a href="https://www.fgwilson.com/" target="_blank" rel="noreferrer">www.FGWilson.com</a>
          </header>

          <section className="warranty-section">
            <h3>Champ de la garantie</h3>
            <p>
              Caterpillar (NI) Ltd (ci-après dénommée « la Société ») garantit que les nouveaux
              produits de production d’énergie électrique vendus par elle sont exempts de défauts
              de matériaux et de fabrication.
            </p>
            <p>
              Cette garantie remplace expressément toutes les autres garanties, expresses ou
              implicites, y compris, sans s’y limiter, toute garantie de qualité marchande ou
              d’adéquation à un usage particulier. Toutes les garanties dépassant les obligations
              énoncées dans le présent document sont rejetées par la Société et exclues de cette
              garantie.
            </p>
            <p>
              La Société ne pourra en aucun cas être tenue pour responsable de dommages spéciaux,
              directs, indirects, accidentels ou consécutifs. Toute réclamation au titre de cette
              garantie doit être adressée à votre revendeur local ou à la Société, qui en précisera
              les modalités d’administration et la portée.
            </p>
          </section>

          <section className="warranty-section">
            <h3>Période de garantie</h3>
            <p>La garantie est soumise aux conditions suivantes :</p>
            <ul>
              <li><strong>Modèle F, application principale :</strong> 12 mois à compter de la date de démarrage, dans la limite de 2 000 heures.</li>
              <li><strong>Modèle F, application en veille :</strong> 24 mois à compter de la date de démarrage, dans la limite de 500 heures par an.</li>
              <li><strong>Modèle P, application principale :</strong> 12 mois à compter de la date de démarrage, heures illimitées (8 760 heures).</li>
              <li><strong>Modèle P, application en veille :</strong> 24 mois à compter de la date de démarrage, dans la limite de 500 heures par an.</li>
              <li><strong>Modèle P série 4000, application principale :</strong> 12 mois à compter de la date de démarrage, heures illimitées (8 760 heures), ou 24 mois à compter de la date de démarrage, dans la limite de 6 000 heures.</li>
              <li><strong>Modèle P série 4000, application de secours :</strong> 36 mois à compter de la date de démarrage, dans la limite de 500 heures par an.</li>
            </ul>
          </section>

          <section className="warranty-section">
            <h3>Responsabilités de l’utilisateur</h3>
            <p>L’utilisateur est responsable de :</p>
            <ul>
              {userResponsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
            </ul>
          </section>

          <section className="warranty-section">
            <h3>Responsabilités de la Société</h3>
            <p>
              Si un défaut de matériau ou de fabrication survient pendant la période de garantie,
              la Société intervient pendant les heures normales de travail, par l’intermédiaire
              d’un établissement d’un concessionnaire FG Wilson ou d’une autre source approuvée par la Société, afin de :
            </p>
            <ul>
              {companyResponsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
            </ul>
          </section>

          <section className="warranty-section">
            <h3>Limites</h3>
            <p>Cette garantie ne couvre pas :</p>
            <ul>
              {exclusions.map((exclusion) => <li key={exclusion}>{exclusion}</li>)}
            </ul>
          </section>

          <p className="warranty-effective-date">En vigueur pour les produits fabriqués à partir du 1er juillet 2014.</p>
          <p className="warranty-disclaimer">
            Cette page présente les conditions fournies à titre informatif. Pour toute réclamation
            ou clarification, contactez votre revendeur FG Wilson local.
          </p>
        </article>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}

export default WarrantyPage
