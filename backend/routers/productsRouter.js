const express = require("express");
const router = new express.Router();
const getProducts = require("../controllers/getProducts");

router.get("/products",getProducts);

module.exports = router;