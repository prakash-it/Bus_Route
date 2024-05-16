const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const UserModels = require('../models/bus-model');

router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send("bus-pages");
});

router.get('/get', (req, res) => {
   
    UserModels.find({})
        .then(users => {res.json(users);})
        .catch(err => {
            
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

router.post('/post', (req, res) => {
    const newBus = new UserModels(req.body);
    newBus.save()
        .then(responses => console.log(responses))
        .catch(err => console.log(err));
    res.send("Bus data post");
});

router.get('/get/:from/:to', (req, res) => {
    const { from, to } = req.params;
    UserModels.find({ from, to })
        .then(response => {
            res.send(response); 
            console.log("Bus Data is get");
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Internal Server Error"); 
        });
});


router.put('/update/:id', (req, res) => {
    UserModels.findByIdAndUpdate(req.params.id, req.body)
        .then(response => res.send(response))
        .catch(err => console.log(err));
    res.send("page was update");
});

router.delete('/delete/:id', (req, res) => {
    UserModels.findByIdAndDelete(req.params.id)
        .then(response => console.log(response))
        .catch(err => console.log(err));
    res.send("page was delete");
});

module.exports = router;
