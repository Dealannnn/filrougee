import React from 'react';
import './Home.css';
import Chatbot from './Chatbot';

function Home() {
  return (
    <>
      {/* HEADER / NAVBAR */}
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center text-dark" href="#">
              <img
                src="/images/cyna_it_logo.jpeg"
                alt="Logo Cyna"
                width="30"
                height="30"
                className="me-2"
              />
              <span className="fw-bold">Cyna</span>
            </a>
            <input type="text" placeholder="Produits.." />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Accueil</a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="categoriesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Catégories
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                    <li><a className="dropdown-item" href="#">Mode</a></li>
                    <li><a className="dropdown-item" href="#">Électronique</a></li>
                    <li><a className="dropdown-item" href="#">Maison</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Toutes les catégories</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="accountDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mon Compte
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="accountDropdown">
                    <li><a className="dropdown-item" href="#">Se Déconnecter</a></li>
                    <li><a className="dropdown-item" href="#">Historique</a></li>
                    <li><hr className="dropdown-divider" /></li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav ms-3">
                <li className="nav-item">
                  <a className="btn btn-outline-dark position-relative" href="#">
                    🛒 Panier
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                      <span className="visually-hidden">articles dans le panier</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* CAROUSEL */}
      <div id="myCarousel" className="carousel slide mb-5 mt-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/carousel1.webp" className="d-block w-100" height="500" alt="Slide 1" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Bienvenue sur Cyna</h1>
                <p>Vos produits préférés en quelques clics.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Explorer</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/carousel2.jpeg" className="d-block w-100" height="500" alt="Slide 2" />
            <div className="container">
              <div className="carousel-caption">
                <h1>Les meilleures offres</h1>
                <p>Profitez des promotions toute l'année.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Voir les promos</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/paysage2.jpg" className="d-block w-100" height="500" alt="Slide 3" />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Un service de qualité</h1>
                <p>Livraison rapide et support client à votre écoute.</p>
                <p><a className="btn btn-lg btn-primary" href="#">En savoir plus</a></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Précédent</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>

      {/* MARKETING */}
      <div className="container marketing">
        <div className="row">
          {['SOC managé 24/7', 'Audit de sécurité', 'Cyna CERT'].map((title, i) => (
            <div className="col-lg-4" key={i}>
              <img src={`/images/carousel${(i % 2) + 1}.webp`} className="bd-placeholder-img rounded-circle" width="140" height="140" alt={`Produit ${i + 1}`} />
              <h2 className="fw-normal">{title}</h2>
              <p>{i === 0 ? 'Parfait pour votre quotidien.' : i === 1 ? 'Technologie à petit prix.' : 'Qualité et fiabilité garanties.'}</p>
              <p><a className="btn btn-secondary" href="#">Voir détails »</a></p>
            </div>
          ))}
        </div>
      </div>

      <hr className="featurette-divider" />

      {/* FEATURETTE */}
      <div className="container">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Une expérience unique. <span className="text-muted">Rapide et efficace.</span>
            </h2>
            <p className="lead">Découvrez notre sélection de produits choisis avec soin pour répondre à tous vos besoins.</p>
          </div>
          <div className="col-md-5">
            <img src="/images/paysage.jpg" className="img-fluid mx-auto" alt="Présentation produit" />
          </div>
        </div>
      </div>

      <hr className="featurette-divider" />

      {/* FOOTER */}
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-muted">&copy; 2025 Cyna</small>
          </div>
          <div className="col-6 col-md">
            <h5>Navigation</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Accueil</a></li>
              <li><a className="text-muted" href="#">Contact</a></li>
              <li><a className="text-muted" href="#">Conditions</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <Chatbot />
    </>
  );
}

export default Home;
