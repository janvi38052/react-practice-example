import React, { useState } from 'react';

function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number); 
  };

  return (
    <div>
      <p>The random number is: {randomNumber}</p>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
  );
}

export default RandomNumberGenerator;
