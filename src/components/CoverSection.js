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
        <span className='cover-accent-line' />
        <h2 className='cover-heading'>
          Kupovina &amp; iznajmljivanje
        </h2>
        <p className='cover-subheading'>— sve na jednom mestu</p>
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
        <div className='cover-location'>
          <img src='images/lokacija.svg' alt='lokacija' />
          <span>Heroja Maričića 57a, Vrnjačka Banja</span>
        </div>
        <div className='cover-contact'>
          <span className='cover-contact-name'>Miroslav Drašković</span>
          <span className='cover-sep'>·</span>
          <img src='images/mail-icon.svg' alt='mail' />
          <span>elegant.mts@gmail.com</span>
          <span className='cover-sep'>·</span>
          <img src='images/phone.svg' alt='telefon' />
          <span>+381 69 663 518</span>
        </div>
      </div>
    </section>
  );
}

export default CoverSection;
