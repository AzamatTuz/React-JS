import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function min() {
    setCount(count - 1);
  }

  function res() {
    setCount(count - count);
  }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={add}>+</button>
        <button onClick={min}>-</button>
        <button onClick={res}>Res</button>
    </div>
  );
}
