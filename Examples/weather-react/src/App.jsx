import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [weather, setWeather] = useState([]);
  const [errorMes, setErrorMes] = useState("");
  const [active, setActive] = useState(false)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setWeather(res.data.slice(0, 5));
      console.log();
      
    }).catch(() => {
      setErrorMes('Error 404')
    })
  }, []);

  return (
    <>
      {active ? weather.map((d) => (
        <h1 key={d.title}>{d.title}</h1>
      )) : ""}

      <button onClick={() => setActive(true)}>Click</button>

      <p>{errorMes && errorMes}</p>
    </>
  );
}
