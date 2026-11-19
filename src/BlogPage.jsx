import './App.css'
import './BlogPage.css'
import { ArrowIcon, SiteFooter, SiteHeader, WhatsAppButton } from './SiteChrome'
import blog1 from './assets/images/blog1.png'
import blog2 from './assets/images/blog2.jpg'
import blog3 from './assets/images/blog3.png'
import blog4 from './assets/images/blog4.jpeg'

const featuredPost = {
  category: 'Conseils énergétiques',
  title: 'Pourquoi la maintenance préventive réduit les arrêts de production',
  excerpt:
    'Une stratégie de maintenance adaptée permet d’anticiper les pannes, d’optimiser les performances et de sécuriser les installations critiques.',
  image: blog1,
  alt: 'Groupe électrogène en installation industrielle',
  date: '12 juin 2025',
}

const posts = [
  {
    category: 'Performance',
    title: 'Optimiser la consommation d’énergie sur un site industriel',
    excerpt: 'Des leviers simples permettent d’améliorer la fiabilité et de mieux maîtriser les coûts énergétiques.',
    image: blog2,
    alt: 'Installation électrique et tableau de contrôle',
    date: '03 juin 2025',
  },
  {
    category: 'Sécurité',
    title: 'Les bonnes pratiques pour sécuriser les installations de secours',
    excerpt: 'La disponibilité des groupes électrogènes doit se conjuguer avec un suivi rigoureux et une maintenance régulière.',
    image: blog3,
    alt: 'Technicien devant un groupe électrogène',
    date: '27 mai 2025',
  },
  {
    category: 'Expertise',
    title: 'Comment choisir le bon groupe électrogène pour votre activité',
    excerpt: 'Le bon dimensionnement repose sur les usages, la puissance, le niveau de criticité et les contraintes environnementales.',
    image: blog4,
    alt: 'Équipements de production et maintenance énergétique',
    date: '18 mai 2025',
  },
]

function BlogPage() {
  return (
    <div className="site-shell blog-page" id="blog">
      <SiteHeader blogPage />

      <main className="site-container blog-main">
        <section className="blog-hero">
          <div className="blog-hero-copy">
            <p className="eyebrow"><span /> Actualités &amp; conseils</p>
            <h1>
              Le blog <span>UNICOMPEX</span>
            </h1>
            <p>
              Des contenus pratiques pour mieux comprendre les enjeux énergétiques,
              améliorer la fiabilité de vos installations et sécuriser vos activités.
            </p>
          </div>

          <div className="blog-hero-panel">
            <div className="mini-stat">
              <strong>+20 ans</strong>
              <span>d’expérience</span>
            </div>
            <div className="mini-stat">
              <strong>24/7</strong>
              <span>service et support</span>
            </div>
          </div>
        </section>

        <section className="featured-post">
          <article className="featured-card">
            <div className="featured-image-wrap">
              <img src={featuredPost.image} alt={featuredPost.alt} />
            </div>
            <div className="featured-copy">
              <span className="post-tag">{featuredPost.category}</span>
              <p className="post-date">{featuredPost.date}</p>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <a href="#articles" className="button button-primary">
                Lire l’article <ArrowIcon />
              </a>
            </div>
          </article>
        </section>

        <section className="news-section" id="articles" aria-labelledby="articles-title">
          <div className="section-heading blog-heading">
            <div>
              <p className="eyebrow"><span /> Nos dernières publications</p>
              <h2 id="articles-title">Des idées utiles pour des installations plus fiables.</h2>
            </div>
          </div>

          <div className="posts-grid">
            {posts.map((post) => (
              <article className="post-card" key={post.title}>
                <img src={post.image} alt={post.alt} loading="lazy" />
                <div className="post-card-body">
                  <div className="post-meta">
                    <span className="post-tag">{post.category}</span>
                    <time>{post.date}</time>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href="#" aria-label={`Lire l’article : ${post.title}`}>
                    Lire la suite <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}

export default BlogPage
