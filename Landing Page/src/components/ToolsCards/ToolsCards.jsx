import toolscards from "../../constants/toolscards"
import './ToolsCards.css';

export function ToolsCards() {
  return (
    <section className="section-tools">
      <div className="tools-cards-container">
        {toolscards.map((card, index) => (
          <div className="tools-card" key={index}>
            <img src={card.image} alt={card.title} className="tools-card-image" />
            <div className="tools-card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button>{card.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
