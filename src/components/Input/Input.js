import React from 'react';

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
      <div>
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
          Pants:
          <select onChange={handleMiddle}>
            <option value="blue-middle">blue</option>
            <option value="dress-middle">dress</option>
            <option value="pink-middle">pink</option>
            <option value="red-middle">red</option>
          </select>
        </label>
        <label>
          Pants:
          <select onChange={handlePants}>
            <option value="blue-pants">blue</option>
            <option value="dog-pants">dog</option>
            <option value="leg-pants">leg</option>
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
