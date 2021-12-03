import React from 'react';
import './CounterDisplay.css';
export default function CounterDisplay({ phraseCount, headCount, middleCount, pantCount }) {
  return (
    <div className="counter-container">
      <div>you have changed the head {headCount} many times</div>
      <div>you have changed the middle {middleCount} many times</div>
      <div>you have changed the pants {pantCount} many times</div>
      <div>you have {phraseCount} many Catch phrases</div>
    </div>
  );
}
