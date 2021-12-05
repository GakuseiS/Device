const Cart = require('../models/cart')

module.exports = {
    async getAllCarts() {
        const users = await Cart.findAll()
        return users
    }
}