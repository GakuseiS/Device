const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const cart = sequelize.define('Cart', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    img: {
        type: Sequelize.STRING({length: 50}),
        allowNull: false
    },
    title: {
        type: Sequelize.STRING({length: 50}),
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = cart 