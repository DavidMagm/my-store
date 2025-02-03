const Joi = require('joi');

const id = Joi.number().integer(); 
const customerId = Joi.number().integer();
const amount = Joi.number().integer().min(1);
const orderId = Joi.number().integer();
const productId = Joi.number().integer();

const createOrderSchema = Joi.object({
    customerId: customerId.required()
});

const getOrderSchema = Joi.object({
    id: id.required()
});

const addItemsSchema = Joi.object({
    orderId: orderId.required(),
    productId: productId.required(),
    amount: amount.required()
});

module.exports = {  createOrderSchema, getOrderSchema, addItemsSchema };