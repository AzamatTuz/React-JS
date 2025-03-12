import React, { useState } from "react";

export default function InpText() {
  const [inpVal, changeInp] = useState();

  function changeInpVal(event) {
    changeInp(event.target.value.toUpperCase());
  }

  return (
    <div>
        <input onInput={changeInpVal} placeholder="Input Me" type="text" />
        <h1>Input Value: {inpVal}</h1>
    </div>
  );
}
