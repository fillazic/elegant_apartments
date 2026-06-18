import React from 'react';
import './OObjekat.css';

const amenities = [
  { icon: 'fa-life-ring',  label: 'Bazen na 8. etaži',    sub: '360° panorama · vazdušna banja' },
  { icon: 'fa-arrow-up',   label: 'Panoramski lift',       sub: null },
  { icon: 'fa-cutlery',    label: 'Kafić-restoran',        sub: '7. etaža · roštilj' },
  { icon: 'fa-heartbeat',  label: 'Teretana',              sub: null },
  { icon: 'fa-table',      label: 'Stoni tenis',           sub: null },
  { icon: 'fa-refresh',    label: 'Perionica',             sub: 'Ostava posteljine' },
  { icon: 'fa-bell',       label: 'Recepcija',             sub: 'Prizemlje' },
  { icon: 'fa-glass',      label: 'Lobi bar',              sub: 'Bašta · spoljni šank' },
];

const smartFeatures = [
  { icon: 'fa-leaf',          label: 'Energetski pasoš' },
  { icon: 'fa-lock',          label: 'Elektronske brave — kartični sistem' },
  { icon: 'fa-cog',           label: 'Elektromagnetni ventili za vodu i struju' },
  { icon: 'fa-video-camera',  label: 'Centralni video nadzor' },
  { icon: 'fa-fire',          label: 'Podno grejanje zajedničkih prostora' },
];

const extras = [
  { icon: 'fa-sun-o',  label: 'Solarna energija' },
  { icon: 'fa-tint',   label: 'Termalne vode' },
  { icon: 'fa-plug',   label: 'Priključak na zemni gas' },
  { icon: 'fa-car',    label: 'Parking (kupovina ili zakup)' },
];

const nearby = ['Sportski tereni', 'Autobuska stanica', 'Pijaca', 'Dom zdravlja', 'Banjska promenada'];

function OObjekat() {
  return (
    <section className="oo-section">
      <div className="oo-inner">

        <div className="oo-header">
          <span className="oo-eyebrow">O Objektu</span>
          <h1 className="oo-title">Elegant Drašković</h1>
          <p className="oo-tagline">Heroja Maričića 57a, Vrnjačka Banja</p>
          <div className="oo-accent-line" />
        </div>

        {/* Location */}
        <div className="oo-block">
          <span className="oo-block__label">Lokacija</span>
          <p className="oo-block__text">
            Elegant Drašković nalazi se u Vrnjačkoj Banji, biseru kontinentalnog turizma u Srbiji,
            na adresi Heroja Maričića 57a. Objekat je smešten u ravnom delu Banje, u najpovoljnijoj
            klimatskoj zoni, u neposrednoj blizini sportskih terena, autobuske stanice, pijace,
            doma zdravlja i banjske promenade.
          </p>
          <div className="oo-nearby">
            {nearby.map(place => (
              <span key={place} className="oo-nearby__tag">{place}</span>
            ))}
          </div>
          <div className="oo-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.9969772911054!2d20.889426575108825!3d43.62742185409933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475657f62cb008fb%3A0x49048b68e6055967!2sElegant%20Draskovic!5e0!3m2!1ssr!2srs!4v1730224240414!5m2!1ssr!2srs"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elegant Drašković lokacija"
            />
          </div>
        </div>

        {/* Building amenities */}
        <div className="oo-block">
          <span className="oo-block__label">Sadržaji</span>
          <p className="oo-block__text">
            Zgrada nudi bogatu ponudu pratećih sadržaja na svim etažama — od bazena sa panoramom
            od 360° do recepcije i lobi bara u prizemlju.
          </p>
          <div className="oo-amenities">
            {amenities.map(({ icon, label, sub }) => (
              <div key={label} className="oo-amenity">
                <i className={`fa ${icon} oo-amenity__icon`} aria-hidden="true" />
                <span className="oo-amenity__label">{label}</span>
                {sub && <span className="oo-amenity__sub">{sub}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Smart building */}
        <div className="oo-block">
          <span className="oo-block__label">Pametna zgrada</span>
          <p className="oo-block__text">
            Elegant Drašković je pametna zgrada sa energetskim pasošem. Svi stanovi opremljeni su
            savremenim sistemima za bezbednost, upravljanje energijom i udobnost stanara.
          </p>
          <ul className="oo-features">
            {smartFeatures.map(({ icon, label }) => (
              <li key={label} className="oo-feature">
                <i className={`fa ${icon} oo-feature__icon`} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Extras + CTA */}
        <div className="oo-block">
          <span className="oo-block__label">Mogućnosti</span>
          <ul className="oo-features">
            {extras.map(({ icon, label }) => (
              <li key={label} className="oo-feature">
                <i className={`fa ${icon} oo-feature__icon`} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <div className="oo-cta">
            <p className="oo-cta__text">
              Direktna prodaja bez provizije — moguća kupovina na kredit.
            </p>
            <a href="tel:+38169663518" className="oo-cta__btn">Pozovite nas</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default OObjekat;
