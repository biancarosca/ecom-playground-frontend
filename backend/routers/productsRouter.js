const express = require("express");
const router = new express.Router();
const getProducts = require("../controllers/getProducts");
const addProduct = require("../controllers/addProduct");

router.get("/products",getProducts);
router.post("/products",addProduct);

module.exports = router;