//  FUNCTIONAL COMPONENT  //

import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 style={{ margin: "10px" }}>Pengenalan React Tingkat Dasar</h1>
      <h1 style={{ margin: "10px" }}>Counter</h1>
      <h2 style={{ margin: "10px" }}>{count}</h2>
      <button onClick={increment} style={{ margin: "10px" }}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}

export default CounterApp;

