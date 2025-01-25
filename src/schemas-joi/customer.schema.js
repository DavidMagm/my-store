const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(20);
const lastName = Joi.string().min(20);
const phone = Joi.string().min(10);

const createCustomer = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone: phone.required()
});

const updateCustomer = Joi.object({
    name: name,
    lastName: lastName,
    phone: phone
});

const getCustumer = Joi.object({
    id: id.required()
});

module.exports = {createCustomer, updateCustomer, getCustumer};