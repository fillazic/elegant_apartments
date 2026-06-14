import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          <span className="logo-main">ELEGANT</span>
          <span className="logo-sub">Drašković</span>
        </a>

        <nav className="desktop-nav" aria-label="Glavna navigacija">
          <Link to="#" className="nav-link">O nama</Link>
          <Link to="#" className="nav-link">Lokacija</Link>
          <Link to="/stanovi" className="nav-link nav-link--cta">Stanovi</Link>
        </nav>

        <div className="header-actions">
          <a href="mailto:elegant.mts@gmail.com" className="header-icon" aria-label="Pošalji email">
            <i className="fa fa-envelope"></i>
          </a>
          <a href="tel:+38169663518" className="header-icon header-icon--phone" aria-label="Pozovi">
            <i className="fa fa-phone"></i>
          </a>
          <button
            className={`hamburger${isMenuOpen ? ' hamburger--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Otvori meni"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-nav${isMenuOpen ? ' mobile-nav--open' : ''}`} aria-hidden={!isMenuOpen}>
        <nav className="mobile-nav__links">
          <Link to="#" className="mobile-nav__link" onClick={closeMenu}>O nama</Link>
          <Link to="#" className="mobile-nav__link" onClick={closeMenu}>Lokacija</Link>
          <Link to="/stanovi" className="mobile-nav__link mobile-nav__link--cta" onClick={closeMenu}>Stanovi</Link>
        </nav>

        <div className="mobile-nav__contact">
          <a href="mailto:elegant.mts@gmail.com" className="mobile-nav__contact-item">
            <i className="fa fa-envelope"></i>
            <span>elegant.mts@gmail.com</span>
          </a>
          <a href="tel:+38169663518" className="mobile-nav__contact-item">
            <i className="fa fa-phone"></i>
            <span>+381 69 663 518</span>
          </a>
          <div className="mobile-nav__contact-item">
            <i className="fa fa-map-marker"></i>
            <span>Heroja Maričića 57a, Vrnjačka Banja</span>
          </div>
        </div>
      </div>

      <div
        className={`overlay${isMenuOpen ? ' overlay--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
}

export default Header;
