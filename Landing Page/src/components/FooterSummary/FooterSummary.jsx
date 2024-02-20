import footerdata from "../../constants/footerdata";
import './FooterSummary.css';

export function FooterSummary() {
    return (
      <section className="footer-container">
         <hr className="footer-line" />
        <section className="footer-section">
          <div className="footer-card-container">
            {footerdata.map((card, index) => (
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
        </section>
    )
    }
