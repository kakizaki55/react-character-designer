import React from 'react';

export default function Input() {
  return (
    <>
      <div>
        <label>
          head:
          <select>
            <option value="bird-head">bird</option>
            <option value="dog-head">dog</option>
            <option value="duck-head">duck</option>
            <option value="horse-head">horse</option>
          </select>
        </label>
      </div>
    </>
  );
}
