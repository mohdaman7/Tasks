import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function Home() {
  const [color,setColor] = useState("Blue");
  const [count,setCount] = useState(0)
  const changeColor = () =>{
    setColor("red")
  }
  const increment = () =>{
    setCount(count+1)
  }
  const decrement = () =>{
    if(count>0){
      setCount(count-1)
    }
  }
  return (
    <div>
      <h2>My favourite colour is {color}</h2>
      <Button onClick={changeColor}>Change Colour</Button>
      <br/>
      <br/>
      <h2>Counter is {count}</h2>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </div>
  );
}

export default Home;
