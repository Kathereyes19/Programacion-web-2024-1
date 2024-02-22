import React, { useState } from 'react';
import './Counter.css';
import redcar1 from '../assets/redcar1.png';
import redcar2 from '../assets/redcar2.png';
import roadBack from '../assets/roadBack.jpg';

export function Counter() {
  const [count, setCount] = useState(0);
  const [showIncreaseImage, setShowIncreaseImage] = useState(false);
  const [showDecreaseImage, setShowDecreaseImage] = useState(false);

  const increaseCount = () => {
    setCount(count + 1);
    setShowIncreaseImage(true);
    setTimeout(() => setShowIncreaseImage(false), 2000); // Duración fija de 2 segundos
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setShowDecreaseImage(true);
      setTimeout(() => setShowDecreaseImage(false), 2000); // Duración fija de 2 segundos
    }
  };

  return (
    <div className="counter-container">
      <img src={roadBack} className='background-image' alt="Carretera" />
      <h1>{count}</h1>
      <button onClick={decreaseCount}>Reducir</button>
      <button onClick={increaseCount}>Aumentar</button>
      {showIncreaseImage && <img src={redcar1} className="moving-image-increase" alt="Carro aumentando" />}
      {showDecreaseImage && <img src={redcar2} className="moving-image-decrease" alt="Carro disminuyendo" />}
    </div>
  );
}
