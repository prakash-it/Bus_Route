import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Filter() {
    const[from,setFrom]=useState('ukkadam')
    const[to,setTo]=useState('ukkadam')
    const[output,setOutput]=useState([])
    const[filterData,setFilteredData]=useState([])
    const[table,setTable]=useState(false)

       
        useEffect(()=>{
            axios.get(`http://localhost:3005/BusDetails`)
            .then(res=>setOutput(res.data))
            .catch(err=>console.log(err))
        },[])
        
        const getDetails=(e)=>{
            setTo(e.target.value)
            const filtered=output.filter(x=>x.start === from && x.end === e.target.value)
            setFilteredData(filtered)
            setTable(true)
        }

    
        
  return (
    <div>
        <label>From:</label>
        <select value={from} onChange={(e)=>setFrom(e.target.value)}>
            <option value='ukkadam'>Ukkadam</option>
            <option value="GH">GH</option>
            <option value={'RTO'}>RTO</option>
            <option value='gandhipuram'>Gandhipuram</option>
        </select>
        <label>To:</label>
        <select value={to} onChange={getDetails}>
            <option value='ukkadam'>Ukkadam</option>
            <option value={'GH'}>GH</option>
            <option value={"RTO"}>RTO</option>
            <option value='gandhipuram'>Gandhipuram</option>
        </select><br></br>
        {table&&
        <table>
            <thead>
                <tr>
                    <th>Bus.No</th>
                    <th>Start</th>
                    <th>End</th>
                </tr>
            </thead>
            <tbody>
                {filterData.map((x)=>(<tr key={x.busno}>
                    <td>{x.busno}</td> 
                    <td>{x.start}</td> 
                    <td>{x.end}</td>
                    </tr>))}
            </tbody>
        </table>
}
    </div>
  )
}


