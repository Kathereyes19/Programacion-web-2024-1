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
  const [timeRemaining, setTimeRemaining] = useState(60);

  const startTimer = () => {
    setTimer(setTimeout(() => {
      setGameOver(true);
      setShowResetImage(true);
      setTimeout(() => {
        setCount(0);
        setGameOver(false);
        setShowResetImage(false);
        setTimeRemaining(60); 
        startTimer();
      }, 2000); 
    }, 60000)); 
  };

  useEffect (() => {
    startTimer();
    return () => clearTimeout(timer);
  }, []);

  const increaseCount = () => {
    if (!gameOver) {
      setCount(count + 1);
      setShowIncreaseImage(true);
      setTimeout(() => setShowIncreaseImage(false), 2000); 
    }
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setShowDecreaseImage(true);
      setTimeout(() => setShowDecreaseImage(false), 2000); 
    }
  };

  // Actualizar el tiempo restante cada segundo
  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => {
        setTimeRemaining(prevTime => {
          if (prevTime === 0) {
            clearInterval(interval);
            setGameOver(true);
            setShowResetImage(true);
            setTimeout(() => {
              setCount(0);
              setGameOver(false);
              setShowResetImage(false);
              setTimeRemaining(60); // Reiniciar el tiempo restante
              startTimer();
            }, 2000);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000); // 1000 milisegundos = 1 segundo

      // Limpiar el intervalo cuando el componente se desmonta o el juego termina
      return () => clearInterval(interval);
    }
  }, [gameOver]);


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

