import React, { useState } from 'react'

export default function Login() {
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[errmsg,seterrmsg]=useState()
  return (
    <div>
        <form onSubmit={handlelogin}>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Password:</label>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target)}/>
        </form>
    </div>
  )
}
