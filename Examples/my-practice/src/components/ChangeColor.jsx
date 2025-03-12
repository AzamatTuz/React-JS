import React, { useState } from "react";

export default function ChangeColor() {
    
    const [colorD, setColor] = useState("#363636");
      
    
      function changeColor() {
        setColor("red");
    
        setTimeout(() => {
          setColor("#363636");
        }, 1000)
    }
    
    return (
        <div>
            <div style={ { backgroundColor: `${colorD}`, width: "200px", height: "200px"} }>
                <button onClick={changeColor}>Change Color</button>
            </div>
        </div>
    )
}