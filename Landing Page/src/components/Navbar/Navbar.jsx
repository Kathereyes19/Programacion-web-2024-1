import "./Navbar.css"

export function Navbar() {
  return (
    <div className="navbar">
      <div className="left-section">
        <img src="https://1000marcas.net/wp-content/uploads/2020/01/Canva-logo.png" alt="Logo" className="logo" />
        <div className="titles">
          <button className="nav-button">
            Diseño <img src="https://cdn.icon-icons.com/icons2/1415/PNG/512/ic-down_97618.png" className="icon" />
          </button>
          <button className="nav-button">
            Negocios <img src="https://cdn.icon-icons.com/icons2/1415/PNG/512/ic-down_97618.png" className="icon" />
          </button>
          <button className="nav-button">
            Educación <img src="https://cdn.icon-icons.com/icons2/1415/PNG/512/ic-down_97618.png" className="icon" />
          </button>
          <button className="nav-button">
            Planes y precios <img src="https://cdn.icon-icons.com/icons2/1415/PNG/512/ic-down_97618.png" className="icon" />
          </button>
          <button className="nav-button">
            Aprender <img src="https://cdn.icon-icons.com/icons2/1415/PNG/512/ic-down_97618.png" className="icon" />
          </button>
        </div>
      </div>
      <div className="right-section">
      <button className="btn-image">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25313.png" alt="Botón buscador" />
        </button>
        <button className="btn-image">
          <img src="https://cdn-icons-png.flaticon.com/512/32/32175.png" alt="Botón Informacion" />
        </button>

        <button className="btn btn-login">Iniciar Sesión</button>
        <button className="btn btn-register">Regístrate</button>

      </div>
    </div>
  );
}
