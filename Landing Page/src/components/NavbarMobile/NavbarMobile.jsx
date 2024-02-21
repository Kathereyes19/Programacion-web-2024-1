import React, { useState } from 'react';
import menuButtons from "../../constants/menubuttons";
import './NavbarMobile.css';

export function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
  setMenuOpen(!menuOpen);
  if (!menuOpen) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
};
  const hideMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="mobile-navbar">
      <div className="left-section">
        <button className="menu-button" onClick={toggleMenu}>
          <img src="https://static.vecteezy.com/system/resources/previews/019/858/703/original/menu-flat-color-outline-icon-free-png.png" alt="Menu" className="menu-icon" />
        </button>
        <a href="/" className="logo-link">
          <img src="https://1000marcas.net/wp-content/uploads/2020/01/Canva-logo.png" alt="Logo" className="logo" />
        </a>
      </div>

      <div className="right-section">
        <button className="search-button">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25313.png" alt="Botón buscador" />
          <i className="fas fa-search"></i>
        </button>
        <button className="btn-login">Iniciar sesión</button>
      </div>

      <div className={`menu-section ${menuOpen ? 'open' : ''}`}>
        <button className="menu-close-btn" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </button>
        <div className="menu-buttons">
          {menuButtons.map((button, index) => (
            <button key={index} className="menu-options" onClick={button.onClick}>
              <span>{button.text}</span>
              <img src={button.iconSrc} className="icon" alt={`Icono de ${button.text}`} />
            </button>
          ))}
        </div>
        <div className="auth-buttons">
          <button className="btn-register">Regístrate</button>
          <button className="btn-login2">Iniciar sesión</button>
        </div>
      </div>
    </nav>
  );
};
