const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Truck = require('../models/Truck');

router.get('/', (req, res) => 
  Truck.findAll()
    .then(trucks => {
        console.log(trucks);
        res.sendStatus(200);
    })
    .catch(err => console.log(err)));

module.exports = router;