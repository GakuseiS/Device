const {buildSchema} = require('graphql')

module.exports = buildSchema(`
    type Cart {
        id: Int!
        img: String!
        title: String!
        price: Int!
    }

    type Query {
        getAllCarts: [Cart]
    }
`)