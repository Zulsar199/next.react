import { useState } from "react";

// export const Turn = () => {
//   let [on, setOn] = useState(true);

//   const handleButton = () => {
//     setOn(!on);
//   };
//   var color = on ? "green" : "red";
//   return (
//     <div>
//       <h1>Toggle turn on | off</h1>
//       <button
//         style={{ backgroundColor: `${color}` }}
//         onClick={() => handleButton()}
//       >
//         {on ? "on" : "off"}
//       </button>
//     </div>
//   );
// };

export const Turn = () => {
  const [isOn, setIsOn] = useState(false);
  const handleClick =()=>{
    setIsOn(!isOn)
  }

  return (
    <button
      style={{ backgroundColor: isOn ? "red" : "green" }}
      onClick={handleClick}
    >
      {isOn ? "off" : "on"}
    </button>
  );
};
