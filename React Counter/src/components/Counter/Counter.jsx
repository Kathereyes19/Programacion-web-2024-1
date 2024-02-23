import React, { useState } from 'react';
import './Counter.css'; 
import { Buttons } from './../Buttons/Buttons'; 
import redcar1 from '../../assets/redcar1.png';
import redcar2 from '../../assets/redcar2.png';
import roadBack from '../../assets/roadBack.jpg';

export function Counter() {
  const [count, setCount] = useState(0);
  const [showIncreaseImage, setShowIncreaseImage] = useState(false);
  const [showDecreaseImage, setShowDecreaseImage] = useState(false);

  const increaseCount = () => {
    setCount(count + 1);
    setShowIncreaseImage(true);
    setTimeout(() => setShowIncreaseImage(false), 2000); 
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setShowDecreaseImage(true);
      setTimeout(() => setShowDecreaseImage(false), 2000); 
    }
  };

  return (
    <section className='CounterBody'>
      <div className="counter-container">
        <img src={roadBack} className='background-image' alt="Road" />
        <div className='counter-container-buttons'>
          <h1>{count}</h1>
          <Buttons onClick={decreaseCount} text="Back to start" type="Back" />
          <Buttons onClick={increaseCount} text="Go running" type="Go" />
          {showIncreaseImage && <img src={redcar1} className="moving-image-increase" />}
          {showDecreaseImage && <img src={redcar2} className="moving-image-decrease" />}
        </div>
      </div>
    </section>
  );
}

