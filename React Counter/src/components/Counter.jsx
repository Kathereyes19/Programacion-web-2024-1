import React, { useState } from 'react';
import './Counter.css';

export function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decreaseCount}>Reducir</button>
      <button onClick={increaseCount}>Aumentar</button>
    </div>
  );
}
