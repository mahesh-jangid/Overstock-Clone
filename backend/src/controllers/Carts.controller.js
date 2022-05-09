
const express = require("express");

const router = express.Router();

const Cart1 = require("../models/Carts.model");
// const Cars1 = require("../models/Cars.model")


// router.get("", async (req, res) => {
//     const Carts = await Cart1.find().populate("furnitureId").populate("carsId").lean().exec();
//     // console.log('Carts:', Carts)
//     return res.send({Carts : Carts});
// })

router.get("/tolivingpage", (req,res) => {
    
    Cart1.find()
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})

router.get("/tobedroompage", (req,res) => {
    
    Cart1.find()
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})

router.get("/tokitchenpage", (req,res) => {
    
    Cart1.find()
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})

router.get("/tocart", (req,res) => {
    
    Cart1.find().populate("furnitureId")
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})

router.get("/tonavbar", (req,res) => {
    
    Cart1.find().populate("furnitureId")
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})

router.post("", async (req, res) => {
  try {
    console.log("Post")
    const FurnitureCartData = await Cart1.create(req.body);
    return res.send(FurnitureCartData);
  } 
  catch(error) {
    return res.send(error.message);
  }
});

router.patch("/:id", async (req, res) => 
{
    try 
    {
      const Cart = await Cart1.findByIdAndUpdate(req.params.id, req.body).lean().exec();
      return res.send(Cart);
    } 
    catch (err) 
    {
      return res.send(err.message);
    }
});

router.delete("/:id", (req,res) => {
    Cart1.findByIdAndDelete(req.params.id)
    .then(() => res.json("The article is deleted!"))
    .catch(error => res.status(400).json(`Error : ${error}`));
});

module.exports = router;