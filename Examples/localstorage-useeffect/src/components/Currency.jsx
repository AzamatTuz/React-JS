import { useEffect, useState } from "react";

export default function Currency() {
    const [currency, setCurrency] = useState("");

    useEffect(() => {
        const newCurrency = localStorage.getItem('currency');
        if (newCurrency) {
            setCurrency(newCurrency)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('currency', currency);
    }, [currency])

    return (
        <div className="userList">

            <h1>Currency: {currency}</h1>

            <button onClick={() => setCurrency('USD')}>USD</button>
            <button onClick={() => setCurrency('EUR')}>EUR</button>
            <button onClick={() => setCurrency('KZT')}>KZT</button>
        </div>
    );
}