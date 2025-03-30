import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      {/* Gornji dio */}
      <div className="footer__top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="footer__about">
          {/* logo putanja */}
          <img src="/path/to/logo.png" alt="Kompas obrazovanja logo" className="footer__logo" style={{ maxWidth: '100px' }} />
          <h3>Kompas obrazovanja</h3>
          <p>
          Kompas obrazovanja je dedicirana platforma za pomoć učenicima i studentima u informiranju i odabiru pravog smjera daljnjeg obrazovanja.
          </p>
        </div>
        <div className="footer__contact">
          <h3>Kontakt</h3>
          <p>
            <a href="mailto:kompas.obrazovanja@gmail.com">
              kompas.obrazovanja@mail.com
            </a>
          </p>
        </div>
      </div>

      {/*  linija */}
      <hr className="footer__separator" style={{ margin: '20px 0' }} />

      {/* Donji dio */}
      <div className="footer__bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ul className="footer__links" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li>
            <a href="#privatnost">Pravila privatnosti</a>
          </li>
        </ul>
        <p className="footer__copy" style={{ margin: 0 }}>© 2025 Kompas obrazovanja</p>
        <div className="footer__social">
          <a href="https://www.facebook.com/" aria-label="Facebook" style={{ marginRight: '10px' }}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;