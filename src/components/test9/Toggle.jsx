import { useState } from "react";

export const Turn = () => {
  let [on, setOn] = useState(true);

  const handleButton = () => {
    setOn(!on);
    console.log("button darlaa" + " " + on);
  };

  if (on) {
    return (
      <div>
        <h1>Toggle turn on | off</h1>
        <button style={{backgroundColor: "green"}} onClick={() => handleButton()}>ON</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Toggle turn on | off</h1>
        <button style={{backgroundColor: "red"}} onClick={() => handleButton()}>OFF</button>
      </div>
    );
  }
};
