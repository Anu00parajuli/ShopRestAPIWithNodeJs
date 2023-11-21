const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json ({
        message : 'Fetched the orders successfully'
    });
})

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quality: req.body.quality
    }

    res.status(200).json({
        message : 'Posted the orders successfully' ,
        order: order

    });
})

router.get('/:id', (req, res, next) =>{
    const id = req.params.id;
    if( id === 'special'){
        res.status(200).json(
            {
                message : "Fetched special order specially"
            }
        );
    } else{
        res.status(404).json({
            message: "Please mention the ordername."
        });
    }
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    if(id === 'special'){
        res.status(200).json({
            message: "Deleted the special order successfully"
        }
        )
    } else{
        res.status(404).json({
            message: "Please mention the ordername."
        })
    }
})


module.exports = router;