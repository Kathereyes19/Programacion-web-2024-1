import React, { useState, useEffect, useRef } from 'react';
import './Counter.css'; 
import { Buttons } from './../Buttons/Buttons'; 
import redcar1 from '../../assets/redcar1.png';
import redcar2 from '../../assets/redcar2.png';
import roadBack from '../../assets/roadBack.jpg';
import resetimage from '../../assets/resetimage.webp';
import Swal from 'sweetalert2';

export function Counter() {
  const [count, setCount] = useState(0);
  const [showIncreaseImage, setShowIncreaseImage] = useState(false);
  const [showDecreaseImage, setShowDecreaseImage] = useState(false);
  const [timer, setTimer] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [showResetImage, setShowResetImage] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [targetLaps, setTargetLaps] = useState(0);

  const targetLapsRef = useRef(targetLaps); // Variable ref para almacenar el valor actual de targetLaps

  // Función para mostrar la alerta inicial
  const showAlert = (laps) => {
    Swal.fire(`Welcome to the game. You must complete ${laps} laps before time runs out.`);
  };

  // Función para generar un número aleatorio de vueltas al inicio del juego
  useEffect(() => {
    const randomLaps = Math.floor(Math.random() * 10) + 10; // Generar un número aleatorio entre 1 y 10
    setTargetLaps(randomLaps);
    showAlert(randomLaps); // Mostrar la alerta inicial
    targetLapsRef.current = randomLaps; // Actualizar el valor de la variable ref
  }, []);

  // Función para iniciar el temporizador
  useEffect(() => {
    if (!gameOver) {
      const timer = setInterval(() => {
        setTimeRemaining(prevTime => {
          if (prevTime === 0) {
            setGameOver(true);
            clearInterval(timer);
            setShowResetImage(true); // Mostrar la imagen de reset
            setTimeout(() => {
              setShowResetImage(false); // Ocultar la imagen de reset
              setTimeout(() => {
                setCount(0);
                setGameOver(false);
                setTimeRemaining(60); // Reiniciar el tiempo restante
                const newRandomLaps = Math.floor(Math.random() * 10) + 1; // Generar un nuevo número aleatorio de vueltas
                setTargetLaps(newRandomLaps); // Actualizar el estado de targetLaps
                showAlert(newRandomLaps); // Mostrar la alerta nuevamente
                targetLapsRef.current = newRandomLaps; // Actualizar el valor de la variable ref
              }, 2000); // 2000 milisegundos = 2 segundos
            }, 2000); // 2000 milisegundos = 2 segundos
            return prevTime;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000); // 1000 milisegundos = 1 segundo

      // Limpiar el temporizador cuando el componente se desmonta
      return () => clearInterval(timer);
    }
  }, [gameOver]);

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
