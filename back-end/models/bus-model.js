const mongoose = require('mongoose');

const userbusSchema = new mongoose.Schema({
    busno: String,
    time: String,
    from: String,
    to: String
});

const expressSchema = new mongoose.Schema({
    busno: String,
    time: String,
    from: String,
    to: String
});

const setcSchema = new mongoose.Schema({
    busno: String,
    time: String,
    from: String,
    to: String
});

const Userbus = mongoose.model('Userbus', userbusSchema);
const Express = mongoose.model('Express', expressSchema);
const SETC = mongoose.model('SETC', setcSchema);

module.exports = { Userbus, Express, SETC };
