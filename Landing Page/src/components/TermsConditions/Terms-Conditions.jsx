import './Terms-Conditions.css';
import socialmedia from "../../assets/socialmedia.png";

  export function TermsConditions (){
    return (

<section className="terms-section">
  <div className="terms-placeholder-container">
    <div className="terms-placeholder-border">
      <div className="terms-left-icon">

        <img src="https://images.vexels.com/media/users/3/159333/isolated/preview/a8cc3c58b4d92daa7b7d342fbb3446e1-trazo-de-icono-de-planeta-globo.png" alt="Icono izquierdo" className="terms-left-icon-terms" />
      </div>
      <span className="terms-language-label">Español - Latinoamérica</span> 
      <div className="terms-right-icon">

        <img src="https://cdn.icon-icons.com/icons2/1415/PNG/512/ic-down_97618.png" className="terms-right-icon-terms" />
      </div>
    </div>
  </div>

  <div className="terms-card"> 
    <p className="terms-title">© 2024 Todos los derechos reservados: Canva®</p>
    <p className="terms-description">Política de privacidad | Condiciones</p>
  </div>
  <div className="terms-image">
    <img src= {socialmedia}className="terms-image" />
  </div>
</section>
    )
  };