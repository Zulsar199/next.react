import { useState } from "react";

export const CustomButt = ({ start, handleButton }) => {
  return (
    <div>
      <button onClick={handleButton}>{start}</button>
    </div>
  );
};
