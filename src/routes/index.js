const express = require('express');


const usersRoutes = require('./user.route.js');
const customersRoutes = require('./customer.route.js');

function routerApi(app) {
    const router = express.Router()
    app.use('/api', router)
    router.use('/users', usersRoutes)
    router.use('/customers', customersRoutes)
}

module.exports = routerApi;