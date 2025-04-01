import { useEffect, useState } from "react";


export default function Timer() {
    let [timer, setTimer] = useState(0);
    
    function startTimer() {
        let Interval = setInterval(() => {
            setTimer(timer += 1)
        }, 1000);
    }

    useEffect(() => {
        let newTime = Number(localStorage.getItem('timer'))
        if (newTime) {
            setTimer(newTime)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('timer', timer)
    }, [timer])

    return(
        <div className="userList">
            <h1>{timer}</h1>
            <button onClick={startTimer}>Start</button>
        </div>
    );
}