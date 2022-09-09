var products = require("./data/products.js");
var cart = require("./data/cart.js");
var Product = require("./models/ProductModel.js");
var connectDB = require("./database-config");
require("dotenv").config();
var mongoose = require("mongoose");
const Cart = require("./models/CartModel.js");

// connect to mongoDB
connectDB();

// to import product data
const importData = async () => {
	try {
		await Product.deleteMany();
		const sampleProducts = products.map((product) => {
			return { ...product };
		});
		await Product.insertMany(sampleProducts);
		console.log("Data Imported");
		process.exit(1);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

// to delete product data
const destroyData = async () => {
	try {
		await Product.deleteMany();
		console.log("Data Destroyed");
		process.exit(1);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

// to import cart data
const importCart = async () => {
	try {
		await Cart.deleteMany();
		const sampleCart = cart.map((item) => {
			return { ...item };
		});
		await Cart.insertMany(sampleCart);
		console.log("Cart Data Imported");
		process.exit(1);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

// to delete cart data
const destroyCart = async () => {
	try {
		await Cart.deleteMany();
		console.log("Data Destroyed");
		process.exit(1);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

/* function call */
//importData();
//destroyData()
//importCart();
//destroyCart();
