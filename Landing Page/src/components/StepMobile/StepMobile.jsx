import React, { useState } from 'react';
import stepscards from "../../constants/stepscards";
import './StepMobile.css'; 

export function StepMobile() {
  const [expandedCards, setExpandedCards] = useState(Array(stepscards.length).fill(false));
  const [currentImage, setCurrentImage] = useState(stepscards[0].image);

  const toggleCardExpansion = (index) => {
    setExpandedCards(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const changeImageAndExpandCard = (index, newImage) => {
    setCurrentImage(newImage);
    toggleCardExpansion(index);
  };

  return (
    <section className="section-steps-mobile">
     <h2 className="section-title-step-mobile">Cómo funciona Canva</h2>
      <img src={currentImage} alt="Imagen" className="top-image-mobile" />

      <div className="button-container-mobile">
        {stepscards.map((card, index) => (
          <div key={index}>
            <button onClick={() => changeImageAndExpandCard(index, card.image)}>
              {card.title}
              <img src="https://cdn.icon-icons.com/icons2/1415/PNG/512/ic-down_97618.png" className="button-icon-mobile" />
            </button>
            {expandedCards[index] && (
              <div className="card-steps-mobile">
                <div className="card-header-mobile" onClick={() => toggleCardExpansion(index)}>
                </div>
                <div className="card-content-mobile">
                  <p className="card-description-steps-mobile">{stepscards[index].description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
