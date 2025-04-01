import { useState, useEffect } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let newCount = JSON.parse(localStorage.getItem('count'))
    if (newCount) {
      setCount(newCount)
    }
  }, [])

  function add() {
    setCount(count + 1);
  }

  function min() {
    setCount(count - 1);
  }

  function res() {
    setCount(count - count);
  }

  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count]);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={add}>+</button>
        <button onClick={min}>-</button>
        <button onClick={res}>Res</button>
        <button onClick={() => alert(JSON.parse(localStorage.getItem('count')))}>Click</button>
    </div>
  );
}
