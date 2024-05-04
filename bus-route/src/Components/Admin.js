import axios from 'axios'
import React from 'react'
import {useState} from 'react'


export default function Admin() {

    const[busno, setNumber]=useState('')
    const[time, setTime]=useState('')
    const[from, setFrom]=useState('select')
    const[to, setTo]=useState('select')


    // const storeData=(e)=>{
    //     e.preventDefault()
    //     axios.post('http://localhost:3006/busDetails', {number, time, from, to})

    const storeData=()=>{
        // e.preventDefault()
        axios.post('http://localhost:1516/admin', {busno, time, from, to})

        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={storeData}>
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
            </form>
        </div>
    )
}

