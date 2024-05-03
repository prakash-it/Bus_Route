import axios from 'axios'
import React, { useState } from 'react'

export default function Signin() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const handlesigin=()=>{
        axios.post(`http://localhost:3001/users`,{name,email,password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
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
    </div>
  )
}
