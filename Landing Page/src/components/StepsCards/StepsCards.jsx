import StepsCards from "../../constants/StepsCards";
import './StepsCards.css';

export function StepsCards() {
return (
    <section className="section-steps">
      <h2 className="second-section-title-steps">Cómo funciona Canva</h2>
      <div className="second-card-container-steps">
        {StepsCards.map((card, index) => (
          <div className="second-card-steps" key={index}>
            <img src={card.image} alt="Imagen" className="second-card-image-steps" />
            <p className="second-card-label-steps"> <b>{card.label}</b></p>
            <h3 className="second-card-title-steps">{card.title}</h3>
            <p className="second-card-description-steps">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
 }