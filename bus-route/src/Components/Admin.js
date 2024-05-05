import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.css'
import Card  from 'react-bootstrap/Card';
import background from '../adminCardBackground.jpg'



export default function Admin() {

    const [busno, setNumber] = useState('')
    const [time, setTime] = useState('')
    const [from, setFrom] = useState('select')
    const [to, setTo] = useState('select')

    const storeData=()=>{
        // e.preventDefault()
        axios.post('http://localhost:1516/admin', {busno, time, from, to})

        .then(res=>console.log(res))
        .catch(err=>console.log(err))

    }

    return (
        <div className='adminMainDiv'>
                <div className='adminSubDiv'>
                    <div className='adminMessage col-lg-12 col-sm-12'>
                        <h2>Welcome <br/> Admin</h2>
                    </div>
                    {/* <form onSubmit={storeData}>
                <h1>Admin Page</h1><br></br><br></br>
                <label>Bus Number: </label>
                <input type='text' value={busno} onChange={(e)=>setNumber(e.target.value)}/> <br></br><br></br>
                <label>Bus Time: </label>
                <input type='text' value={time} onChange={(e)=>setTime(e.target.value)}/> <br></br><br></br>
                <label>From: </label>
                <select value={from} onChange={(e)=>(setFrom(e.target.value))}>
                    <option>Select Location</option>
                    <option value='singanallur'>Singanallur</option>
                    <option value='gandhipuram'>Gandhipuram</option>
                    <option value='ukkadam'>Ukkadam</option>
                    <option value='thudiayalur'>Thudiayalur</option>
                    <option value='annur'>Annur</option>
                </select><br></br><br></br>
                <label>To: </label>
                <select value={to} onChange={(e)=>(setTo(e.target.value))}>
                    <option>Select Location</option>
                    <option value='singanallur'>Singanallur</option>
                    <option value='gandhipuram'>Gandhipuram</option>
                    <option value='ukkadam'>Ukkadam</option>
                    <option value='thudiayalur'>Thudiayalur</option>
                    <option value='annur'>Annur</option>
                </select>
                <button type='submit'>Submit</button>
            </form> */}
                    <Form onSubmit={storeData} className='adminForm col-sm-12 col-lg-12'>
                        <h2>Admin Data</h2>
                        <Form.Group className="mb-3">
                            <Form.Label>Bus Number: </Form.Label>
                            <Form.Control type="text" value={busno} onChange={(e) => setNumber(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Bus Time: </Form.Label>
                            <Form.Control type="text" value={time} onChange={(e) => setTime(e.target.value)} />
                        </Form.Group>
                        <Form.Label>From: </Form.Label>
                        <Form.Select value={from} onChange={(e) => (setFrom(e.target.value))} aria-label="Default select example">
                            <option>Select Location</option>
                            <option value='singanallur'>Singanallur</option>
                            <option value='gandhipuram'>Gandhipuram</option>
                            <option value='ukkadam'>Ukkadam</option>
                            <option value='thudiayalur'>Thudiayalur</option>
                            <option value='annur'>Annur</option>
                        </Form.Select>
                        <Form.Label>To </Form.Label>
                        <Form.Select value={to} onChange={(e) => (setTo(e.target.value))} aria-label="Default select example">
                            <option>Select Location</option>
                            <option value='singanallur'>Singanallur</option>
                            <option value='gandhipuram'>Gandhipuram</option>
                            <option value='ukkadam'>Ukkadam</option>
                            <option value='thudiayalur'>Thudiayalur</option>
                            <option value='annur'>Annur</option>
                        </Form.Select><br></br>
                        <Button variant="primary" type="submit" className='admin-btn'>
                            Submit
                        </Button>
                    </Form>
        </div>
        </div>
    )
}