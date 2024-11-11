const mongoose = require("mongoose")

const testUserSchema = new mongoose.Schema({
    testName: {
        type: String,
        required: true,
    },
    testEmail: {
        type: String,
        required: true,
        unique: true,
    },
}, {timestamps: true})

const testUser = mongoose.model('testUser', testUserSchema)

module.exports = testUser;