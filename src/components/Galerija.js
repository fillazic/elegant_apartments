import React, { useState } from 'react';
import ImageFull from './ImageFull';
import './Galerija.css';

const images = [
  'images2/apartman7.jpg',
  'images2/apartman0.jpg',
  'images2/apartman2.jpg',
  'images2/apartman3.jpg',
  'images2/apartman4.jpg',
];

function Galerija() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <h3 className='galerija-slika'>Galerija</h3>
      <div className='galerija'>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt='draskovic'
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>
      <ImageFull
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        imgs={images}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </div>
  );
}

export default Galerija;
