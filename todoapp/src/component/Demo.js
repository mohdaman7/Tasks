import React, { useState } from "react";

function Demo() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("white");
  return (
    <>
      <div className="usage">
        <div className="usage-item">
          <div style={{ background: color }}>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Increment
            </button>
            <label>{count}</label>
            <button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              Decrement
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>

        <button
          onClick={() => {
            setColor("blue");
          }}
        >
          Blue
        </button>
      </div>
    </>
  );
}

export default Demo;
