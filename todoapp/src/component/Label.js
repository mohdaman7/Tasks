import React, { useState } from "react";
import Div from "./Div";

const Label = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("blue");
  return (
    <div>
      <div >
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="enter the color"
        />
      </div>
      <button
        onClick={() => {
          setColor(text);
        }}
      >
        Submit
      </button>
      <Div divColor={color}/>
    </div>
  );
};

export default Label;
