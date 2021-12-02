import React from 'react';

export default function Display({ head, middle, pants, phraseList }) {
  return (
    <>
      <div className="player-container">
        <img width="200px" src={process.env.PUBLIC_URL + `/assets/${head}.png`} />
        <img width="200px" src={process.env.PUBLIC_URL + `/assets/${middle}.png`} />
        <img width="200px" src={process.env.PUBLIC_URL + `/assets/${pants}.png`} />
      </div>
      <div>
        <span> {phraseList}</span>
      </div>
    </>
  );
}
