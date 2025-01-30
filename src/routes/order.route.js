const express = require('express');
const router = express.Router();
const OrderService = require('../services/order.service');
const validateHandler = require('../middleware/validatorHandler');
const { createOrderSchema, getOrderSchema } = require('../schemas-joi/order.schema');
const service = new OrderService();

router.get('/',
    async (req, res) => {
        const users = await service.find()
        res.json(users)
});
  
router.post('/',
    validateHandler(createOrderSchema, 'body'),
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
    validateHandler(getOrderSchema, 'params'),
    async (req, res, next) => {
        try {
            const {id} = req.params;
            const users = await service.findOne(id)
            res.status(201).json(users)
        } catch(error) {
            console.log(error)
        }
});


module.exports = router;