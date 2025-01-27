const {models} = require('../database/database');
const boom = require('@hapi/boom');


class CategoryService {
    constructor() {
        this.categories = [];
    }

    async create(data) {
        const newCategory = await models.Category.create(data)
        return newCategory
    }

    async find() {
        const response = await models.Category.findAll({
            include: ['products']
        })
        return response
    }

    async findOne(id) {
        const category = await models.Category.findByPk(id)
        if(!category) {
            throw boom.badRequest('no encontramos la categoria')
        }
        return category
    }

    async update(id, change) {
        const category = await this.findOne(id)
        const response = await category.update(change)
        return response
    }

    async delete(id) {
        const category = await this.findOne(id)
        const response = await category.destroy()
        return response
    }
}

module.exports = CategoryService;