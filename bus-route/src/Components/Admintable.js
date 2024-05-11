import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default function AdminTable() {
    const [admin, setAdmin] = useState([]);
    const [popup, setPopup] = useState(false);
    const [id, setId] = useState();
    const [busno, setBusno] = useState();
    const [time, setTime] = useState();
    const [from, setFrom] = useState();
    const [to, setTo] = useState();

    useEffect(() => {
        fetchAdminData();
    }, []);

    const fetchAdminData = () => {
        axios.get('http://localhost:1516/admin')
            .then(response => {
                setAdmin(response.data);
            })
            .catch(error => {
                console.log('Error fetching admin data:', error);
            });
    };

    const openPopup = (data) => {
        setPopup(true);
        setId(data.id);
        setBusno(data.busno);
        setTime(data.time);
        setFrom(data.from);
        setTo(data.to);
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:1516/admin/${id}`, {
            busno: busno,
            time: time,
            from: from,
            to: to
        })
        .then(res => {
            console.log(res.data);
            fetchAdminData(); // Refresh admin data after update
            setPopup(false); // Close popup after update
        })
        .catch(error => {
            console.log('Error updating admin data:', error);
        });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:1516/admin/${id}`)
            .then(response => {
                fetchAdminData(); // Refresh admin data after deletion
            })
            .catch(error => {
                console.log('Error deleting admin data:', error);
            });
    };

    return (
        <div className='adminTableMainDiv'>
            <div className='adminTableDiv'>
            <h1>Admin Table Page</h1>
            <Table variant='dark'>
                <thead>
                    <tr>
                        {/* <th>Id</th> */}
                        <th>Bus No</th>
                        <th>Timing</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {admin.map(adminData => (
                        <tr key={adminData.id}>
                            {/* <td>{adminData.id}</td> */}
                            <td>{adminData.busno}</td>
                            <td>{adminData.time}</td>
                            <td>{adminData.from}</td>
                            <td>{adminData.to}</td>
                            <td>
                            <div className='adminTableBtn'>
                                <Button variant="success" onClick={() => openPopup(adminData)}>Update</Button>
                                <Button variant="danger" onClick={() => handleDelete(adminData.id)}>Delete</Button>
                            </div>
                                {/* <button onClick={() => openPopup(adminData)}>Update</button>
                                <button onClick={() => handleDelete(adminData.id)}>Delete</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </div>

            {/* Update Popup */}
            {popup &&
                <div>
                    <div className='adminTableUpdate'>
                        <Form variant='dark'>
                        <h2>Update Admin Data</h2>
                        <Form.Label>Bus No:</Form.Label>
                        <Form.Control type="text" value={busno} onChange={(e) => setBusno(e.target.value)}/>
                        <Form.Label>Timing:</Form.Label>
                        <Form.Control type="text" value={time} onChange={(e) => setTime(e.target.value)}/>
                        <Form.Label>From:</Form.Label>
                        <Form.Control type="text" value={from} onChange={(e) => setFrom(e.target.value)}/>
                        <Form.Label>To:</Form.Label>
                        <Form.Control type="text" value={to} onChange={(e) => setTo(e.target.value)}/>
                        <div className='adminFormBtn'>
                        <Button variant="warning" onClick={handleUpdate}>Update</Button>
                        <Button variant="danger" onClick={() => setPopup(false)}>Cancel</Button>
                        </div>
                        

                        {/* <h2>Update Admin Data</h2>
                        <label>Bus No:</label>
                        <input type="text" value={busno} onChange={(e) => setBusno(e.target.value)} />
                        <label>Timing:</label>
                        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
                        <label>From:</label>
                        <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
                        <label>To:</label>
                        <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
                        <button onClick={handleUpdate}>Update</button>
                        <button onClick={() => setPopup(false)}>Cancel</button> */}
                        </Form>
                    </div>
                </div>
            }
        </div>
    );
}
