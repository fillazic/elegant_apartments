import React, { useEffect } from 'react';
import './ZgradaElegant.css';

function ZgradaElegant() {

  useEffect(() => {
    const elements = document.querySelectorAll('.ze-animate');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ze-visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className='ze-section' id='elegant-zgrada'>

      <div className='ze-divider'>
        <span className='ze-divider-letter'>E</span>
      </div>

      {/* Block 1: Location */}
      <div className='ze-block ze-animate'>
        <div className='ze-text'>
          <span className='ze-label'>Lokacija</span>
          <h3 className='ze-heading'>Gde se nalazimo?</h3>
          <div className='ze-rule' />
          <p className='ze-body'>
            Objekat se nalazi na 200m od Banjskog šetališta, pa osim što je povoljno lociran
            u odnosu na sve lokacije koje je važno posetiti po dolasku u Vrnjačku Banju,
            opet je dovoljno izdvojen i ušuškan kako bi svaki gost ili kupac koji poželi
            da bude smešten baš ovde imao svoj mir.
          </p>
        </div>
        <div className='ze-image-wrap'>
          <img src='images/krov2.jpg' alt='Pogled sa krova' />
        </div>
      </div>

      {/* Block 2: About project */}
      <div className='ze-block ze-block--reverse ze-animate'>
        <div className='ze-image-wrap ze-image-wrap--left'>
          <img src='images/ulaz.jpg' alt='Ulaz u objekat' />
        </div>
        <div className='ze-text'>
          <span className='ze-label'>O projektu</span>
          <h3 className='ze-heading'>Stambeno-poslovna zgrada Elegant</h3>
          <div className='ze-rule' />
          <p className='ze-body'>
            Stambeno-poslovna zgrada Elegant-Drašković nastala je idejom tvorca ovog
            savremenog objekta da posetiocima i gostima ponudi veliki broj sadržaja,
            kako za rekreaciju tako i za odmor, gde bi i oni najmlađi i najstariji gosti
            mogli da pronađu svoj kutak i da u potpunosti iskoriste pogodnosti koje ovaj
            objekat nudi.
          </p>
        </div>
      </div>

      <div className='ze-divider'>
        <span className='ze-divider-letter'>E</span>
      </div>

      <div className='ze-map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.9969772911054!2d20.889426575108825!3d43.62742185409933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475657f62cb008fb%3A0x49048b68e6055967!2sElegant%20Draskovic!5e0!3m2!1ssr!2srs!4v1730224240414!5m2!1ssr!2srs'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Elegant Drašković lokacija'
        />
      </div>

    </section>
  );
}

export default ZgradaElegant;
