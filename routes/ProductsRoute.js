const express = require("express");
const router = express.Router();
const Product = require("../models/ProductModel");
var asyncHandler = require("express-async-handler");

router.get(
	"/",
	asyncHandler(async (req, res, next) => {
		const products = await Product.find({});
		res.json(products);
	})
);

module.exports = router;
