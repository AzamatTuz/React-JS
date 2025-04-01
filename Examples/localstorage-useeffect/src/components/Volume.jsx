import { useState } from "react"
import { useEffect } from "react";

export default function Volume() {

    const [volume, setVolume] = useState("")
    
    useEffect(() => {
        let newVolume = localStorage.getItem('volume');
        if (newVolume) {
            setVolume(newVolume)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('volume', volume)
    }, [volume])

    return (
        <div className="userList">
            <input type="range" value={volume} onChange={(e) => setVolume(e.target.value)}/>
            <h1>{volume}%</h1>
        </div>
    );
}