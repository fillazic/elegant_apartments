import React from 'react';
import { Link } from 'react-router-dom';
import './CoverSection.css';

function CoverSection() {
  return (
    <section className='cover-section'>
      <div
        className='cover-bg'
        style={{ backgroundImage: "url('images2/apartman7.jpg')" }}
      />
      <div className='cover-gradient' />

      <div className='cover-content'>
        <h2 className='cover-heading'>
          Kupovina &amp; iznajmljivanje
        </h2>
        <p className='cover-subheading'> sve na jednom mestu</p>
        <p className='cover-desc'>
          Direktna prodaja stanova
          <br />
          Izdavanje apartmana
        </p>
        <Link to='stanovi'>
          <button className='cover-btn'>STANOVI</button>
        </Link>
        <ul className='cover-amenities'>
          <li>Bazen na otvorenom</li>
          <li>Panoramski kafe-restoran</li>
          <li>Lobi bar</li>
          <li>Recepcija</li>
        </ul>
      </div>

      <div className='cover-infobar'>
        <a
          href='https://maps.app.goo.gl/ws7kkaWwiMvzw5tg9'
          target='_blank'
          rel='noopener noreferrer'
          className='cover-infobar-link'
        >
          <img src='images/lokacija.svg' alt='lokacija' />
          <span>Heroja Maričića 57a, Vrnjačka Banja</span>
        </a>
        <a href='tel:+38169663518' className='cover-infobar-link'>
          <img src='images/phone.svg' alt='telefon' />
          <span>+381 69 663 518</span>
        </a>
      </div>
    </section>
  );
}

export default CoverSection;
