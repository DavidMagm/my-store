const express = require('express');


const usersRoutes = require('./user.route.js');
const customersRoutes = require('./customer.route.js');
const productsRoutes = require('./product.route.js');
const categoriesRoutes = require('./category.route.js');

function routerApi(app) {
    const router = express.Router()
    app.use('/api', router)
    router.use('/users', usersRoutes)
    router.use('/customers', customersRoutes)
    router.use('/products', productsRoutes)
    router.use('/categories', categoriesRoutes)
}

module.exports = routerApi;