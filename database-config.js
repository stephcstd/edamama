var mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {});
		console.log(`MONGO DB CONNECTED: ${conn.connection.host} `);
	} catch (error) {
		console.error(`error: ${error.message}`);
		process.exit(1);
	}
};

module.exports = connectDB;