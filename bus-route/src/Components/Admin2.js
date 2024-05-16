import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import '../index.css'

export default function Admin2() {
    const [busno, setNumber]=useState('')
    const [time, setTime]=useState('')
    const [from, setFrom]=useState('')
    const [to, setTo]=useState('')


    const storeData=(e)=>{
        e.preventDefault()
        e.preventDefault()
        const busdata={
            busno:busno,
            time:time,
            from:from,
            to:to
        }
        axios.post('http://localhost:4000/express/post',busdata)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        setNumber('')
        setTime('')
        setFrom('')
        setTo('')
    }

    return (
        <div className='adminMainDiv'>
            <div className='adminSubDiv'>
                <div className='adminMessage col-lg-12 col-sm-12'>
                    <h2>Welcome <br /> Admin</h2>
                </div>
                <div>
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
                        {/* <Form.Select value={from} onChange={(e) => (setFrom(e.target.value))} aria-label="Default select example">
                            <option>Select Location</option>
                            <option value='pollachi'>Pollachi</option>
                            <option value='selam'>Selam</option>
                            <option value='erode'>Erode</option>
                            <option value='karur'>Karur</option>
                            <option value='trichy'>Trichy</option>
                        </Form.Select> */}
                        <Form.Control type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
                        <Form.Label>To </Form.Label>
                        {/* <Form.Select value={to} onChange={(e) => (setTo(e.target.value))} aria-label="Default select example">
                            <option>Select Location</option>
                            <option value='pollachi'>Pollachi</option>
                            <option value='selam'>Selam</option>
                            <option value='erode'>Erode</option>
                            <option value='karur'>Karur</option>
                            <option value='trichy'>Trichy</option>
                        </Form.Select><br></br> */}
                        <Form.Control type="text" value={to} onChange={(e) => setTo(e.target.value)} />
                        <br></br>
                        <Button variant="primary" type="submit" className='admin-btn'>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
