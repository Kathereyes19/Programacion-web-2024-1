import { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

export const useGameLogic = () => {
  const [count, setCount] = useState(0);
  const [showIncreaseImage, setShowIncreaseImage] = useState(false);
  const [showDecreaseImage, setShowDecreaseImage] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showResetImage, setShowResetImage] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [targetLaps, setTargetLaps] = useState(0);

  const targetLapsRef = useRef(targetLaps); 

  const showAlert = (laps) => {
    Swal.fire(`Welcome to the game. You must complete ${laps} laps before time runs out.`);
  };

  useEffect(() => {
    const randomLaps = Math.floor(Math.random() * 10) + 10; // Generar un número aleatorio entre 1 y 10
    setTargetLaps(randomLaps);
    showAlert(randomLaps); 
    targetLapsRef.current = randomLaps; 
  }, []);

  useEffect(() => {
    if (!gameOver) {
      const timer = setInterval(() => {
        setTimeRemaining(prevTime => {
          if (prevTime === 0) {
            setGameOver(true);
            clearInterval(timer);
            setShowResetImage(true); 
            setTimeout(() => {
              setShowResetImage(false); 
              setTimeout(() => {
                setCount(0);
                setGameOver(false);
                setTimeRemaining(60); 
                const newRandomLaps = Math.floor(Math.random() * 10) + 1; 
                setTargetLaps(newRandomLaps); 
                showAlert(newRandomLaps); 
                targetLapsRef.current = newRandomLaps; 
              }, 2000); 
            }, 2000); 
            return prevTime;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000); 

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

  return { count, showIncreaseImage, showDecreaseImage, gameOver, showResetImage, timeRemaining, decreaseCount, increaseCount };
};
