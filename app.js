const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./graphql/schema')
const resolver = require('./graphql/resolver')
const sequelize = require('./utils/database')

const PORT = 5000


const app = express()

app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema, rootValue: resolver, graphiql: true
}))

async function start() {
    try {
        await sequelize.sync() //force: true - перезаписывает все значения из модели
        app.listen(PORT)
    } catch (e) {
        console.log(e)
    }
}

start()
