import React, { useEffect, useState } from 'react'
import './Theme.css'
import Button from "react-bootstrap/Button";


const Theme = () => {
    const [theme,setTheme] = useState(false)

    const handleclick = () => {
        setTheme(!theme)
    }

    useEffect(()=>{
        if(theme){
            document.body.classList.add("dark")
        }else{
            document.body.classList.remove("dark")
        }
    })


  return (
    <div>
      <Button onClick={handleclick}>Switch Theme</Button>
    </div>
  )
}

export default Theme
