import React from 'react';
import './Footer.css';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5
      2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34
      6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34
      0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z" />
  </svg>
);

const socialLinks = [
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
  { Icon: FacebookIcon, href: '#', label: 'Facebook' },
  { Icon: TikTokIcon, href: '#', label: 'TikTok' },
];

function Footer() {
  return (
    <footer className='ftr-footer'>

      <div className='ftr-inner'>
        <div className='ftr-contact'>
          <h3 className='ftr-heading'>Kontakt</h3>
          <p className='ftr-name'>Miroslav Drašković</p>
          <a href="mailto:elegant.mts@gmail.com" className='ftr-link'>elegant.mts@gmail.com</a>
          <a href='tel:+38169663518' className='ftr-link'>+381 69 663 518</a>
        </div>

        <div className='ftr-social'>
          <h3 className='ftr-heading'>Pratite nas</h3>
          <div className='ftr-icons'>
            {socialLinks.map(({ Icon, href, label }) => (
              <a key={label} href={href} className='ftr-icon-btn' aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='ftr-copyright'>
        <p>2024 ELEGANT Drašković © All rights reserved</p>
      </div>

    </footer>
  );
}

export default Footer;
