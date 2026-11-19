import { useRef, useState } from 'react'
import './App.css'
import './ReviewPage.css'
import { ArrowIcon, SiteFooter, SiteHeader, WhatsAppButton } from './SiteChrome'
import serviceReviewImage from './assets/images/after-sales-review.png'

const whatsappNumber = '0816691072'
const ratingQuestions = [
  ['punctuality', 'Ponctualité : le technicien est-il arrivé dans les délais prévus ?'],
  ['professionalism', 'Professionnalisme : le technicien était-il poli, respectueux et serviable ?'],
  ['expertise', 'Compétences et expertise techniques : le problème a-t-il été diagnostiqué et résolu efficacement ?'],
  ['communication', 'Communication : le problème et la solution ont-ils été clairement expliqués ?'],
  ['cleanliness', 'Propreté : l’espace de travail a-t-il été laissé propre et bien rangé ?'],
  ['value', 'Rapport qualité-prix : le service est-il satisfaisant par rapport au coût ?'],
]
const powerOptions = [
  '10 kVA',
  '15 kVA',
  '20 kVA',
  '30 kVA',
  '45 kVA',
  '60 kVA',
  '70 kVA',
  '100 kVA',
  '150 kVA',
  '200 kVA',
  '250 kVA',
  '300 kVA',
  '400 kVA',
  '500 kVA',
  '600 kVA',
  '800 kVA',
  '1000 kVA (ouvert - sans capotage)',
  '1500 kVA (ouvert - sans capotage)',
  '2000 kVA (ouvert - sans capotage)',
  'Autre / Je ne sais pas',
]
const interventionOptions = [
  'Dépannage / réparation',
  'Entretien préventif',
  'Installation',
  'Mise en service',
  'Diagnostic',
  'Autre',
]
const teamOptions = ['Brazzaville', 'Goma', 'Kinshasa', 'Kolwezi', 'Lubumbashi']

function ReviewPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formError, setFormError] = useState('')
  const [whatsappLink, setWhatsappLink] = useState('')
  const formDialogRef = useRef(null)

  function openForm() {
    setFormError('')
    setWhatsappLink('')
    setIsFormOpen(true)
    formDialogRef.current?.showModal()
  }

  function closeForm() {
    formDialogRef.current?.close()
  }

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const photos = formData.getAll('photos')
    const includedPhotos = photos.filter((photo) => photo instanceof File && photo.size > 0)
    if (includedPhotos.length > 5) {
      setFormError('Vous pouvez sélectionner jusqu’à 5 photos.')
      return
    }
    if (includedPhotos.some((photo) => photo.size > 10 * 1024 * 1024)) {
      setFormError('Chaque photo doit peser 10 Mo maximum.')
      return
    }

    const lines = [
      'AVIS CLIENT — UNICOMPEX',
      '',
      `Nom : ${formData.get('name') || 'Non renseigné'}`,
      `E-mail : ${formData.get('email')}`,
      `Téléphone WhatsApp : ${formData.get('phone') || 'Non renseigné'}`,
      `Société : ${formData.get('company') || 'Non renseignée'}`,
      `Ville : ${formData.get('city') || 'Non renseignée'}`,
      `Marque : ${formData.get('brand') || 'Non renseignée'}`,
      `Puissance : ${formData.get('power') || 'Non renseignée'}`,
      `Type d’intervention : ${formData.get('intervention') || 'Non renseigné'}`,
      `Équipe SAV : ${formData.get('team')}`,
      `Autre équipe : ${formData.get('otherTeam') || 'Non renseignée'}`,
      '',
      ...ratingQuestions.map(([name, label]) => `${label} ${formData.get(name) || 'Non noté'}/5`),
      `Pourquoi ce rapport qualité-prix ? ${formData.get('valueReason') || 'Non renseigné'}`,
      `Satisfaction globale : ${formData.get('overall')}/5`,
      `Pourquoi ? ${formData.get('overallReason')}`,
      `Autres commentaires : ${formData.get('comments') || 'Aucun'}`,
      '',
      `Photos à joindre dans la conversation WhatsApp : ${includedPhotos.length}`,
    ]
    const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`
    setWhatsappLink(link)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="site-shell review-page">
      <SiteHeader reviewPage />

      <main>
        <section className="review-hero site-container">
          <div className="review-hero-copy">
            <p className="eyebrow"><span /> VOTRE EXPÉRIENCE COMPTE</p>
            <h1>Évaluez <span>Unicompex</span></h1>
            <p className="review-description">
              Cher client et/ou partenaire, dans le but de nous améliorer, veuillez nous dire comment
              vous avez trouvé notre intervention ou l’entretien de votre machine. Votre avis nous
              aidera à nous améliorer. Merci pour votre temps.
            </p>
            <button className="button button-primary review-form-button" type="button" onClick={openForm}>
              Donner mon avis <ArrowIcon />
            </button>
            <p className="review-team-signature">
              Équipe SAV Unicompex<br />
              0819935000 - 0849935000<br />
              <a href="https://unicompex.com">https://unicompex.com</a>
            </p>
          </div>
          <figure className="review-hero-image">
            <img src={serviceReviewImage} alt="Service après-vente Unicompex" />
          </figure>
        </section>

        <section className="review-recommendations">
          <div className="site-container">
            <div className="review-recommendations-heading">
              <p className="eyebrow"><span /> POUR ALLER PLUS LOIN</p>
              <h2>Cela pourrait aussi<br /><span>vous intéresser.</span></h2>
            </div>
            <div className="review-recommendations-grid">
              <article className="review-recommendation-card">
                <span className="review-recommendation-number">01</span>
                <h3>Pièces de rechange</h3>
                <p>Trouvez les pièces adaptées à votre groupe électrogène FG Wilson ou à votre moteur Perkins.</p>
                <a href="/pieces-de-rechange.html">Découvrir le catalogue <ArrowIcon /></a>
              </article>
              <article className="review-recommendation-card">
                <span className="review-recommendation-number">02</span>
                <h3>Besoin d’un entretien ?</h3>
                <p>Notre équipe après-vente vous accompagne pour l’entretien et le dépannage de votre équipement.</p>
                <a href="/contact.html">Contacter notre équipe <ArrowIcon /></a>
              </article>
              <article className="review-recommendation-card">
                <span className="review-recommendation-number">03</span>
                <h3>Un projet à chiffrer ?</h3>
                <p>Parlez-nous de votre besoin et demandez un devis personnalisé pour votre installation.</p>
                <a href="/devis.html">Demander un devis <ArrowIcon /></a>
              </article>
            </div>
          </div>
        </section>
      </main>

      <dialog
        className="review-dialog"
        ref={formDialogRef}
        onClose={() => setIsFormOpen(false)}
        aria-labelledby="review-form-title"
      >
        {isFormOpen && (
          <div className="review-dialog-content">
            <button
              className="review-dialog-close"
              type="button"
              onClick={closeForm}
              aria-label="Fermer le formulaire"
            >
              ×
            </button>
            <p className="eyebrow"><span /> VOTRE RETOUR COMPTE</p>
            <h2 id="review-form-title">Évaluez Unicompex</h2>
            <p className="review-dialog-intro">
              Cher client et/ou partenaire, votre avis sur notre intervention ou l’entretien de votre
              machine nous aidera à nous améliorer. Merci pour votre temps.
            </p>
            <form className="review-form" onSubmit={handleSubmit}>
              <div className="review-form-grid">
                <label className="review-field">
                  Adresse e-mail <span className="required-mark">*</span>
                  <input type="email" name="email" autoComplete="email" required />
                </label>
                <label className="review-field">
                  Votre prénom et nom de famille
                  <input type="text" name="name" autoComplete="name" />
                </label>
                <label className="review-field">
                  Téléphone WhatsApp
                  <input type="tel" name="phone" autoComplete="tel" />
                </label>
                <label className="review-field">
                  Société
                  <input type="text" name="company" autoComplete="organization" />
                </label>
                <label className="review-field">
                  Ville
                  <input type="text" name="city" autoComplete="address-level2" />
                </label>
                <label className="review-field">
                  Marque
                  <input type="text" name="brand" />
                </label>
                <label className="review-field">
                  Puissance
                  <select name="power" defaultValue="">
                    <option value="" disabled>Choisir une puissance</option>
                    {powerOptions.map((power) => <option key={power}>{power}</option>)}
                  </select>
                </label>
                <label className="review-field">
                  Type d’intervention
                  <select name="intervention" defaultValue="">
                    <option value="" disabled>Choisir un type d’intervention</option>
                    {interventionOptions.map((intervention) => <option key={intervention}>{intervention}</option>)}
                  </select>
                </label>
                <label className="review-field">
                  Équipe SAV <span className="required-mark">*</span>
                  <select name="team" defaultValue="" required>
                    <option value="" disabled>Choisir une ville</option>
                    {teamOptions.map((team) => <option key={team}>{team}</option>)}
                    <option>Autre</option>
                  </select>
                </label>
                <label className="review-field">
                  Autre équipe Unicompex (si applicable)
                  <input type="text" name="otherTeam" />
                </label>
              </div>

              <div className="review-rating-list">
                {ratingQuestions.map(([name, label]) => (
                  <fieldset className="review-rating" key={name}>
                    <legend>{label}</legend>
                    <div className="review-rating-options">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <label key={rating}>
                          <input type="radio" name={name} value={rating} />
                          <span>{rating}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                ))}
              </div>

              <label className="review-field">
                Rapport qualité-prix : pourquoi ?
                <textarea name="valueReason" rows="3" />
              </label>

              <label className="review-field review-upload">
                Photos après intervention (jusqu’à 5 images, 10 Mo maximum par fichier)
                <input type="file" name="photos" accept="image/*" multiple />
                <span>Les photos devront être ajoutées manuellement à la conversation WhatsApp.</span>
              </label>

              <fieldset className="review-rating review-rating-required">
                <legend>Satisfaction globale : à quel point êtes-vous satisfait du service fourni ? <span className="required-mark">*</span></legend>
                <div className="review-rating-options">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <label key={rating}>
                      <input type="radio" name="overall" value={rating} required />
                      <span>{rating}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="review-field">
                Pourquoi ? <span className="required-mark">*</span>
                <textarea name="overallReason" rows="3" required />
              </label>

              <label className="review-field">
                Avez-vous d’autres commentaires ou observations ?
                <textarea name="comments" rows="3" />
              </label>

              {formError && <p className="review-form-error" role="alert">{formError}</p>}
              <button className="button button-primary" type="submit">Continuer sur WhatsApp <ArrowIcon /></button>
              {whatsappLink && (
                <p className="review-form-status" role="status">
                  Si WhatsApp ne s’est pas ouvert, <a href={whatsappLink} target="_blank" rel="noreferrer">cliquez ici pour envoyer votre avis</a>.
                </p>
              )}
            </form>
            <p className="review-dialog-signature">Équipe SAV Unicompex · 0819935000 - 0849935000</p>
          </div>
        )}
      </dialog>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}

export default ReviewPage
