import { useState } from 'react';
import './App.css';
import Display from './components/Display/Display';
import Input from './components/Input/Input';
// import CounterDisplay from './components/CounterDisplay/CounterDisplay';

function App() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [pants, setPants] = useState('');
  const [phrase, setPhrase] = useState('');
  const [phraseList, setPhraseList] = useState([]);

  return (
    <div className="App">
      <Display {...{ head, middle, pants, phrase, phraseList }} />
      <Input {...{ setHead, setMiddle, setPants, setPhrase, phrase, setPhraseList }} />
    </div>
  );
}

export default App;
