const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Truck = require('../models/Truck');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get truck list
router.get('/', (req, res) => 
  Truck.findAll({})
    .then(trucks => res.render('trucks', {
            trucks
        }))
    .catch(err => console.log(err)));

// Display add truck form
router.get('/add', (req, res) => res.render('add'));   

// Add a truck
router.post('/add', (req, res) => {

    let { name, type, description, contact_phone, location} = req.body;
    let errors = [];


    // Validate Fields
    if(!name) {
      errors.push({ text: 'Please add a title' });
    }
    if(!type) {
        errors.push({ text: 'Please add at least one type' });
    }
    if(!description) {
      errors.push({ text: 'Please add a description' });
    }
    if(!contact_phone) {
        errors.push({ text: 'Please add a contact phone' });
    }

    // Check for errors
    if(errors.length > 0) {
      res.render('add', {
          errors,
          name,
          type,
          location,
          description,
          contact_phone
      });
    } else {
    if(!location) {
        location = 'Unknown';
    }

    // Make lowercase and remove space after comma
    type = type.toLowerCase().replace(/, /g, ',');

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
    }
});

// Search for trucks
router.get('/search', (req, res) => {
    let { term } = req.query;

    // Make lowercase
    term = term.toLowerCase();

    Truck.findAll({ where: { type: { [Op.like]: '%' + term + '%'} } })
      .then(trucks => res.render('trucks', { trucks }))
      .catch(err => console.log(err));
})

module.exports = router;