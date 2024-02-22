import gifImage2 from "../../assets/body2.gif";
import companies from "../../assets/companies.jpeg"

import './Companies.css';

export function Companies() {
  return (
    <section className="section-companies">
      <h2 className="gif-section-title-companies">Empresas de renombre que confían en Canva</h2>
      <div className="second-gif-container-companies">
        <img src={gifImage2} alt="GIF" className="gif-image2-companies" />
      </div>
      <div className="image-companies">
        <img src={companies} alt="Empresas" />
      </div>
    </section>
  );
}

