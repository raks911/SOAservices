const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    imageurl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        require: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
    },
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    vendorEmail: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const product = mongoose.model('product', productSchema)

module.exports = product;