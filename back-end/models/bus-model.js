const mongoose = require('mongoose');

const userbusSchema = new mongoose.Schema({
    busno: String,
    time: String,
    from: String,
    to: String
});



const Userbus = mongoose.model('Userbus', userbusSchema);


module.exports = Userbus
