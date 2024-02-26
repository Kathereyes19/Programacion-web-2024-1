import { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

export const useGameLogic = () => {
  const [count, setCount] = useState(0);
  const [showIncreaseImage, setShowIncreaseImage] = useState(false);
  const [showDecreaseImage, setShowDecreaseImage] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showResetImage, setShowResetImage] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [targetLaps, setTargetLaps] = useState(0);

  const targetLapsRef = useRef(targetLaps); 

// Function to display the initial alert
  const showAlert = (laps) => {
    Swal.fire(`Welcome to the game. You must complete ${laps} laps before time runs out.`);
  };

// Effect to generate a random number of turns at the start of the game
  useEffect(() => {
    const randomLaps = Math.floor(Math.random() * 10) + 10; 
    setTargetLaps(randomLaps);
    showAlert(randomLaps); 
    targetLapsRef.current = randomLaps; 
  }, []);

// Effect to start the game timer
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

  // Function to increment the counter
  const increaseCount = () => {
    if (!gameOver) {
      setCount(count + 1);
      setShowIncreaseImage(true);
      setTimeout(() => setShowIncreaseImage(false), 2000); 
    }
  };

  // Function to reduce the counter
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setShowDecreaseImage(true);
      setTimeout(() => setShowDecreaseImage(false), 2000); 
    }
  };

  return { count, showIncreaseImage, showDecreaseImage, gameOver, showResetImage, timeRemaining, decreaseCount, increaseCount };
};
