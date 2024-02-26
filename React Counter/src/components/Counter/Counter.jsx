import React from 'react';
import './Counter.css'; 
import { Buttons } from './../Buttons/Buttons'; 
import { useGameLogic } from '../../constants/GameLogic';
import redcar1 from '../../assets/redcar1.png';
import redcar2 from '../../assets/redcar2.png';
import roadBack from '../../assets/roadBack.jpg';
import resetimage from '../../assets/resetimage.webp';

export function Counter() {
  const { count, showIncreaseImage, showDecreaseImage, gameOver, showResetImage, timeRemaining, decreaseCount, increaseCount } = useGameLogic();

  return (
    <section className='CounterBody'>
      <div className="counter-container">
        <img src={roadBack} className='background-image' alt="Road" />
        <div className='counter-container-buttons'>
          <h1 className='Countertext'>{count}</h1>
          <Buttons onClick={decreaseCount} text="Back to start" type="Back" />
          <Buttons onClick={increaseCount} text="Go running" type="Go" />
          <h1 className='Timertext'>Remaining time: {timeRemaining} seconds</h1>
          {showIncreaseImage && <img src={redcar1} className="moving-image-increase" />}
          {showDecreaseImage && <img src={redcar2} className="moving-image-decrease" />}
          {showResetImage && <img src={resetimage} className="game-over-image" />}
        </div>
      </div>
    </section>
  );
}
