import './Footer.css';
import socialmedia from "../../assets/socialmedia.png";

const footerData = [
    { title: "Descubrir", 
    bullets: ["Logos", "Pósters", "Tarjetas de presentación", "Flyers", "Curriculum vitae", "infografías"] 
  },
    { title: "Explorar", 
    bullets: ["Tipos de diseños", "Plantillas", "Gráficas", "Edición de fotos", "Imprimir"] 
  },
  { title: "Aprende", 
  bullets: ["Blog"] 
  },
  { title: "Recursos", 
  bullets: ["Editor de fotos"] 
  },
  { title: "Producto", 
  bullets: ["Descarga la app", "Pro", "Canva para Equipos", "Educación", "Precios"] 
  },
  { title: "Empresa", 
  bullets: ["Conócenos", "Desarroladores", "Términos y Política de privacidad"] 
  },
  ];

  export function Footer() {
    return (
      <footer className="footer-container">
         <hr className="footer-line" />
        <section className="footer-section">
          <div className="footer-card-container">
            {footerData.map((card, index) => (
              <div className="footer-card" key={index}>
                <h3 className="footer-card-title">{card.title}</h3>
                <ul className="footer-card-list">
                  {card.bullets.map((bullet, bulletIndex) => (
                    <li className="footer-card-item" key={bulletIndex}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr className="footer-line" />

        <section className="terms-section">
  <div className="terms-placeholder-container">
    <div className="terms-placeholder-border">
      <div className="terms-left-icon">

        <img src="https://images.vexels.com/media/users/3/159333/isolated/preview/a8cc3c58b4d92daa7b7d342fbb3446e1-trazo-de-icono-de-planeta-globo.png" alt="Icono izquierdo" className="terms-left-icon-terms" />
      </div>
      <span className="terms-language-label">Español - Latinoamérica</span> {/* Texto para el selector de idioma */}
      <div className="terms-right-icon">

        <img src="https://cdn.icon-icons.com/icons2/1415/PNG/512/ic-down_97618.png" className="terms-right-icon-terms" />
      </div>
    </div>
  </div>

  <div className="terms-title" title="Descripción del título"> {/* Título de la sección */}
    <p className="terms-title">© 2024 Todos los derechos reservados: Canva®</p>
    <p className="terms-description">Política de privacidad | Condiciones</p>
  </div>
  <div className="terms-image">
    {/* Imagen de assets */}
    <img src= {socialmedia}className="terms-image" />
  </div>
</section>

<section className="bottom-navbar">
  <div className="bottom-navbar-left">
    <p className="bottom-navbar-text">Descubre todo el poder de la IA en un solo lugar.</p>
  </div>
  <div className="bottom-navbar-right">
    <button className="buttonRegister">Empezar a diseñar</button>
    <button className="buttonLogin">Iniciar sesión</button>
  </div>
</section>



</footer>

    );
  }
  