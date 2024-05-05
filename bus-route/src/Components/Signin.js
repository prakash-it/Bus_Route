import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.css'

export default function Signin() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()

    const handlesigin=()=>{
        axios.post(`http://localhost:1516/user`,{name,email,password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        navigate('/Login')
    }
    const handlelog=()=>{
      navigate('/Login')
    }
  return (
    <div className='signinDiv'>
      <Card className='signinCard'>
      <Card.Body className='signinBody'>
        <div className='signinGreet'>
          <h2>Sigin Page</h2>
        </div>
      <form className='signinForm' onSubmit={handlesigin}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name: </Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email: </Form.Label>
        <Form.Control type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password: </Form.Label>
        <Form.Control type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <h4>Already have an Account?</h4>
      <Button variant="primary" onChange={handlelog}>
        Login
      </Button>

        {/* 
            <label>Name:</label>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Password:</label>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type='submit'>SignIn</button>
        
        <h2>Alreday have a Account?</h2>
        <button onClick={handlelog}>Login</button> */}
        </form>
        </Card.Body>
    </Card>
    </div>
  )
}
