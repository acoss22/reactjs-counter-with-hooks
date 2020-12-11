import React, { Component, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function incrementValue() {
    setCounter(counter + 1);
  }

  function decrementValue() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button onClick={incrementValue}>+</button>
        <button onClick={decrementValue}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
