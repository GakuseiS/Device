const {buildSchema} = require('graphql')

module.exports = buildSchema(`
    type Cart {
        id: Int!
        img: String!
        title: String!
        price: Int!
    }

    input FeedbackInput {
        name: String!
        email: String!
        text: String!
    }

    type Feedback {
        id: ID!
        name: String!
        email: String!
        text: String!
    }

    type Query {
        getAllCarts: [Cart]
    }

    type Mutation {
        createFeedback(input: FeedbackInput): Feedback
    }
`)