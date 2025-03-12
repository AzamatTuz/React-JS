import { useState } from "react";
import "./App.css"
import Todo from "./components/Todo-list";

export default function App() {

  let isAdmin = true;
  let isSubscribe = false;

  let isOnline = true;
  let temp = 25 ;

  const [show, setShow] = useState(false);
  const [mode, setMode] = useState(false)

  return (
    <div className={mode ? 'darkMode' : 'lightMode'}>

      <button onClick={() => setMode(!mode)}>
        {mode ? 'Light mode' : 'Dark mode'}
      </button>
    
      {isAdmin && <p>You Admin</p> || <p>You default user</p>}
      {isSubscribe ? <h1>You premium user</h1> : <h1>You default user</h1>}
      {isOnline && <p>You online 🟢</p> || <h1>You offline 🔴</h1>}
      {temp > 35 && <p>Ыстық</p>}
      {(temp >= 10 && temp <= 35) && <p>Жылы</p>}
      {temp < 10 && <p>Суық</p>}
      

      <button onClick={() => setShow(!show)}>
        {show ? 'Жасыру' : 'Көрсету'}
      </button>

      {show && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora aliquam fugit nemo, adipisci doloribus nam, earum dicta saepe deserunt maiores nihil enim. Corrupti ut voluptate quas! Maxime odio soluta commodi!</p> || <p>📌 Ақпарат жасырылды!</p>}

      <Todo/>
    </div>
  );
}