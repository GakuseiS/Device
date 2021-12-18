const Cart = require('../models/cart')
const Feedback = require('../models/feedback')

module.exports = {
    async getAllCarts() {
        const users = await Cart.findAll()
        return users
    },
    async createFeedback({input}) {
        const fb = await Feedback.create({name: input.name, email: input.email, text: input.text})
        return {id: fb.dataValues.id, ...input}
    }
}