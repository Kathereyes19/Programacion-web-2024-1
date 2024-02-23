import React from 'react';
import './Buttons.css';

export function Buttons({ onClick, text, type }) {
  const buttonClass = type === "Back" ? "IncreaseDecrease Back" : "IncreaseDecrease Go";

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
}
