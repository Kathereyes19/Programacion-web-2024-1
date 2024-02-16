import gifImage from "../../assets/body1.gif";
import './Introduction.css'

export function Introduction() {
    return (
      <div className="body">
        <section className="intro-section">
          <div className="intro-content">
            <h2>¿Qué diseñaremos hoy?</h2>
            <p>Con Canva, es muy fácil crear, compartir e imprimir diseños profesionales.</p>
            <button className="intro-body-button">Registrarme gratis</button>
          </div>
          <div className="intro-gif-container">
            <img src={gifImage} alt="GIF 1" />
          </div>
        </section>
        </div>
      );
    }
      