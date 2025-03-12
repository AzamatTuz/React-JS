import { useState } from "react";
import "../App.css"


export default function ColorSwitcher() {
    const [color, setColor] = useState()
    let colorArr = useState([])[0];

    let random = `#${Math.floor(Math.random() * 5592402).toString(16)}`

    function changeColor() {
        setColor(random);
        colorArr.push(random);

        if (colorArr.length > 5) {
            colorArr.shift();
        }
    }

    const colors = colorArr.map(c => 
        <article key={c} className="cont" style={{background: `${c}`}} >
            {c}
        </article>
    )

    return (
        <div style={{background: `${color}`}}>
            <button className="btnColor" onClick={changeColor}>Change</button>
            <section className="colorSection">
                {colors}
            </section>
        </div>
    );
}