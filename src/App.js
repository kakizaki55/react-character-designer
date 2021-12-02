import { useState } from 'react';
import './App.css';
import Display from './components/Display/Display';
import Input from './components/Input/Input';
import CounterDisplay from './components/CounterDisplay/CounterDisplay';

function App() {
  const [head, setHead] = useState('');

  return (
    <div className="App">
      <Display {...{ head }} />
      <Input {...{ setHead }} />
      <CounterDisplay />
    </div>
  );
}

export default App;
