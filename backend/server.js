
const express = require("express");

require("dotenv").config();

const path = require("path");

const app = express();

const cors = require("cors");

app.use(express.json());

app.use(cors());

const Port = process.env.PORT || 5000;
const Connectdb = require("./src/configs/db");

const FurnitureController = require("./src/controllers/Furniture.controller");
const FurnitureCartsController = require("./src/controllers/Furniture.Carts.controller");
const CartsController = require("./src/controllers/Carts.controller");

const middleware = (req,res,next) => {
    console.log("match")
    next();
}

// app.use("/diningroom", FurnitureController);
app.use("/Furniture", FurnitureController);
app.use("/Furniturecart", FurnitureCartsController);
app.use("/cart", CartsController);



// app.get("/", async (req,res) => {
//     try {
//         res.send("Home Page")
//     }
//     catch(error) {
//         res.send(error)
//     }
// })

// if(process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"))
//     app.get("*", (req,res) => {
//         res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));    
//     })
// }

// app.get("*", (req, res) => {
//     let url = path.join(__dirname, './client/build', 'index.html');
//     if (!url.startsWith('/app/')) // since we're on local windows
//       url = url.substring(1);
//     res.sendFile(url);
// });

app.listen(Port, () => {
    try {
        Connectdb();
        console.log("listening on port 5000");
    }
    catch(error) {
        console.log("error :", error);
    }
});

module.exports = app;