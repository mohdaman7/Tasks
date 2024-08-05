import React from 'react'
import { useNavigate } from 'react-router-dom';


function Register() {

    const navigate = useNavigate();

    const handleSubmit = ((event)=>{
        event.preventDefault();
        navigate('/login')
        
    })

  return (
    <div style={{background:'black', width:'400px',height:'200px'}}>
       <h2>Registration Page</h2>
       <form onSubmit={handleSubmit}>
        
        <input type='text' placeholder='Username' />
        <br/>
        <input type="password" placeholder='Password'  />
        <br/><br/>
        <button>Register</button> 
       </form>
    </div>
  )
}

export default Register
