import React from 'react';

export default function CounterDisplay({ phraseCount }) {
  return (
    <>
      <div>you have changed the head {} many times</div>
      <div>you have changed the middle {} many times</div>
      <div>you have changed the pants {} many times</div>
      <div>you have {phraseCount} many Catch phrases</div>
    </>
  );
}
