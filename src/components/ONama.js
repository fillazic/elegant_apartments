import React from 'react';
import './ONama.css';

const stats = [
  { value: '35+', label: 'Godina iskustva' },
  { value: '1990.', label: 'Godina osnivanja' },
  { value: '2', label: 'Grada' },
];

function ONama() {
  return (
    <section className="onama-section">
      <div className="onama-inner">

        <div className="onama-header">
          <span className="onama-eyebrow">O nama</span>
          <h1 className="onama-title">Elegant Drašković</h1>
          <p className="onama-tagline">Vaš pouzdan partner</p>
          <div className="onama-accent-line" />
        </div>

        <div className="onama-stats">
          {stats.map(({ value, label }) => (
            <div key={label} className="onama-stat">
              <span className="onama-stat__value">{value}</span>
              <span className="onama-stat__label">{label}</span>
            </div>
          ))}
        </div>

        <div className="onama-body">
          <p className="onama-paragraph">
            Više od 20 godina bavimo se nekretninama — prodajom, izdavanjem i svim što ide uz to.
            Elegant Drašković je od samog osnivanja, 1990. godine, prisutan u Beogradu i Vrnjačkoj
            Banji, uvek direktno i bez posrednika.
          </p>
          <p className="onama-paragraph">
            U našem portfoliju nalaze se stanovi, lokali, poslovni objekti i turistički apartmani.
            Bavimo se i prodajom i izdavanjem — kratkoročnim i dugoročnim — prilagođavajući se
            potrebama svakog klijenta. Sve dogovore sklapamo direktno, bez posrednika i bez
            skrivenih troškova.
          </p>
          <p className="onama-paragraph">
            Iza svakog posla stoje konkretni ljudi i konkretna odgovornost. Vraćaju nam se klijenti
            koji cene lični pristup, poštenu reč i iskustvo koje se gradi godinama.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ONama;
