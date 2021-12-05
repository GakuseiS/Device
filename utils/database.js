const Sequelize = require('sequelize')

const DB_NAME = 'device'
const USER_NAME = 'root'
const PASSWORD = ''

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mariadb'
})

module.exports = sequelize 