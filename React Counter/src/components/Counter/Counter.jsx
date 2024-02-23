import React, { useState, useEffect } from 'react';
import './Counter.css'; 
import { Buttons } from './../Buttons/Buttons'; 
import redcar1 from '../../assets/redcar1.png';
import redcar2 from '../../assets/redcar2.png';
import roadBack from '../../assets/roadBack.jpg';
import resetimage from '../../assets/resetimage.webp';

export function Counter() {
  const [count, setCount] = useState(0);
  const [showIncreaseImage, setShowIncreaseImage] = useState(false);
  const [showDecreaseImage, setShowDecreaseImage] = useState(false);
  const [timer, setTimer] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [showResetImage, setShowResetImage] = useState(false);

  const startTimer = () => {
    setTimer(setTimeout(() => {
      setGameOver(true);
      setShowResetImage(true);
      setTimeout(() => {
        setCount(0);
        setGameOver(false);
        setShowResetImage(false);
        startTimer();
      }, 2000); // 2000 milisegundos = 2 segundos
    }, 60000)); // 60000 milisegundos = 1 minuto
  };

  const resetGame = () => {
    setCount(0);
    setGameOver(false);
    clearTimeout(timer);
    startTimer();
  };

  useEffect (() => {
    startTimer();
    return () => clearTimeout(timer);
  }, []);

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
          {gameOver && <img src={resetimage} className="game-over-image" />}
        </div>
      </div>
    </section>
  );
}

