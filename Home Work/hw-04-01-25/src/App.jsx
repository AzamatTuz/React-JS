import axios from "axios";
import { useState } from "react";
import "./App.css"

export default function App() {
  const [joke, setJoke] = useState("");

  function getData() {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => {
        setJoke(res.data);
      });
  }

  return (
    <>
      <button onClick={getData}>Click</button>
      <h1>{joke.setup}</h1>
      <h3>{joke.punchline}</h3>
    </>
  );
}
