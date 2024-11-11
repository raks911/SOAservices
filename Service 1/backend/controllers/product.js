const Product = require('../models/product')

async function handlePost(req, res) {
    const body = req.body;
    console.log(body);
    if (!body || !body.name || !body.desc || !body.imageurl || !body.price || !body.stock || !body.discount || !body.vendor) {
        return res.status(400).json({msg:"all fields are required!"});
    }
    const result = await Product.create({
        name: body.name,
        desc: body.desc,
        imageurl: body.imageurl,
        price: body.price,
        stock: body.stock,
        discount: body.discount,
        vendor: body.vendor,
    });
    console.log("msg", result);
    return res.status(201).json({msg:"success"});
}

async function handleGet(req, res) {
    const result = await Product.find({});
    return res.status(201).json({msg:result});
}

async function handleQuery(req, res) {
    const {name, _id} = req.query;
    const result = await Product.find({"name": name});
    res.status(201).json({msg:result});
}

module.exports = {
    handlePost,
    handleGet,
    handleQuery,
}