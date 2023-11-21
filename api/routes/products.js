const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
   
    res.status(200).json({
        message : "Handling GET requests in products/"
        
    })
});

router.post('/', (req, res, next)=>{
    const product = {
        name: req.body.name,
        price: req.body.price

    }
    res.status(200).json({
        message : "Handling POST requests in products/",
        createdProduct: product
    })
});

router.get('/:productID', (req, res, next)=>{
    const id = req.params.productID;
    if (id === "special"){
    res.status(200).json({
        message : "You discovered the special id.",
        id: id
    })
} else{
    res.status(200).json({
        message: "You passed an special id"
    })
}
});

router.patch('/:productID', (req, res, next)=>{
    res.status(200).json({
        message: "Updated the product"
    })
});

router.delete('/:productID', (req,res, next)=>{
    res.status(200).json({
        message: "Deleted the product"
    })
});

module.exports= router;