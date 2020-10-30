const Sequelize = require('sequelize');
const db = require ('../config/database');
//

const Truck = db.define('truck', {
    name: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    contact_phone: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.STRING
    }
});

module.exports = Truck;