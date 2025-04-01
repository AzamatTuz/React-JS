import { useState } from "react"
import { useEffect } from "react";

export default function ChangeColor() {
    const [color, setColor] = useState('');

    useEffect(() => {
      const newColor = localStorage.getItem('color');
      if (newColor) {
        setColor(newColor)
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem('color', color);
    }, [color]);


    return (
        <div className="cont" style={{ background: `${color}`}}>
    
            <button onClick={() => setColor('red')}>Red</button>
            <button onClick={() => setColor('blue')}>Blue</button>
            <button onClick={() => setColor('green')}>Green</button>
    
        </div>
    );
}