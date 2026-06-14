import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Galerija.css';

const images = [
  'images2/apartman7.jpg',
  'images2/apartman0.jpg',
  'images2/apartman2.jpg',
  'images2/apartman3.jpg',
  'images2/apartman4.jpg',
];

function Galerija() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dialogRef = useRef(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    dialogRef.current?.showModal();
  };

  const closeLightbox = () => dialogRef.current?.close();

  const prev = useCallback(() =>
    setCurrentIndex((i) => (i - 1 + images.length) % images.length), []);

  const next = useCallback(() =>
    setCurrentIndex((i) => (i + 1) % images.length), []);

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
    <section className='gal-section'>

      <div className='gal-header'>
        <span className='gal-label'>Vizuelni prikaz</span>
        <h2 className='gal-heading'>Galerija</h2>
        <div className='gal-rule' />
      </div>

      <div className='gal-grid'>
        {images.map((img, index) => (
          <button
            key={index}
            className='gal-item'
            onClick={() => openLightbox(index)}
            aria-label={`Otvori sliku ${index + 1}`}
          >
            <img src={img} alt={`Elegant apartman ${index + 1}`} />
            <div className='gal-overlay'>
              <span className='gal-zoom'>+</span>
            </div>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className='gal-dialog'
        onClick={(e) => e.target === dialogRef.current && closeLightbox()}
        onCancel={closeLightbox}
      >
        <div className='gal-lightbox'>
          <div className='gal-lightbox-top'>
            <span className='gal-counter'>{currentIndex + 1} / {images.length}</span>
            <button className='gal-close' onClick={closeLightbox} aria-label='Zatvori'>
              &times;
            </button>
          </div>
          <img
            src={images[currentIndex]}
            alt={`Elegant apartman ${currentIndex + 1}`}
            className='gal-full-img'
          />
          <button className='gal-arrow gal-arrow--prev' onClick={prev} aria-label='Prethodna'>
            &#10094;
          </button>
          <button className='gal-arrow gal-arrow--next' onClick={next} aria-label='Sledeća'>
            &#10095;
          </button>
        </div>
      </dialog>

    </section>
  );
}

export default Galerija;
