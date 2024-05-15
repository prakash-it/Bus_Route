// const express = require('express')
// const router=express.Router()
// const bodyparser = require('body-parser')

// const UserModel = require('../models/User-model')

// router.use(bodyparser.json())

// router.get('/',(req,res)=>{
//     res.send("users-page")
// })

// router.get('/get/:email',(req,res)=>{
//     console.log(res.params.email);
//     UserModel.find({email:req.params.email})
//     .then(response=>res.send(response))
//     .catch(err=>console.log(err))
// })

// router.post('/post',(req,res)=>{
// const newUsers = new UserModel(req.body)
// newUsers.save()
// .then(response=>console.log(response))
// .catch(err=>console.log(err))
// res.send("User post page")
// })

// router.put('/update/:id',(req,res)=>{
//     Employeemodul.findByIdAndUpdate(req.params.id,req.body)
//     .then(response=>res.send(response))
//       .catch(err=>console.log(err))
//       res.send("page was update")
//   })
  
//   router.delete('/delete/:id',(req,res)=>{
//       Employeemodul.findByIdAndDelete(req.params.id)
//       .then(response=>console.log(response))
//       .catch(err=>console.log(err))
//       res.send("page was delete")
//   })

//   module.exports=router