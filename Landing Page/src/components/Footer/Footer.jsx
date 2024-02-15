import './Footer.css';

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
      <footer className="footer">
        <section className="footer-section">
          <div className="card-container">
            {footerData.map((card, index) => (
            <div className="card" key={index}>
            <h3 className="card-title">{card.title}</h3>
            <ul className="card-list">
                {card.bullets.map((bullet, bulletIndex) => (
            <li className="card-item" key={bulletIndex}>
                {bullet}
            </li>
            ))}
            </ul>
            </div>
        ))}
         </div>
        </section>

        
      </footer>
    );
  }
  