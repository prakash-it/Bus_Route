import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


export default function Filter() {
    const [from, setFrom] = useState('Starting point')
    const [to, setTo] = useState('Ending Point')
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

    const clearFunction=()=>{
        setFrom('Starting point')
        setTo('End point')
        setTable(false)
    }


    return (
        <div className='filterMainDiv'>
            <div className='filterDiv'>
                <form className='filterForm'>
                    <Row>
                        <Col>
                            <InputGroup.Text className='filterS1' variant="dark" id="inputGroup-sizing-sm">From :
                                <Form.Select value={from} onChange={(e) => setFrom(e.target.value)}>
                                    <option>Starting point</option>
                                    <option value='ukkadam'>Ukkadam</option>
                                    <option value='GH'>GH</option>
                                    <option value="RTO">RTO</option>
                                    <option value='gandhipuram'>Gandhipuram</option>
                                    <option value='singanallur'>Singanallur</option>
                                </Form.Select>
                            </InputGroup.Text>
                        </Col>
                        <Col>
                            <InputGroup.Text className='filterS1' id="inputGroup-sizing-sm">To :
                                <Form.Select value={to} onChange={getDetails}>
                                    <option>End Point</option>
                                    <option value='ukkadam'>Ukkadam</option>
                                    <option value='GH'>GH</option>
                                    <option value="RTO">RTO</option>
                                    <option value='gandhipuram'>Gandhipuram</option>
                                    <option value='singanallur'>Singanallur</option>
                                </Form.Select>
                            </InputGroup.Text>
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
                {table &&
                    <Table responsive striped bordered hover size='lg' variant='dark'>
                        <thead>
                            <tr>
                                <th>Bus.No</th>
                                <th>Time</th>
                                <th>Start</th>
                                <th>End</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterData.map((x) => (<tr key={x.busno}>
                                <td>{x.busno}</td>
                                <td>{x.time}</td>
                                <td>{x.from}</td>
                                <td>{x.to}</td>
                            </tr>))}
                        </tbody>
                    </Table>
                }
                {table&&<Button className='col-sm-2' variant="light" onClick={clearFunction}>
                    Clear
                </Button>}
            </div>
        </div>
    )
}


