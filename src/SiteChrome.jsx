import wilsonLogo from './assets/logo_wilson.jpg'

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  )
}

export function SiteHeader({ contactPage = false, quotePage = false, accountPage = false, blogPage = false, aboutPage = false, referencesPage = false, warrantyPage = false, reviewPage = false, sparePartsPage = false }) {
  const internalPage = contactPage || quotePage || accountPage || blogPage || aboutPage || referencesPage || warrantyPage || reviewPage || sparePartsPage
  const productsPage = referencesPage || warrantyPage || reviewPage || sparePartsPage
  const homeLink = internalPage ? '/index.html' : '#accueil'

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand" href={homeLink} aria-label="Unicompex, accueil">
          <img className="brand-logo" src={wilsonLogo} alt="FG Wilson" />
        </a>

        <nav className="main-nav" aria-label="Navigation principale">
          <a className={`nav-link${internalPage ? '' : ' active'}`} href={homeLink}>
            Accueil
          </a>
          <details className={`nav-dropdown${productsPage ? ' active' : ''}`}>
            <summary className={`nav-link${productsPage ? ' active' : ''}`}>Produits et services</summary>
            <div className="nav-dropdown-menu">
              <a href="/references.html">Références et projets</a>
              <a href="/pieces-de-rechange.html">Pièces de rechange</a>
              <a href="/garantie.html">Garantie</a>
              <a href="/avis.html">Laisser votre avis</a>
            </div>
          </details>
          <a className={`nav-link${contactPage ? ' active' : ''}`} href={contactPage ? '#contact-form' : '/contact.html'}>
            Contact
          </a>
          <a className={`nav-link${blogPage ? ' active' : ''}`} href="/blog.html">
            Blog
          </a>
          <details className={`nav-dropdown${aboutPage ? ' active' : ''}`}>
            <summary className={`nav-link${aboutPage ? ' active' : ''}`}>À propos</summary>
            <div className="nav-dropdown-menu">
              <a href="/histoire.html">Histoire</a>
              <a href="/carrieres.html">Carrière</a>
              <a href="/engagement.html">Engagement &amp; valeurs</a>
            </div>
          </details>
          <a className={`nav-link${accountPage ? ' active' : ''}`} href="/compte.html">
            Compte
          </a>
        </nav>

        <SocialLinks className="header-socials" />

        <a className="header-cta" href="/devis.html">
          Obtenir un devis <ArrowIcon />
        </a>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="site-container footer-cta-inner">
          <div>
            <p className="eyebrow"><span /> ON PARLE DE VOTRE PROJET ?</p>
            <h2>Et si on faisait<br />avancer les choses ?</h2>
          </div>
          <a className="button button-light" href="/devis.html">
            Obtenir un devis <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="footer-bottom-wrap">
        <div className="site-container footer-bottom">
          <a className="brand brand-footer" href="/index.html" aria-label="Unicompex, retour à l’accueil">
            <img className="brand-logo" src={wilsonLogo} alt="FG Wilson" />
          </a>
          <p>Des solutions fiables. Un partenaire engagé.</p>
          <SocialLinks className="footer-socials" />
          <span className="copyright">© UNICOMPEX</span>
        </div>
      </div>
    </footer>
  )
}

function SocialLinks({ className }) {
  return (
    <nav className={`social-links ${className}`} aria-label="Réseaux sociaux">
      <a
        className="social-link"
        href="https://www.facebook.com/Unicompex/"
        target="_blank"
        rel="noreferrer"
        aria-label="Unicompex sur Facebook"
      >
        <span className="social-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M13.5 21v-8.2h2.76l.41-3.2H13.5V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14C16.5 3.05 15.55 3 14.45 3c-2.45 0-4.13 1.5-4.13 4.26V9.6H7.55v3.2h2.77V21h3.18Z"
            />
          </svg>
        </span>
        <span>Facebook</span>
      </a>
      <a
        className="social-link"
        href="https://cd.linkedin.com/company/unicompexcongo"
        target="_blank"
        rel="noreferrer"
        aria-label="Unicompex sur LinkedIn"
      >
        <span className="social-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M6.5 8.5A1.75 1.75 0 1 0 6.5 5a1.75 1.75 0 0 0 0 3.5ZM5 10h3v9H5v-9Zm5 0h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19h-3v-4.2c0-1-.02-2.28-1.4-2.28-1.4 0-1.62 1.1-1.62 2.2V19h-3v-9Z"
            />
          </svg>
        </span>
        <span>LinkedIn</span>
      </a>
    </nav>
  )
}

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/243816691072"
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter Unicompex sur WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.04 3.2A12.65 12.65 0 0 0 5.19 22.35L3.5 28.5l6.3-1.65A12.66 12.66 0 1 0 16.04 3.2Zm0 23.2c-1.9 0-3.77-.5-5.4-1.47l-.39-.23-3.74.98 1-3.64-.25-.4a10.5 10.5 0 1 1 8.78 4.76Zm5.77-7.86c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.22.33-.84 1.05-1.03 1.27-.2.22-.38.24-.7.08-.33-.16-1.37-.5-2.61-1.6-.97-.87-1.62-1.94-1.81-2.27-.19-.32-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.33.33-.55.1-.22.05-.41-.03-.57-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.87.4-.3.33-1.14 1.11-1.14 2.71s1.17 3.14 1.33 3.36c.16.21 2.3 3.51 5.58 4.92.78.34 1.39.55 1.87.7.79.25 1.5.21 2.06.13.63-.1 1.9-.78 2.17-1.54.27-.76.27-1.41.19-1.55-.08-.13-.3-.21-.62-.38Z"
        />
      </svg>
    </a>
  )
}
