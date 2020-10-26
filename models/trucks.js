// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");


var Trucks = sequelize.define("truck", {

  routeName: Sequelize.STRING,

  name: Sequelize.STRING,

  type: Sequelize.STRING,

  location: Sequelize.STRING,
  
  rating: Sequelize.INTEGER
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

// Syncs with DB
Trucks.sync();

module.exports = Trucks;