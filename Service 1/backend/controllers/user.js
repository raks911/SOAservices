const User = require('../models/user')

async function handlePost(req, res) {
    const body = req.body;
    console.log(body);
    if (!body || !body.name || !body.email || !body.address || !body.phone || !body.password) {
        return res.status(400).json({msg:"all fields are required!"});
    }
    const result = await User.create({
        name: body.name,
        email: body.email,
        address: body.address,
        phone: body.phone,
        password: body.password,
    });
    console.log("msg", result);
    return res.status(201).json({msg:"success"});
}

async function handleGet(req, res) {
    const result = await User.find({});
    return res.status(201).json({msg:result});
}

module.exports = {
    handlePost,
    handleGet
}