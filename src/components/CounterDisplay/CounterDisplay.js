import React from 'react';

export default function CounterDisplay(headCount, middleCount, pantCount) {
  return (
    <>
      <div>you have changed the head {headCount} many times</div>
      <div>you have changed the middle {middleCount} many times</div>
      <div>you have changed the pants {pantCount} many times</div>
    </>
  );
}
