import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Filters() {
    const [from, setFrom] = useState('Select your Starting point')
    const [to, setTo] = useState('Select your Ending Point')
    const [output, setOutput] = useState([])
    const [filterData, setFilteredData] = useState([])
    const [table, setTable] = useState(false)


    useEffect(() => {
        axios.get(`http://localhost:1516/admin`)
            .then(res => setOutput(res.data))
            .catch(err => console.log(err))
    }, [])

    const getDetails = (e) => {
        setTo(e.target.value)
        const filtered = output.filter(x => x.from === from && x.to === e.target.value)
        setFilteredData(filtered)
        setTable(true)
    }



    return (
        <div>
             <h1 className='bus-head'>Select the Location to travel</h1>
            <form className='filterForm'>
                <Row>
                    <Col>
                        <Form.Select value={from} onChange={(e) => setFrom(e.target.value)}>
                            <option>Select your Starting point</option>
                            <option value='ukkadam'>Ukkadam</option>
                            <option value='GH'>GH</option>
                            <option value="RTO">RTO</option>
                            <option value='gandhipuram'>Gandhipuram</option>
                            <option value='singanallur'>Singanallur</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select value={to} onChange={getDetails}>
                            <option>Select your Ending Point</option>
                            <option value='ukkadam'>Ukkadam</option>
                            <option value='GH'>GH</option>
                            <option value="RTO">RTO</option>
                            <option value='gandhipuram'>Gandhipuram</option>
                            <option value='singanallur'>Singanallur</option>
                        </Form.Select>
                    </Col>
                </Row>
            </form>

            {/* <label>From:</label>
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
        </select><br></br> */}
    

{table && filterData.length > 0 && (
    <table>
        <thead>
            <tr>
                <th>Bus.No</th>
                <th>Time</th>
                <th>Start</th>
                <th>End</th>
            </tr>
        </thead>
        <tbody>
            {filterData.sort((a, b) => a.time.localeCompare(b.time)).map((x) => (
                <tr key={x.busno}>
                    <td>{x.busno}</td>
                    <td>{x.time}</td>
                    <td>{x.from}</td>
                    <td>{x.to}</td>
                </tr>
            ))}
        </tbody>
    </table>
)}
        </div>
    )
}


