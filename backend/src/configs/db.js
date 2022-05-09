
const mongoose = require("mongoose");

const Connectdb = () => {
    return mongoose.connect("mongodb+srv://rahulr41180:12345@cluster0.wne56.mongodb.net/Overstock_Project?retryWrites=true&w=majority")
}

module.exports = Connectdb;