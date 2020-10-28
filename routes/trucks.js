const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Truck = require('../models/Truck');

// Get truck list
router.get('/', (req, res) => 
  Truck.findAll({})
    .then(trucks => res.render('trucks', {
            trucks
        }))
    .catch(err => console.log(err)));
    

// Add a truck
router.get('/add', (req, res) => {
    const data = {
        name: "Queen Bees",
        type: 'icecream,desert',
        description: 'Locally made ice cream',
        contact_phone: '3612383827',
        location: "6th Street Austin, TX"

    }

    let { name, type, description, contact_phone, location} = data;

    // Insert into table
    Truck.create({
        name,
        type,
        description,
        contact_phone,
        location
    })
      .then(truck => res.redirect('/trucks'))
      .catch(err => console.log(err));
});

module.exports = router;