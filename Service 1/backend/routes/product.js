const express = require("express");
const { handleGet, handlePost, handleQuery } = require('../controllers/product')

const router = express.Router();

router.route("/").get(handleGet).post(handlePost) // get and post in same route

router.get("/search", handleQuery)

module.exports = router;