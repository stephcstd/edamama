const express = require("express");
const router = express.Router();
const Cart = require("../models/CartModel");
var asyncHandler = require("express-async-handler");
const axios = require("axios");
const Product = require("../models/ProductModel");

router.get(
	"/",
	asyncHandler(async (req, res, next) => {
		const cart = await Cart.find({});
		res.json(cart);
	})
);

router.post(
	"/",
	asyncHandler(async (req, res) => {
		const { data } = req.body;
		const product = await Product.findById(data.productId);
		const total = parseInt(product.price) * parseInt(data.qty);

		const addToCart = new Cart({
			name: product.name,
			image: product.image,
			price: product.price,
			quantity: data.qty,
			total: total,
		});

		const addedToCart = await addToCart.save();
		res.json(addedToCart);
	})
);

module.exports = router;
