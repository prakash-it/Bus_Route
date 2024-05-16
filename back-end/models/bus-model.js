const mondoose = require('mongoose')

const userbus = new mondoose.Schema({

    busno:String,
    time:String,
    from:String,
    to:String
})

const Userbus = mondoose.model('userbus', userbus)

module.exports=Userbus