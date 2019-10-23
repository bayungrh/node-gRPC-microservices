const Product = require('./models/Product')
module.exports = (grpc) => {
    return {
        list: async (_, callback) => {
            var data = await Product.find({})
            callback(null, {products: data})
        },
        get: async (call, callback) => {
            var data = await Product.findById(call.request.id)
            if (data) {
                callback(null, data)
            } else {
                callback({
                    code: grpc.status.NOT_FOUND,
                    details: "Not found"
                })
            }
        },
        insert: async (call, callback) => {
            let request = call.request
            const product = new Product()
            product.name = request.name
            product.qty = request.qty
            product.price = request.price
            var data = await product.save()
            callback(null, data)
        },
        update: (call, callback) => {
            Product.updateOne({
                '_id': call.request.id
            }, {
                name: call.request.name,
                qty: call.request.qty,
                price: call.request.price,
            }).then(data => {
                callback(null, data)
            }).catch(err => {
                callback({
                    code: grpc.status.NOT_FOUND,
                    details: "Not found"
                })
            })
        },
        delete: (call, callback) => {
            Product.deleteOne({
                '_id': call.request.id
            }).then(data => {
                callback(null, true)
            }).catch(err => {
                callback({
                    code: grpc.status.NOT_FOUND,
                    details: "Not found"
                })
            })
        }
    }
}