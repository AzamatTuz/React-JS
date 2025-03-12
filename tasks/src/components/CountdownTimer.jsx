import { useState } from "react";

export default function CountdownTimer() {
    let [timer, setTimer] = useState(0);
    // let [time, setTime] = useState(0)

    function getTime(event) {
        setTimer(Number(event.target.value.trim()))
    }


    let interval 

    function startTimer() {

        if (timer != 0) {
            interval = setInterval(() => {
                setTimer(timer -= 1);
                if (timer == 0) {
                    clearInterval(interval)
                }
            }, 1000);
        }

        
    }

    // function stopTimer() {
    //     clearInterval(interval)
    // }

    return(
        <div>
            <h1>{timer}</h1>
            <input className="timeInp" onInput={getTime} type="text" />
            <button className="timerBtn" onClick={startTimer}>Start</button>
            {/* <button onClick={stopTimer}>Stop</button> */}
        </div>
    );
}