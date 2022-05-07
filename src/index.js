
const express = require("express");

require("dotenv").config();

const app = express();

const cors = require("cors");

app.use(express.json());

app.use(cors());

const FurnitureController = require("./controllers/Furniture.controller");
const FurnitureCartsController = require("./controllers/Furniture.Carts.controller");
const CartsController = require("./controllers/Carts.controller");

const middleware = (req,res,next) => {
    console.log("match")
    next();
}

// app.use("/diningroom", FurnitureController);
app.use("/Furniture", FurnitureController);
app.use("/Furniturecart", FurnitureCartsController);
app.use("/cart", CartsController);

module.exports = app;