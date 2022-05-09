
const express = require("express");

const router = express.Router();

const Cart1 = require("../models/Carts.model");


router.get("/Cart", (req,res) => {
  console.log("get");
    Cart1.find()
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})

router.get("", async (req,res) => {
  console.log("Hello");
    const Carts = await Cart1.find().lean().exec();
    return res.send(Carts);
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

// router.post("", (req,res) => {
//     const CartData = new Cart1({
//         image : req.body.image,
//         image1 : req.body.image1,
//         image2 : req.body.image2,
//         image3 : req.body.image3,
//         image4 : req.body.image4,
//         price : req.body.price,
//         rating : req.body.rating,
//         title : req.body.title,
//         size : req.body.size,
//         materials : req.body.materials,
//         star : req.body.star,
//         sale : req.body.sale,
//         quantity : req.body.quantity,
//     });
//     CartData.save()
//     .then(() => res.json("The new Article posted successfully!"))
//     .catch(error => res.status(400).json(`Error : ${error}`));
// })

router.get("/:id", (req,res) => {

    Cart1.findById(req.params.id)
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
})

router.patch("/:id", async (req, res) => {
    try {
      const Cart = await Cart1.findByIdAndUpdate(req.params.id, req.body).lean().exec();
      return res.send(Cart);
    } 
    catch (err) {
      return res.send(err.message);
    }
});

// router.put("/update/:id", (req,res) => {
//     Cart1.findById(req.params.id)
//     .then((data) => {
//         // data.title = req.body.title,
//         // data.article = req.body.article,
//         // data.authorname = req.body.authorname,
//         data.image = req.body.image,
//         data.image1 = req.body.image1,
//         data.image2 = req.body.image2,
//         data.image3 = req.body.image3,
//         data.image4 = req.body.image4,
//         data.price = req.body.price,
//         data.rating = req.body.rating,
//         data.title = req.body.title,
//         data.size = req.body.size,
//         data.materials = req.body.materials,
//         data.star = req.body.star,
//         data.sale = req.body.sale,
//         data.quantity = req.body.quantity,

//         data.save()
//         .then(() => res.json("The Article is Updated successfuly!"))
//         .catch(error => res.status(400).json(`Error : ${error}`))
//     })
//     .catch(error => res.status(400).json(`Error : ${error}`))
// })



router.delete("/:id", (req,res) => {
    Cart1.findByIdAndDelete(req.params.id)
    .then(() => res.json("The article is deleted!"))
    .catch(error => res.status(400).json(`Error : ${error}`));
});

module.exports = router;