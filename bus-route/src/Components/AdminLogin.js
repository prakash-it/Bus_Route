import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export default function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userlist, setUserlist] = useState([])
    const [errmsg, setErrmsg] = useState('')
    const navigate = useNavigate()
    

    useEffect(() => {
        axios.get('http://localhost:1516/adminlogin')
            .then(res => setUserlist(res.data))
            .catch(err => console.log(err))
    }, [])
    
    const handlelogin = (e) => {
        e.preventDefault()
        const user = userlist.find(x => x.email === email)
        if (user) {
            if (user.password === password) {
            
                navigate('/Admin')
            } else {
                setErrmsg("Incorrect Password")
            }
        } else {
            setErrmsg("User not Found")
        }
    } 
         
    const userlogin = () => {
        navigate('/Login')
    }
          
   
    return (
        <div>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter the mail'/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter the password'/>
            {/* <button onClick={handlelogin}>Admin Login</button>
            <button onClick={userlogin}>User Admin</button> */}
            <Button className='col-sm-2' variant="success" onClick={handlelogin}>
                    Log In
                </Button>
            <Button className='col-sm-2' variant="danger" onClick={userlogin}>
                    Log out
                </Button>

            {errmsg}
        </div>

        

    )
}
