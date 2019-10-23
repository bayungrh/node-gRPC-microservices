const mongoose = require('./mongoose')

const Product = mongoose.model('Product', {
    name: String,
    qty: Number,
    price: Number
})

module.exports = Product