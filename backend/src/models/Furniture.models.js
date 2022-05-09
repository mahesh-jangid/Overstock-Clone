
const mongoose = require("mongoose");

const FurnitureData = new mongoose.Schema({

    image : {type : String, require : true},
    image1 : {type : String, require : false},
    image2 : {type : String, require : false},
    image3 : {type : String, require : false},
    image4 : {type : String, require : false},
    price : {type : Number, required : true},
    rating : {type : Number, required : true},
    title : {type : String, required : true},
    size : {type : Number, require : true},
    materials : {type : String, required : true},
    star : {type : Number, required : true},
    sale : {type : String, required : true},
    quantity : {type : Number, required : true},
    categories : {type : String, required : true}

});

const FurnitureData1 = mongoose.model("furniture", FurnitureData);

module.exports = FurnitureData1;