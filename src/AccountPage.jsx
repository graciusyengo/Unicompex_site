import { useState } from 'react'
import './App.css'
import './QuotePage.css'
import './AccountPage.css'
import { ArrowIcon, SiteFooter, SiteHeader, WhatsAppButton } from './SiteChrome'

function AccountPage() {
  const [mode, setMode] = useState('create')
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setStatus(
      'La création de compte et la connexion ne sont pas encore activées. Aucune information n’a été enregistrée.',
    )
  }

  return (
    <div className="site-shell">
      <SiteHeader accountPage />
      <main className="account-page site-container">
        <a className="account-back-link" href="/devis.html">
          <span aria-hidden="true">←</span> Retour au formulaire de devis
        </a>

        <section className="account-card">
          <div className="account-card-heading">
            <p className="eyebrow"><span /> VOTRE ESPACE CLIENT</p>
            <h1>{mode === 'create' ? 'Créez votre compte' : 'Ravi de vous revoir'}</h1>
            <p>
              {mode === 'create'
                ? 'Créez un compte pour continuer votre demande de devis Unicompex.'
                : 'Connectez-vous à votre compte pour continuer votre demande de devis.'}
            </p>
          </div>

          <div className="account-mode-switch" aria-label="Choisir une option">
            <button
              type="button"
              aria-pressed={mode === 'create'}
              className={mode === 'create' ? 'active' : ''}
              onClick={() => { setMode('create'); setStatus('') }}
            >
              Créer un compte
            </button>
            <button
              type="button"
              aria-pressed={mode === 'login'}
              className={mode === 'login' ? 'active' : ''}
              onClick={() => { setMode('login'); setStatus('') }}
            >
              Se connecter
            </button>
          </div>

          <form className="account-page-form" onSubmit={handleSubmit}>
            {mode === 'create' && (
              <label className="quote-control">
                <span>Nom complet <span className="required-mark">*</span></span>
                <input name="name" autoComplete="name" required />
              </label>
            )}
            <label className="quote-control">
              <span>Adresse e-mail <span className="required-mark">*</span></span>
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label className="quote-control">
              <span>Mot de passe <span className="required-mark">*</span></span>
              <input
                type="password"
                name="password"
                autoComplete={mode === 'create' ? 'new-password' : 'current-password'}
                minLength={mode === 'create' ? 8 : undefined}
                required
              />
              {mode === 'create' && <small>8 caractères minimum.</small>}
            </label>
            {mode === 'create' && (
              <label className="quote-control">
                <span>Confirmer le mot de passe <span className="required-mark">*</span></span>
                <input
                  type="password"
                  name="passwordConfirmation"
                  autoComplete="new-password"
                  minLength="8"
                  required
                />
              </label>
            )}

            {status && <p className="account-page-status" role="status">{status}</p>}

            <div className="account-demo-warning">
              Version de démonstration : aucun compte n’est créé et aucune donnée n’est enregistrée.
              N’utilisez pas un vrai mot de passe.
            </div>

            <button className="button button-primary account-page-submit" type="submit">
              {mode === 'create' ? 'Créer mon compte' : 'Se connecter'} <ArrowIcon />
            </button>
          </form>

          <p className="account-switch-prompt">
            {mode === 'create' ? 'Vous avez déjà un compte ?' : 'Vous n’avez pas encore de compte ?'}
            {' '}
            <button
              type="button"
              onClick={() => { setMode(mode === 'create' ? 'login' : 'create'); setStatus('') }}
            >
              {mode === 'create' ? 'Se connecter' : 'Créer un compte'}
            </button>
          </p>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}

export default AccountPage
