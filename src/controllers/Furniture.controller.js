
const express = require("express");

const router = express.Router();

const FurnitureData1 = require("../models/Furniture.models");

// router.get("", async (req,res) => {
//     try {
//         const DiningRoomData = await FurnitureData1.find().lean().exec();

//         return res.status(200).send({DiningRoomData : DiningRoomData});
//     }
//     catch (error) {
//         return res.status(400).send({message : error.message})
//     }
// })

router.get("", (req,res) => {
    
    FurnitureData1.find({categories : "Dining Room & Bar Furniture"})
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})

router.get("/Dining-Room-&-Bar-Furniture", (req,res) => {
    
    FurnitureData1.find({categories : "Dining Room & Bar Furniture"})
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})

router.get("/Dining-Room-&-Bar-Furniture/asending", (req,res) => {
    
    FurnitureData1.find({categories : "Dining Room & Bar Furniture"}).sort({price : 1}).limit(2)
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})


router.get("/Living-Room-Furniture", (req,res) => {
    
    FurnitureData1.find({categories : "Living Room Furniture"})
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})

router.get("/Living-Room-Furniture/asending", (req,res) => {
    
    FurnitureData1.find({categories : "Living Room Furniture"}).sort({price : 1})
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})

router.get("/Bedroom-Furniture", (req,res) => {
    
    FurnitureData1.find({categories : "Bedroom Furniture"})
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})

router.get("/Bedroom-Furniture/asending", (req,res) => {
    
    FurnitureData1.find({categories : "Bedroom Furniture"}).sort({price : 1})
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})

router.get("/Kitchen-Furniture", (req,res) => {
    
    FurnitureData1.find({categories : "Kitchen Furniture"})
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})

router.get("/Kitchen-Furniture/asending", (req,res) => {
    
    FurnitureData1.find({categories : "Kitchen Furniture"}).sort({price : 1})
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})

router.get("/desending", (req,res) => {
    
    FurnitureData1.find({}).sort({price : -1})
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
    
})

// router.post("", async(req,res) => {
//     try {
//         const DiningRoomData = await FurnitureData1.create(req.body);

//         DiningRoomData.save();

//         return res.status(201).send({ DiningRoomData : DiningRoomData });
//     }
//     catch (error) {
//         return res.status(500).send({ message : error.message });
//     }
// })

router.post("", (req,res) => {
    const FurnitureData = new FurnitureData1({
        image : req.body.image,
        image1 : req.body.image1,
        image2 : req.body.image2,
        image3 : req.body.image3,
        image4 : req.body.image4,
        price : req.body.price,
        rating : req.body.rating,
        title : req.body.title,
        size : req.body.size,
        materials : req.body.materials,
        star : req.body.star,
        sale : req.body.sale,
        quantity : req.body.quantity,
        categories : req.body.categories,
    });

    FurnitureData.save()
    .then(() => res.json("The new Article posted successfully!"))
    .catch(error => res.status(400).json(`Error : ${error}`));
})

// router.get("/:id", async(req,res) => {
//     try {
//         const DiningRoomData = await FurnitureData1.findById(req.params.id).lean().exec();

//         return res.status(200).send({ DiningRoomData : DiningRoomData });

//     }
//     catch (error) {
//         return res.status(500).send({ message : error.message });
//     }
// })


router.get("/:id", (req,res) => {
    FurnitureData1.findById(req.params.id)
    .then(data => res.json(data))
    .catch(error => res.status(400).json(`Error : ${error}`))
})


// router.put("/update/:id", async(req,res) => {
//     try {

//         const DiningRoomData = await FurnitureData1.findByIdAndUpdate(req.params.id, req.body, {new : true}).lean().exec();

//         return res.status(200).send({ DiningRoomData : DiningRoomData });

//     }
//     catch (error) {
//         return res.status(500).send({ message : error.message });
//     }

// })


router.put("/update/:id", (req,res) => {
    FurnitureData1.findById(req.params.id)
    .then((data) => {
        // data.title = req.body.title,
        // data.article = req.body.article,
        // data.authorname = req.body.authorname,
        data.image = req.body.image,
        data.image1 = req.body.image1,
        data.image2 = req.body.image2,
        data.image3 = req.body.image3,
        data.image4 = req.body.image4,
        data.price = req.body.price,
        data.rating = req.body.rating,
        data.title = req.body.title,
        data.size = req.body.size,
        data.materials = req.body.materials,
        data.star = req.body.star,
        data.sale = req.body.sale,
        data.quantity = req.body.quantity,
        data.categories = req.body.categories,

        data.save()
        .then(() => res.json("The Article is Updated successfuly!"))
        .catch(error => res.status(400).json(`Error : ${error}`))
    })
    .catch(error => res.status(400).json(`Error : ${error}`))
})


// router.delete("/:id", async(req,res) => {

//     try {
//         const DiningRoomData = await FurnitureData1.findByIdAndDelete(req.params.id).lean().exec();

//         return res.status(200).send({ DiningRoomData : DiningRoomData });
//     }
//     catch (error) {
//         return res.status(400).send({ message : error.message });
//     }
// })

router.delete("/:id", (req,res) => {
    FurnitureData1.findByIdAndDelete(req.params.id)
    .then(() => res.json("The article is deleted!"))
    .catch(error => res.status(400).json(`Error : ${error}`));
});

module.exports = router;