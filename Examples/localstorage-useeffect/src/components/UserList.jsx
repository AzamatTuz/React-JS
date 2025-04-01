import { useState } from "react"
import { useEffect } from "react";

export default function UserList() {
    const [userName, setUserName] = useState("");
    const [name, setName] = useState('');

    useEffect(() => {
        let newName = localStorage.getItem('name');
        if (newName) {
            setName(newName)
        }
    }, [])
    
    function saveName() {
        setName(userName)
        setUserName("")
    }

    function removeUser() {
        localStorage.removeItem('name');
        setName("")
    }

    useEffect(() => {
        localStorage.setItem('name', name)
    }, [name])

    return (
        <div className="userList">
            <input value={userName} onInput={(e) => setUserName(e.target.value)} type="text" />
            <button onClick={saveName}>Save</button>
            <button onClick={removeUser}>Log Out</button>
            <h1>{name}</h1>
        </div>
    )
}