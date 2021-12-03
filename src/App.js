import { useState } from 'react';
import './App.css';
import Display from './components/Display/Display';
import Input from './components/Input/Input';
import CounterDisplay from './components/CounterDisplay/CounterDisplay';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [head, setHead] = useState('money-head');
  const [middle, setMiddle] = useState('green-shirt');
  const [pants, setPants] = useState('green-pants');
  const [phrase, setPhrase] = useState('');
  const [phraseList, setPhraseList] = useState([]);
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [pantCount, setPantCount] = useState(0);
  const [phraseCount, setPhraseCount] = useState(0);

  return (
    <div>
      <Header />
      <div className="App">
        <Display {...{ head, middle, pants, phrase, phraseList }} />
        <div className="text">
          <Input
            {...{
              setHead,
              setMiddle,
              setPants,
              setPhrase,
              phrase,
              setPhraseList,
              setPhraseCount,
              setHeadCount,
              setMiddleCount,
              setPantCount,
            }}
          />
          <CounterDisplay {...{ phraseCount, headCount, middleCount, pantCount }} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
