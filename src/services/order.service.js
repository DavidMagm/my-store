const {models} = require('../database/database');
const boom = require('@hapi/boom');


class OrderService {
    constructor() {
        this.Order = [];
    }

    async create(data) {
        const newOrder = await models.Order.create(data)
        return newOrder
    }

    async find() {
        const response = await models.Order.findAll()
        return response
    }

    async findOne(id) {
        const order = await models.Order.findByPk(id, {
            include: ['customer', 'items']
        })
        if(!order) {
            throw boom.badRequest('no encontramos la orden')
        }
        return order
    }

    async addItems (data) {
        const newItems = await models.OrderProduct.create(data)
        return newItems
    }

    async update(id, change) {
        const order = await this.findOne(id)
        const response = await order.update(change)
        return response
    }

    async delete(id) {
        const order = await this.findOne(id)
        const response = await order.destroy()
        return response
    }
}

module.exports = OrderService ;