import templatesImage from "../../assets/templates.png";
import templatesMobile from "../../assets/templatesMobile.jpeg";
import './Templates.css';

export function Templates() {
return (
<section className="templates-image-section">
  <h2>Plantillas para diseñar de todo</h2>
  <p>Personaliza una plantilla de negocios o diseña algo más personal, como una invitación.</p>
  <div className="templates-image-container">
    <img src={templatesImage} className="templates-image" />
  </div>
    <img src={templatesMobile} className="templates-image-mobile" />
</section>
);
}