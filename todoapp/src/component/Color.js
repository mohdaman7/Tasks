import React, { useState } from 'react'

export default function Color() {

    const [color,setColor] = useState("red")

  return (
    <div>
        <h1>My fav color is {color}</h1>
       <div>
        <button onClick={()=>setColor("Blue")}>Blue</button>
        <button onClick={()=>setColor("Black")}>Black</button>
        <button onClick={()=>setColor("Green")}>Green</button>
        <button onClick={()=>setColor("Orange")}>Orange</button>
       </div>


    </div>
  )
}
