import React from 'react';
import './Display.css';

export default function Display({ head, middle, pants, phraseList }) {
  return (
    <>
      <div className="player-container">
        <img width="400px" src={process.env.PUBLIC_URL + `/assets/${head}.png`} />
        <img width="200px" src={process.env.PUBLIC_URL + `/assets/${middle}.png`} />
        <img width="200px" src={process.env.PUBLIC_URL + `/assets/${pants}.png`} />
      </div>
      <div className="phrase-list">
        PhraseList:{' '}
        {phraseList.map((elem) => (
          <p key={elem}> {elem} </p>
        ))}
      </div>
    </>
  );
}
