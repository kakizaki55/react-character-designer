import { useState } from 'react';
import './App.css';
import Display from './components/Display/Display';
import Input from './components/Input/Input';
import CounterDisplay from './components/CounterDisplay/CounterDisplay';

function App() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [pants, setPants] = useState('');
  const [phrase, setPhrase] = useState('');

  return (
    <div className="App">
      <Display {...{ head, middle, pants, phrase }} />
      <Input {...{ setHead, setMiddle, setPants, setPhrase, phrase }} />
    </div>
  );
}

export default App;
