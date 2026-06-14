import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import stanovi from './NamesteniStanovi';
import './DetaljiStana.css';

function DetaljiStana() {
  const { id } = useParams();
  const stan = stanovi[id];
  const [currentIndex, setCurrentIndex] = useState(0);
  const dialogRef = useRef(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    dialogRef.current?.showModal();
  };

  const closeLightbox = () => dialogRef.current?.close();

  const prev = useCallback(() =>
    setCurrentIndex(i => (i - 1 + stan.slike.length) % stan.slike.length),
    [stan.slike.length]);

  const next = useCallback(() =>
    setCurrentIndex(i => (i + 1) % stan.slike.length),
    [stan.slike.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (!dialogRef.current?.open) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  return (
    <div className='ds-page'>

      {/* Heading */}
      <section className='ds-header'>
        <Link to='/stanovi' className='ds-back'>&#8592; Svi apartmani</Link>
        <span className='ds-label'>Elegant Drašković</span>
        <h1 className='ds-title'>{stan.naslov}</h1>
        <div className='ds-rule' />
        <div className='ds-meta'>
          <span>{stan.povrsina} m²</span>
          <span className='ds-meta-sep'>·</span>
          <span>Sprat {stan.sprat}</span>
        </div>
      </section>

      {/* Description */}
      <section className='ds-description'>
        <p>{stan.opis}</p>
        {stan.opis2 && <p>{stan.opis2}</p>}
      </section>

      {/* Gallery */}
      <section className='ds-gallery-section'>
        <div className='ds-gallery-header'>
          <span className='ds-label'>Fotografije</span>
          <h2 className='ds-gallery-heading'>Galerija apartmana</h2>
          <div className='ds-rule' />
        </div>

        <div className='ds-grid'>
          {stan.slike.map((img, index) => (
            <button
              key={index}
              className='ds-thumb'
              onClick={() => openLightbox(index)}
              aria-label={`Otvori fotografiju ${index + 1}`}
            >
              <img src={img} alt={`${stan.naslov} ${index + 1}`} />
              <div className='ds-thumb-overlay'>
                <span className='ds-thumb-zoom'>+</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        className='ds-dialog'
        onClick={(e) => e.target === dialogRef.current && closeLightbox()}
        onCancel={closeLightbox}
      >
        <div className='ds-lightbox'>
          <div className='ds-lightbox-top'>
            <span className='ds-counter'>{currentIndex + 1} / {stan.slike.length}</span>
            <button className='ds-close' onClick={closeLightbox} aria-label='Zatvori'>
              &times;
            </button>
          </div>
          <img
            src={stan.slike[currentIndex]}
            alt={`${stan.naslov} ${currentIndex + 1}`}
            className='ds-full-img'
          />
          <button className='ds-arrow ds-arrow--prev' onClick={prev} aria-label='Prethodna'>&#10094;</button>
          <button className='ds-arrow ds-arrow--next' onClick={next} aria-label='Sledeća'>&#10095;</button>
        </div>
      </dialog>

    </div>
  );
}

export default DetaljiStana;
