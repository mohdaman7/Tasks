import React from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {

    const navigate = useNavigate();

    const handleLogin = ((event) => {
        event.preventDefault();
        navigate('/home')
    })

  return (
    <div style={{background:'black', width:'400px',height:'200px'}}>
       <h2>Login Page</h2>
       <form onSubmit={handleLogin}>
       <input type='text' placeholder='Username' />
       <br/>
        <input type="password" placeholder='Password'  />
        <br/>
        <br/>
        <button>Submit</button> 
       </form>
    </div>
  )
}

export default Login
