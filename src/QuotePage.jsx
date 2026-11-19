import { useRef, useState } from 'react'
import './App.css'
import './QuotePage.css'
import { ArrowIcon, SiteFooter, SiteHeader, WhatsAppButton } from './SiteChrome'

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
]

const installationProfiles = [
  'Une petite habitation de 2 chambres à coucher (cuisine, climatiseurs)',
  'Un petit bureau ou magasin de 3 employés avec lumières et 2 climatiseurs 6000 BTU (1750 W)',
  'Un bureau ou magasin moyen de 6 employés avec lumières et 4 climatiseurs 6000 BTU (1750 W)',
  'Une maison avec 4 chambres à coucher (pompe à eau, cuisines, climatiseurs)',
  'Un immeuble R+1 (salle de pompage, cuisines, climatiseurs)',
  'Un immeuble R+2 (salle de pompage, cuisines, climatiseurs)',
  'Un immeuble R+5 (salle de pompage, ascenseurs, cuisines, climatiseurs)',
  'Un immeuble R+10 (salle de pompage, ascenseurs, cuisines, climatiseurs)',
  'Une petite usine (100 m²) avec des moteurs, des bureaux, des entrepôts',
  'Une usine moyenne (500 m²) avec des moteurs, des bureaux, des entrepôts',
  'Une grande usine (1000 m²) avec des moteurs, des bureaux, des entrepôts',
]

const usageOptions = [
  'Résidentiel',
  'Commercial',
  'Organisme international',
  'Gouvernement',
  'Télécommunication',
  'Banque',
  'Hôtel',
  'Datacenter - Centre de données',
]

const cities = [
  'Bukavu',
  'Bunia',
  'Goma',
  'Kinshasa',
  'Kolwezi',
  'Kisangani',
  'Kikwit',
  'Lubumbashi',
  'Matadi',
]

const operatingHours = [
  'Presque jamais - Énergie de secours (1 h par jour maximum)',
  'Ça dépend de la SNEL - 25 % du temps environ',
  'Ça dépend de la SNEL - 50 % du temps environ',
  'Ça dépend de la SNEL - 75 % du temps environ',
  'En continu (24 h sur 24 ou presque)',
]

const purchaseTimeframes = [
  'Urgent (achat cette semaine)',
  'À court terme (achat ce mois)',
  'À moyen terme (achat dans 2 ou 3 mois)',
  'À long terme (achat dans 4 à 6 mois)',
  'Je suis juste curieux',
]

const yesNo = ['Oui', 'Non']

function RadioGroup({ label, name, options, value, onChange, required = true }) {
  return (
    <fieldset className="quote-fieldset">
      <legend>{label}{required && <span className="required-mark"> *</span>}</legend>
      <div className="quote-radio-options">
        {options.map((option) => (
          <label className="quote-radio" key={option}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={(event) => onChange(event.target.value)}
              required={required}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function SelectField({ label, name, options, value, onChange, required = true, allowOther = false }) {
  return (
    <label className="quote-control">
      <span>{label}{required && <span className="required-mark"> *</span>}</span>
      <select
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
      >
        <option value="">Sélectionnez une réponse</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
        {allowOther && <option value="Autre">Autre</option>}
      </select>
    </label>
  )
}

function QuotePage() {
  const formRef = useRef(null)
  const [answers, setAnswers] = useState({
    powerKnown: '',
    power: '',
    enclosure: '',
    city: '',
    usage: '',
    profile: '',
    hours: '',
    timeframe: '',
    maintenance: '',
    nonlinearLoad: '',
    loadAnalyzer: '',
    ats: '',
    atsDistance: '',
    reserve: '',
    delivery: '',
    consent: '',
  })
  const [selectedFiles, setSelectedFiles] = useState([])
  const [fileError, setFileError] = useState('')
  const [submissionStatus, setSubmissionStatus] = useState('')

  function updateAnswer(name, value) {
    setAnswers((current) => ({ ...current, [name]: value }))
    setSubmissionStatus('')
  }

  function handleFilesChange(event) {
    const files = Array.from(event.target.files ?? [])
    const invalidFile = files.find((file) => !file.type.startsWith('image/'))

    if (files.length > 5) {
      setFileError('Vous pouvez sélectionner jusqu’à 5 photos.')
      setSelectedFiles([])
      event.target.value = ''
      return
    }

    if (invalidFile) {
      setFileError('Seules les images sont acceptées.')
      setSelectedFiles([])
      event.target.value = ''
      return
    }

    if (files.some((file) => file.size > 1024 * 1024)) {
      setFileError('Chaque photo doit peser 1 Mo maximum.')
      setSelectedFiles([])
      event.target.value = ''
      return
    }

    setFileError('')
    setSelectedFiles(files.map((file) => file.name))
  }

  function handleSendRequest() {
    if (fileError) {
      setSubmissionStatus('Corrigez la sélection des photos avant de continuer.')
      return
    }

    if (!formRef.current?.reportValidity()) return

    if (!answers.consent.startsWith('Oui')) {
      setSubmissionStatus('Votre autorisation est nécessaire pour traiter la demande.')
      return
    }

    window.location.href = '/compte.html?origine=devis'
  }

  return (
    <div className="site-shell">
      <SiteHeader quotePage />

      <main className="quote-page site-container">
        <section className="quote-intro">
          <p className="eyebrow"><span /> GROUPES ÉLECTROGÈNES FG WILSON</p>
          <h1>Demande de <span>devis.</span></h1>
          <p className="quote-lead">
            Répondez aux questions suivantes pour nous aider à dimensionner un
            groupe électrogène qui correspondra exactement à vos besoins.
          </p>
          <p className="quote-support">Si vous avez des questions ou remarques, contactez-nous.</p>
          <div className="quote-company">
            <strong>Unicompex - Distributeur FG Wilson en RDC depuis 2001</strong>
            <span><a href="mailto:contact@unicompex.net">contact@unicompex.net</a></span>
            <span>
              <a href="tel:+243819935000">+243 81 99 35 000</a>
              {' · '}
              <a href="tel:+243849935000">+243 84 99 35 000</a>
            </span>
            <span>1458 Lukusa, Gombe, Kinshasa · Succursales à Lubumbashi et Kolwezi</span>
          </div>
        </section>

        <form className="quote-form" id="quote-form" ref={formRef} onSubmit={(event) => event.preventDefault()}>
          <section className="quote-section">
            <div className="quote-section-heading">
              <span>01</span>
              <div>
                <h2>Votre besoin en énergie</h2>
                <p>Ces informations nous aident à choisir la puissance et la configuration adaptées.</p>
              </div>
            </div>

            <RadioGroup
              label="Savez-vous la puissance qu’il vous faut ?"
              name="powerKnown"
              options={[
                'Oui, je suis sûr de mon choix et assume la responsabilité du calcul',
                'Non, j’ai besoin de votre aide pour confirmer la puissance',
              ]}
              value={answers.powerKnown}
              onChange={(value) => updateAnswer('powerKnown', value)}
            />

            {answers.powerKnown.startsWith('Oui') && (
              <div className="quote-conditional">
                <SelectField
                  label="Puissance continue requise (pas la puissance maximale / standby)"
                  name="power"
                  options={powerOptions}
                  value={answers.power}
                  onChange={(value) => updateAnswer('power', value)}
                  allowOther
                />
                {answers.power === 'Autre' && (
                  <label className="quote-control">
                    <span>Indiquez la puissance souhaitée <span className="required-mark">*</span></span>
                    <input name="otherPower" placeholder="Ex. 35 kVA" required />
                  </label>
                )}
              </div>
            )}

            <RadioGroup
              label="Souhaitez-vous un groupe insonorisé ou un groupe ouvert (sans capotage) ?"
              name="enclosure"
              options={['Insonorisé - closed set', 'Ouvert - open set']}
              value={answers.enclosure}
              onChange={(value) => updateAnswer('enclosure', value)}
            />

            <div className="quote-fields-grid">
              <label className="quote-control">
                <span>Combien de groupes électrogènes voulez-vous ? <span className="required-mark">*</span></span>
                <input type="number" name="quantity" min="1" step="1" required />
              </label>
              <SelectField
                label="Pour quelle ville ?"
                name="city"
                options={cities}
                value={answers.city}
                onChange={(value) => updateAnswer('city', value)}
                allowOther
              />
              {answers.city === 'Autre' && (
                <label className="quote-control">
                  <span>Indiquez la ville <span className="required-mark">*</span></span>
                  <input name="otherCity" required />
                </label>
              )}
              <label className="quote-control quote-control-wide">
                <span>Adresse complète d’installation (numéro, rue, ville, province, lien GPS) <span className="required-mark">*</span></span>
                <textarea name="installationAddress" rows="3" required />
              </label>
              <SelectField
                label="Pour quelle utilisation ?"
                name="usage"
                options={usageOptions}
                value={answers.usage}
                onChange={(value) => updateAnswer('usage', value)}
                allowOther
              />
              {answers.usage === 'Autre' && (
                <label className="quote-control">
                  <span>Précisez l’utilisation <span className="required-mark">*</span></span>
                  <input name="otherUsage" required />
                </label>
              )}
              <SelectField
                label="Quelle situation décrit le mieux votre installation ?"
                name="profile"
                options={installationProfiles}
                value={answers.profile}
                onChange={(value) => updateAnswer('profile', value)}
                allowOther
              />
              {answers.profile === 'Autre' && (
                <label className="quote-control quote-control-wide">
                  <span>Décrivez votre installation <span className="required-mark">*</span></span>
                  <textarea name="otherProfile" rows="3" required />
                </label>
              )}
              <SelectField
                label="Combien de temps par jour fonctionnera le groupe ?"
                name="hours"
                options={operatingHours}
                value={answers.hours}
                onChange={(value) => updateAnswer('hours', value)}
                allowOther
              />
              {answers.hours === 'Autre' && (
                <label className="quote-control">
                  <span>Précisez la durée <span className="required-mark">*</span></span>
                  <input name="otherHours" required />
                </label>
              )}
              <SelectField
                label="Pour quand aimeriez-vous acheter ce groupe électrogène ?"
                name="timeframe"
                options={purchaseTimeframes}
                value={answers.timeframe}
                onChange={(value) => updateAnswer('timeframe', value)}
              />
              <SelectField
                label="Souhaitez-vous un contrat de maintenance et de dépannage, ou en savoir plus ?"
                name="maintenance"
                options={['Oui', 'Peut-être', 'Non']}
                value={answers.maintenance}
                onChange={(value) => updateAnswer('maintenance', value)}
              />
            </div>

            <RadioGroup
              label="Avez-vous des charges non linéaires ou inductives (moteurs, batteries, compresseurs, etc.) ?"
              name="nonlinearLoad"
              options={['Je ne sais pas ce qu’est une charge non linéaire', 'Oui', 'Non']}
              value={answers.nonlinearLoad}
              onChange={(value) => updateAnswer('nonlinearLoad', value)}
            />
          </section>

          <section className="quote-section">
            <div className="quote-section-heading">
              <span>02</span>
              <div>
                <h2>Installation et options</h2>
                <p>Précisez les équipements et services qui pourraient vous être utiles.</p>
              </div>
            </div>

            <label className="quote-control quote-file-control">
              <span>Photos du lieu d’installation <span className="quote-optional">(facultatif)</span></span>
              <input type="file" name="sitePhotos" accept="image/*" multiple onChange={handleFilesChange} />
              <small>Jusqu’à 5 images, 1 Mo maximum par image.</small>
              {selectedFiles.length > 0 && (
                <small className="quote-file-list">Sélection : {selectedFiles.join(', ')}</small>
              )}
              {fileError && <small className="quote-error" role="alert">{fileError}</small>}
            </label>

            <RadioGroup
              label="Pouvons-nous installer un analyseur de charge sur votre site pour confirmer le dimensionnement ?"
              name="loadAnalyzer"
              options={yesNo}
              value={answers.loadAnalyzer}
              onChange={(value) => updateAnswer('loadAnalyzer', value)}
            />
            <RadioGroup
              label={(
                <>
                  Souhaitez-vous un inverseur automatique qui démarre le groupe et bascule depuis la SNEL ?{' '}
                  <a href="https://www.fgwilson.com/en_GB/products/transfer-panels.html" target="_blank" rel="noreferrer">
                    FG Wilson ATS
                  </a>
                </>
              )}
              name="ats"
              options={yesNo}
              value={answers.ats}
              onChange={(value) => updateAnswer('ats', value)}
            />
            {answers.ats === 'Oui' && (
              <SelectField
                label="Distance entre le groupe électrogène et l’arrivée SNEL / courant"
                name="atsDistance"
                options={['5 à 10 m', '10 à 20 m', '20 à 30 m', '50 m', '100 m', 'Plus de 150 m']}
                value={answers.atsDistance}
                onChange={(value) => updateAnswer('atsDistance', value)}
              />
            )}
            <RadioGroup
              label="Inclure 20 % de réserve de charge pour une éventuelle augmentation des besoins ?"
              name="reserve"
              options={yesNo}
              value={answers.reserve}
              onChange={(value) => updateAnswer('reserve', value)}
            />
            <RadioGroup
              label="Souhaitez-vous une offre de livraison et d’installation ?"
              name="delivery"
              options={[
                'Oui',
                'Non, je viendrai récupérer le groupe dans un entrepôt à Kinshasa, Kolwezi ou Lubumbashi',
              ]}
              value={answers.delivery}
              onChange={(value) => updateAnswer('delivery', value)}
            />
            <label className="quote-control">
              <span>Autres informations sur l’utilisation, questions ou commentaires <span className="required-mark">*</span></span>
              <textarea name="comments" rows="4" required />
            </label>
            <RadioGroup
              label="J’autorise Unicompex à utiliser ces informations uniquement pour répondre à ma demande et m’envoyer des informations pertinentes. Aucune information ne sera transmise à un tiers."
              name="consent"
              options={['Oui, j’autorise', 'Non, je n’autorise pas']}
              value={answers.consent}
              onChange={(value) => updateAnswer('consent', value)}
            />
          </section>

          {submissionStatus && <p className="quote-form-message" role="status">{submissionStatus}</p>}
          <button className="button button-primary quote-submit" type="button" onClick={handleSendRequest}>
            Envoyer ma demande <ArrowIcon />
          </button>
        </form>

        <div className="quote-contact-note">
          <strong>Une question avant de remplir le formulaire ?</strong>
          <span>
            Écrivez à <a href="mailto:contact@unicompex.net">contact@unicompex.net</a> ou appelez le{' '}
            <a href="tel:+243819935000">+243 81 99 35 000</a>.
          </span>
        </div>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}

export default QuotePage
