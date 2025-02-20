const express = require('express');
const router = express.Router();
const ProductService = require('../services/product.service');
const validateHandler = require('../middleware/validatorHandler');
const { createProductSchema, getProductSchema, updateProductSchema, queryProducts } = require('../schemas-joi/product.schema');
const service = new ProductService();

router.get('/',
    validateHandler(queryProducts, 'query'),
    async (req, res) => {
        const users = await service.find(req.query)
        res.json(users)
});
  
router.post('/',
    validateHandler(createProductSchema, 'body'),
    async (req, res, next) => {
        try {
        const user = req.body
        const users = await service.create(user)
        res.status(201).json(users)
        } catch(error) {
        console.log(error)
    }
});
  
router.get('/:id',
    validateHandler(getProductSchema, 'params'),
    async (req, res, next) => {
        try {
            const {id} = req.params;
            const users = await service.findOne(id)
            res.status(201).json(users)
        } catch(error) {
            console.log(error)
        }
});

router.patch('/:id',
    validateHandler(getProductSchema, 'params'),
    validateHandler(updateProductSchema, 'body'),
    async (req, res) => {
        try {
            const {id} = req.params;
            const user = req.body;
            const users = await service.update(id, user)
            res.json(users)
        } catch(error) {
            console.log(error)
        }
});

module.exports = router;