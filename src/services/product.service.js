const { where } = require('sequelize');
const {Op} = require('sequelize');
const {models} = require('../database/database');
const boom = require('@hapi/boom');


class ProductService {
    constructor() {
        this.Products = [];
    }

    async create(data) {
        const newProduct = await models.Product.create(data)
        return newProduct
    }

    async find(query) {
        const options = {
            include: ['category'],
            where: {}
        }
        const {limit, offset, price, price_min, price_max} = query
        if(limit && offset) {
            options.limit = limit
            options.offset = offset
        }
        if(price) {
            options.where = {price}
        }
        if(price_min && price_max) {
            options.where.price = {
                [Op.between]: [price_min, price_max]
            }
        }
        const response = await models.Product.findAll(options)
        return response
    }

    async findOne(id) {
        const product = await models.Product.findByPk(id, {
            include: ['category']
        })
        if(!product) {
            throw boom.badRequest('no encontramos el producto')
        }
        return product
    }

    async update(id, change) {
        const product = await this.findOne(id)
        const response = await product.update(change)
        return response
    }

    async delete(id) {
        const product = await this.findOne(id)
        const response = await product.destroy()
        return response
    }
}

module.exports = ProductService;