import React from 'react';
import './Input.css';

export default function Input({
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
}) {
  const appendPhrase = () => {
    setPhraseList((prevState) => [...prevState, phrase]);
    setPhraseCount((prevState) => prevState + 1);
    setPhrase('');
  };
  const handleHead = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };
  const handleMiddle = (e) => {
    setMiddle(e.target.value);
    setMiddleCount((prevState) => prevState + 1);
  };
  const handlePants = (e) => {
    setPants(e.target.value);
    setPantCount((prevState) => prevState + 1);
  };

  return (
    <>
      <div className="charctor-creator">
        <label>
          Head:
          <select onChange={handleHead}>
            <option value="dead-tired-head">tired</option>
            <option value="money-head">money</option>
            <option value="skeptical-head">skeptical</option>
            <option value="smile-head">smile</option>
          </select>
        </label>

        <label>
          Shirts:
          <select onChange={handleMiddle}>
            <option value="black-shirt">black</option>
            <option value="green-shirt">green</option>
            <option value="purple-shirt">purple</option>
            <option value="red-shirt">red</option>
          </select>
        </label>
        <label>
          Pants:
          <select onChange={handlePants}>
            <option value="black-pants">black</option>
            <option value="brown-pants">bowrn</option>
            <option value="green-pants">green</option>
            <option value="white-pants">white</option>
          </select>
        </label>
        <label>
          Add a catch phrase:
          <input
            value={phrase}
            type="text"
            placeholder="input here"
            onChange={(e) => setPhrase(e.target.value)}
          ></input>
          <button onClick={appendPhrase}>save</button>
        </label>
      </div>
    </>
  );
}
