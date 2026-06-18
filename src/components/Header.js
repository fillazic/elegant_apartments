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
        <a href="/" className="logo">
          <span className="logo-main">ELEGANT</span>
          <span className="logo-sub">Drašković</span>
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
