import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import stanovi from './NamesteniStanovi';
import izgradnja from './Stanovi';
import './Apartmani.css';

function Apartmani() {
  const [povrsina, setPovrsina] = useState('');
  const [sprat, setSprat] = useState('');
  const [detalj, setDetalj] = useState(null);

  const filteredIzgradnja = izgradnja.filter(stan => {
    const povrsinaOk = !povrsina || (
      povrsina === '30' ? stan.povrsina <= 30 :
      povrsina === '40' ? stan.povrsina >= 20 && stan.povrsina <= 40 :
      povrsina === '60' ? stan.povrsina >= 40 && stan.povrsina <= 60 : true
    );
    const spratOk = !sprat || String(stan.sprat) === sprat;
    return povrsinaOk && spratOk;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='ap-page'>

      {/* Hero */}
      <div className='ap-hero'>
        <div className='ap-hero-bg' style={{ backgroundImage: "url('images2/apartman2.jpg')" }} />
        <div className='ap-hero-overlay' />
        <div className='ap-hero-content'>
          <span className='ap-hero-label'>Elegant Drašković</span>
          <h1 className='ap-hero-heading'>
            Namešteni stanovi
            <br />
            Stanovi u izgradnji
          </h1>
        </div>
      </div>

      {/* Section 1 – Furnished apartments */}
      <section className='ap-section'>
        <div className='ap-section-header'>
          <span className='ap-label'>Na prodaju &amp; iznajmljivanje</span>
          <h2 className='ap-heading'>Namešteni apartmani</h2>
          <div className='ap-rule' />
        </div>

        <div className='ap-grid'>
          {stanovi.map((stan, index) => (
            <div className='ap-card' key={index}>
              <div className='ap-card-img-wrap'>
                <img src={stan.slike[0]} alt={stan.naslov} />
              </div>
              <div className='ap-card-body'>
                <h3 className='ap-card-title'>{stan.naslov}</h3>
                <div className='ap-card-meta'>
                  <span>{stan.povrsina} m²</span>
                  <span className='ap-meta-sep'>·</span>
                  <span>Sprat {stan.sprat}</span>
                </div>
                <Link to={`/${index}`} className='ap-btn'>Detaljnije</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className='ap-divider'>
        <span className='ap-divider-letter'>E</span>
      </div>

      {/* Section 2 – Under construction */}
      <section className='ap-section'>
        <div className='ap-section-header'>
          <span className='ap-label'>Rezervišite unapred</span>
          <h2 className='ap-heading'>Stanovi u izgradnji</h2>
          <div className='ap-rule' />
        </div>

        {/* Filters */}
        <div className='ap-filters'>
          <div className='ap-filter-wrap'>
            <select
              className='ap-select'
              value={sprat}
              onChange={e => setSprat(e.target.value)}
              aria-label='Filtriraj po spratu'
            >
              <option value=''>Svi spratovi</option>
              <option value='4'>Četvrti sprat</option>
              <option value='5'>Peti sprat</option>
              <option value='6'>Šesti sprat</option>
            </select>
            <span className='ap-select-arrow' aria-hidden='true'>&#8964;</span>
          </div>
          <div className='ap-filter-wrap'>
            <select
              className='ap-select'
              value={povrsina}
              onChange={e => setPovrsina(e.target.value)}
              aria-label='Filtriraj po kvadraturi'
            >
              <option value=''>Sve kvadrature</option>
              <option value='30'>do 30 m²</option>
              <option value='40'>20 – 40 m²</option>
              <option value='60'>40 – 60 m²</option>
            </select>
            <span className='ap-select-arrow' aria-hidden='true'>&#8964;</span>
          </div>
        </div>

        <div className='ap-grid'>
          {filteredIzgradnja.map((stan, index) => (
            <div className='ap-card' key={index}>
              <div className='ap-card-img-wrap ap-card-img-wrap--schema'>
                <img src={stan.slike} alt={`Plan stana ${index + 1}`} />
              </div>
              <div className='ap-card-body'>
                <div className='ap-card-meta'>
                  <span>{stan.povrsina} m²</span>
                  <span className='ap-meta-sep'>·</span>
                  <span>Sprat {stan.sprat}</span>
                </div>
                <button className='ap-btn' onClick={() => setDetalj(stan.slike)}>
                  Detaljnije
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floor plan modal */}
      {detalj && (
        <div className='ap-modal-overlay' onClick={() => setDetalj(null)}>
          <div className='ap-modal' onClick={e => e.stopPropagation()}>
            <button
              className='ap-modal-close'
              onClick={() => setDetalj(null)}
              aria-label='Zatvori'
            >
              &times;
            </button>
            <img src={detalj} alt='Plan stana' className='ap-modal-img' />
          </div>
        </div>
      )}

    </div>
  );
}

export default Apartmani;
