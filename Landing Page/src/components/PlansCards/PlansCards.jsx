import planscards from "../../constants/planscards";
import './PlansCards.css';

export function PlansCards() {
  return (
    <section className="section-plans">
      <div className="title-plans">
        <h2>Una herramienta ideal para todo el mundo</h2>
        <div className="card-container-plans">
          {planscards.map((card, index) => (
            <div className="card-plans" key={index}>
              <div className="card-content-plans">
                {card.icon && <img src={card.icon} className="card-icon-plans"/>} 
                <div className="card-details">
                  <div className="card-title-container">
                    <h3 className="card-title-plans">{card.title}</h3>
                  </div>
                  <div className="card-text-container">
                    <p className="card-text-plans">{card.text}</p>
                  </div>
                  <button className="card-button-plans">{card.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
          <div className="additionalCondition">
            <p><u>Los centros educativos</u> y <u>las organizaciones sin fines de lucro</u> pueden usar las funciones prémium de Canva gratis</p>
          </div>
        </div>
      </div>
    </section>
  );
}
