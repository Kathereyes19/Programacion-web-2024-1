import navButtons from "../../constants/navbuttons";
import './NavbarDesktop.css';

export function NavbarDesktop() {
  return (
    <div className="navbar">
      <div className="left-section">
        <img src="https://1000marcas.net/wp-content/uploads/2020/01/Canva-logo.png" alt="Logo" className="logo" />
        <div className="titles">
          {navButtons.map((button, index) => (
            <button key={index} className="nav-button">
              {button.text} <img src={button.iconSrc} className="icon" alt={`Icono de ${button.text}`} />
            </button>
          ))}
        </div>
      </div>
      <div className="right-section">
        <button className="btn-image">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25313.png" alt="Botón buscador" />
        </button>
        <button className="btn-image">
          <img src="https://cdn-icons-png.flaticon.com/512/32/32175.png" alt="Botón Información" />
        </button>
        <button className="btn btn-login">Iniciar Sesión</button>
        <button className="btn btn-register">Regístrate</button>
      </div>
    </div>
  );
}
