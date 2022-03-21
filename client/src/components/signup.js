import React,{useState} from 'react'
import Axios from "axios"
import Cookies from "universal-cookie"

function SignUp() {
  const cookies=new Cookies();
  const [user,setUser]= useState(null);
  const SignUp=() => {
    Axios.post("http://localhost:3001/SignUp",user).then((res) => {
      const {token,userId,firstName,lastName,UserName,hashedPassword}=res.data;
      cookies.set("token",token)
      cookies.set("userId",userId)
      cookies.set("firstName",firstName)
      cookies.set("lastName",lastName)
      cookies.set("UserName",UserName)
      cookies.set("hashedPassword",hashedPassword)
      
    })
  }
  return (
    <div className='signUp'>
      <label>Sign Up</label>
      <input placeholder='First Name' onChange={(event) => {
         setUser({...user,firstName : event.target.value});
      }}/>
       <input placeholder='Last Name' onChange={(event) => {
         setUser({...user,lastName : event.target.value});
      }}/>
       <input placeholder='UserName' onChange={(event) => {
         setUser({...user,UserName : event.target.value});
      }}/>
       <input placeholder='Password' type='password' onChange={(event) => {
         setUser({...user,Password : event.target.value});
      }}/>
      <button onClick={SignUp}>Sign Up</button>
    </div>
  )
}

export default SignUp