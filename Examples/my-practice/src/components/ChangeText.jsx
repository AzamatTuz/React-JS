import React, { useState } from "react";

export default function ChangeText() {
    const [text, changeText] = useState("Submit");

    const handleClick = () => {
        changeText("Loading...");
      };
    return (
        <div>
        <h1>{text}</h1>
        <button type="button" onClick={handleClick}>Change Text</button>
        </div>
    );
}