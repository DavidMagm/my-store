const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const price = Joi.number().min(0);
const description = Joi.string().min(3).max(255);
const image = Joi.string().uri();
const categoryId = Joi.number().integer();
const limit = Joi.number().integer()
const offset = Joi.number().integer()
const price_min = Joi.number().integer()
const price_max = Joi.number().integer()

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
    image: image.required(),
    categoryId: categoryId.required()
});

const getProductSchema = Joi.object({
    id: id.required()
});

const updateProductSchema = Joi.object({
    name,
    price,
    description,
    image,
    categoryId
});

const queryProducts = Joi.object({
    limit,
    offset,
    price,
    price_min,
    price_max: price_max.when('price_min', {
        is: Joi.number().required(),
        then: Joi.required()
    })
})

module.exports = {
    createProductSchema,
    getProductSchema,
    updateProductSchema,
    queryProducts
};