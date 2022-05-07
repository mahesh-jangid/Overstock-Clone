
const mongoose = require("mongoose");

const Cars = new mongoose.Schema({
    title : {type : String, required : true}
});

const Cars1 = mongoose.model("cars", Cars);

module.exports = Cars1;