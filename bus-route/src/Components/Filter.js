import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Filter() {
    const[from,setFrom]=useState('select')
    const[to,setTo]=useState('select')
    const[output,setOutput]=useState([])
    const[isPopup, setIspopup]= useState(false)

       
        useEffect(()=>{
            axios.get(`http://localhost:3005/BusDetails`)
            .then(res=>setOutput(res.data))
            .catch(err=>console.log(err))
        },[])
        const getDetails=(e)=>{
            setTo(e.target.value)
            const dataFiles = output.find(x=>x.start===from)

            if(dataFiles){
                if(dataFiles.end===to){
                    
                }
            }
        }

    
        
  return (
    <div>
        <label>From:</label>
        <select onChange={(e)=>setFrom(e.target.value)}>
            <option value='ukkadam'>Ukkadam</option>
            <option>GH</option>
            <option>RTO</option>
            <option>Gandhipuram</option>
        </select>
        <label>To:</label>
        <select onChange={getDetails}>
            <option value='ukkadam'>Ukkadam</option>
            <option>GH</option>
            <option>RTO</option>
            <option value='gandhipuram'>Gandhipuram</option>
        </select><br></br>
        <label>Bus Details:</label>
        <table>
            <thead>
                <tr>
                    <th>Bus.No</th>
                    <th>Start</th>
                    <th>End</th>
                </tr>
            </thead>
            <tbody>
                {isPopup&& output.map((x)=>(<tr key={x.busno}>
                    <td>{x.busno}</td> 
                    <td>{x.start}</td> 
                    <td>{x.end}</td>
                    </tr>))}
            </tbody>
        </table>
    </div>
  )
}
