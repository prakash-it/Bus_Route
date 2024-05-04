import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signin() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()

    const handlesigin=()=>{
        axios.post(`http://localhost:1516/user`,{name,email,password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        navigate('/login')
    }
    const handlelog=()=>{
      navigate('/login')
    }
  return (
    <div>
        <form onSubmit={handlesigin}>
            <label>Name:</label>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Password:</label>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type='submit'>SignIn</button>
        </form>
        <h2>Alreday have a Account?</h2>
        <button onClick={handlelog}>Login</button>
    </div>
  )
}
