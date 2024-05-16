const mondoose = require('mongoose')

const userSchema = new mondoose.Schema({
    username:String,
    email:String,
    password:String
})

// const userbus = new mondoose.Schema({
//     busno:String,
//     time:Number,
//     from:String,
//     to:String

// })

const UserModel= mondoose.model('userData',userSchema)
// const Userbus = mondoose.model('userbus', userbus)
module.exports=UserModel
