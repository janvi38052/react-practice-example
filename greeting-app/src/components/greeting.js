import React, { useState, useEffect } from 'react';


function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
      setGreeting('Good Morning!');
    } else if (currentHour < 20) {
      setGreeting('Good Afternoon!');
    } else {
      setGreeting('Good Evening!');
    }
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}

export default Greeting;