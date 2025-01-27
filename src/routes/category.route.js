const express = require('express');
const router = express.Router();
const CategoryService = require('../services/category.service');
const validateHandler = require('../middleware/validatorHandler');
const { createCategorySchema, getCategorySchema, updateCategorySchema } = require('../schemas-joi/category.schema');
const service = new CategoryService();

router.get('/',
    async (req, res) => {
        const users = await service.find()
        res.json(users)
});
  
router.post('/',
    validateHandler(createCategorySchema, 'body'),
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
    validateHandler(getCategorySchema, 'params'),
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
    validateHandler(getCategorySchema, 'params'),
    validateHandler(updateCategorySchema, 'body'),
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