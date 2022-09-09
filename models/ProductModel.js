var mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
	{
		name: {
            type: String, 
            required: true, 
            unique: false 
        },
        /* seller: { 
            type: mongoose.Schema.Types.ObjectID, 
            ref: 'User' 
        }, */
        image: { 
            type: String, 
            required: true 
        },
        brand: { 
            type: String, 
            required: true 
        },
        category: { 
            type: String, 
            required: true 
        },
        description: { 
            type: String, 
            required: true 
        },
        price: { 
            type: Number, 
            required: true 
        },
        countInStock: { 
            type: Number, 
            required: true 
        },
        rating: { 
            type: Number, 
            required: true 
        },
        numReview: { 
            type: Number, 
            required: true 
        },
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model("Product", ProductSchema);

// export default Product
module.exports = Product;
