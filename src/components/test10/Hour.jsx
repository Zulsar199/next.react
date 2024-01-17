import { CustomButt } from "./Button";
import { useState } from "react";

export const Hour = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [start, setStart] = useState("start");

  const handleClick = () => {
    setStart("stop");
    
  };
  let interval;

    if (!interval) {
      interval = setInterval(() => {
        setSecond(second+1);
      }, 1000);
      return setSecond;
    }

  return (
    <div>
      <CustomButt start={start} handleButton={handleClick} />
      <p>{hour} hour</p>
      <p>{minute} minute</p>
      <p>{second} second</p>
    </div>
  );
};
