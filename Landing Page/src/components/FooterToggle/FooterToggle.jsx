import { useState } from 'react'; // Importamos useState para manejar el estado del componente
import footerdata from "../../constants/footerdata";
import './FooterToggle.css';

export function FooterToggle() {
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const toggleList = (index) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <section className="footer-container-toggle">
      <div className="footer-section-toggle">
        <div className="footer-card-container-toggle">
          {footerdata.map((card, index) => (
            <div className="footer-card-toggle" key={index}>
              <button
                className="footer-card-title-toggle"
                onClick={() => toggleList(index)} 
              >
                {card.title}
                <img src="https://cdn.icon-icons.com/icons2/1415/PNG/512/ic-down_97618.png" className="icon-image" /> 
              </button>

              {activeCardIndex === index && (
                <ul className="footer-card-list-toggle">
                  {card.bullets.map((bullet, bulletIndex) => (
                    <li className="footer-card-item-toggle" key={bulletIndex}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr className="footer-line-toggle" />
    </section>
  );
}
