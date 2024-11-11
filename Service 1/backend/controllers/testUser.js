const testUser = require('../models/testUser')

async function handleAddTestUser(req, res) {
    const body = req.body;
    console.log(body);
    if (!body || !body.testName || !body.testEmail) {
        return res.status(400).json({msg:"all fields are required!"});
    }
    const result = await testUser.create({
        testName: body.testName,
        testEmail: body.testEmail,
    });
    console.log("msg", result);
    return res.status(201).json({msg:"success"});
}

async function handleGetTestUser(req, res) {
    const result = await testUser.find({});
    return res.status(201).json({msg:result});
}

module.exports = {
    handleAddTestUser,
    handleGetTestUser
}