const express = require('express')
const User= require('./routes/ConstUser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/Bus-Route')

mongoose.connection.on('connected',()=>{
    console.log("Data-Base is connected")
})
app.get('/',(req,res)=>{
    res.send("Back-server")
})
app.use('/users',User)
app.listen(4000,()=>{
    console.log("Server is running");
})