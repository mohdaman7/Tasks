import React, { useState } from "react";

const States = ({ num }) => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count+1)}>increment</button>
      <h1>{count}</h1>
      <button onClick={() => (count > 0 ? setCount(count - 1) : count)}>
        decrement
      </button>
    </div>
  );
};

export default States;
