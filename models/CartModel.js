var mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
		default: 0,
	},
	quantity: {
		type: Number,
		required: true,
		default: 1,
	},
	total: { 
		type: Number, 
		required: true, 
		default: 0 
	},
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
