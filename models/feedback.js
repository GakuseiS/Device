const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const feedback = sequelize.define('Feedback', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING({length: 50}),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING({length: 50}),
        allowNull: false
    },
    text: {
        type: Sequelize.STRING({length: 150}),
        allowNull: false
    }

})

module.exports = feedback 