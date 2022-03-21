import React, { useState } from 'react'

function Login() {
  const [username,setUsername] =useState("");
  const [password,setPassword] =useState("");
  const Login=() => {}
  return (
    <div className='Login'>
       <label>Login</label>
       <input placeholder='UserName' onChange={(event) => {
         setUsername(event.target.value);
      }}/>
       <input placeholder='Password' type='password' onChange={(event) => {
         setPassword(event.target.value);
      }}/>
      <button onClick={Login}>Login</button>
    </div>
  )
}

export default Login