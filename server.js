// importing modules
var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var connectDB = require("./database-config");

// routes import
const ProductsRoute = require("./routes/ProductsRoute.js");
const CartRoute = require("./routes/CartRoute.js");

var app = express();

// port number
const PORT = 3000;

// adding middleware - cors
app.use(cors());

// body - parser
app.use(bodyparser.json());

// connect to mongoDB
connectDB();

// api routes
app.use("/api/products", ProductsRoute);
app.use("/api/cart", CartRoute);

app.listen(PORT, () => {
	console.log("SERVER IS READY at PORT:", PORT);
});

app.get("/", (req, res) => {
	res.send("this is a response");
});
