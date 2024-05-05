import React, { useEffect, useState } from 'react'
import { useAuth } from './Auth'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login(props) {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[islogged,setIslogged]=useState(false)
    const[userlist,setUserlist]=useState([])
    const[errmsg,setErrmsg]=useState('')
    const auth=useAuth()
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:1516/user`) 
        //    ?email=${email}&password=${password}`)
        .then(res=>setUserlist(res.data))
        .catch(err=>console.log(err))
    },[])
    const handlelogin=(e)=>{
        e.preventDefault()
        const user=userlist.find(x=>x.email===email)
        if(user){
            if(user.password===password){
                auth.Login(user.name)
                setIslogged(true)
                navigate('/Filter')
                
            }else{
                setErrmsg("Incorrect Password")
                
            }
        }else{
            setErrmsg("User not Found Please Signin")
        }
        
        
    }
    const handlelogout=()=>{
        setIslogged(false)
    }
  return (
    <div>
        <form onSubmit={handlelogin}>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Password:</label>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            {islogged ?(<button onClick={handlelogout}>Logout</button>):(<button type='submit'>Login</button>)}

            {errmsg}
            </form>
    </div>
  )
}
