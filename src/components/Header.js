import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="header">
        <a href="/" className="logo" aria-label="Elegant Drašković - Početna">
          <svg className="logo-svg" viewBox="24 0 162 58" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <text x="90" y="34" textAnchor="middle" fontFamily="'University Roman Std', serif" fontSize="34" fill="#c5b358">
              Elegant
            </text>
            <text x="100" y="50" fontFamily="'Open Sans', sans-serif" fontSize="10" fontWeight="600" fill="#6B8EB5" letterSpacing="2">
              DRAŠKOVIĆ
            </text>
          </svg>
        </a>

        <nav className="desktop-nav" aria-label="Glavna navigacija">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>Početna</NavLink>
          <NavLink to="/o-nama" className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>O nama</NavLink>
          <NavLink to="/o-objektu" className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>O Objektu</NavLink>
          <NavLink to="/stanovi" className={({ isActive }) => `nav-link nav-link--cta${isActive ? ' nav-link--cta-active' : ''}`}>Stanovi</NavLink>
        </nav>

        <div className="header-actions">
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
          <NavLink to="/" end className={({ isActive }) => `mobile-nav__link${isActive ? ' mobile-nav__link--active' : ''}`} onClick={closeMenu}>Početna</NavLink>
          <NavLink to="/o-nama" className={({ isActive }) => `mobile-nav__link${isActive ? ' mobile-nav__link--active' : ''}`} onClick={closeMenu}>O nama</NavLink>
          <NavLink to="/o-objektu" className={({ isActive }) => `mobile-nav__link${isActive ? ' mobile-nav__link--active' : ''}`} onClick={closeMenu}>O Objektu</NavLink>
          <NavLink to="/stanovi" className={({ isActive }) => `mobile-nav__link mobile-nav__link--cta${isActive ? ' mobile-nav__link--active' : ''}`} onClick={closeMenu}>Stanovi</NavLink>
        </nav>

        <div className="mobile-nav__contact">
          <a href="tel:+38169663518" className="mobile-nav__contact-item">
            <i className="fa fa-phone"></i>
            <span>+381 69 663 518</span>
          </a>
          <a href="https://maps.app.goo.gl/ws7kkaWwiMvzw5tg9" target="_blank" rel="noopener noreferrer" className="mobile-nav__contact-item">
            <i className="fa fa-map-marker"></i>
            <span>Heroja Maričića 57a, Vrnjačka Banja</span>
          </a>
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
