const express = require("express");
const { handleAddTestUser, handleGetTestUser } = require('../controllers/testUser')

const router = express.Router();

/*
router.route("/").get(handleGet).post(handlePost) // get and post in same route
*/

router.post("/add", handleAddTestUser)
router.get("/retrieve", handleGetTestUser)

module.exports = router;