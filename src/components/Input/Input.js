import React from 'react';

export default function Input({ setHead, setMiddle, setPants, setPhrase, phrase }) {
  return (
    <>
      <div>
        <label>
          Head:
          <select onChange={(e) => setHead(e.target.value)}>
            <option value="bird-head">bird</option>
            <option value="dog-head">dog</option>
            <option value="duck-head">duck</option>
            <option value="horse-head">horse</option>
          </select>
        </label>

        <label>
          Pants:
          <select onChange={(e) => setMiddle(e.target.value)}>
            <option value="blue-middle">blue</option>
            <option value="dress-middle">dress</option>
            <option value="pink-middle">pink</option>
            <option value="red-middle">red</option>
          </select>
        </label>
        <label>
          Pants:
          <select onChange={(e) => setPants(e.target.value)}>
            <option value="blue-pants">blue</option>
            <option value="dog-pants">dog</option>
            <option value="leg-pants">leg</option>
            <option value="white-pants">white</option>
          </select>
        </label>
        <label>
          Add a catch phrase:
          <input
            type="text"
            placeholder="input here"
            onChange={(e) => setPhrase(e.target.value)}
          ></input>
          <button>save</button>
        </label>
      </div>
    </>
  );
}
