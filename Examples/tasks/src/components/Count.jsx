import "../App.css";
import { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);
    let notification = null 

    function add() {
        setCount(count + 1);
    }
    
    if (count === 10) {
        notification = '10-ға жеттіңіз!'
    } else if (count < 0) {
        notification = '0-ден төмен болмауы керек!'
    }

    function subtract() {
        setCount(count - 1);
    }

  return (
    <div>
        <h2 className={count === 10 ? 'test' : 'default'} >{notification}</h2>
        <h2 className={count < 0 ? 'test' : 'default'} >{notification}</h2>
        <h1>{count}</h1>
        <article>
            <button className="countBtn" onClick={add}>+</button>
            <button className="countBtn" onClick={subtract}>-</button>
      </article>
    </div>
  );
}
