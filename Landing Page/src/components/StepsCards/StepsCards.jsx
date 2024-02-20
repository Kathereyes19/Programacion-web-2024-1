import stepscards from "../../constants/stepscards";
import './StepsCards.css';

export function StepsCards() {
return (
    <section className="section-steps">
      <h2 className="section-title-steps">Cómo funciona Canva</h2>
      <div className="card-container-steps">
        {stepscards.map((card, index) => (
          <div className="card-steps" key={index}>
            <img src={card.image} alt="Imagen" className="card-image-steps" />
            <p className="card-label-steps"> <b>{card.label}</b></p>
            <h3 className="card-title-steps">{card.title}</h3>
            <p className="card-description-steps">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
 }