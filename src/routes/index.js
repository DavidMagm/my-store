const express = require('express');


const usersRoutes = require('./user.route.js');

function routerApi(app) {
    const router = express.Router()
    app.use('/shoppi', router)
    router.use('/users', usersRoutes)
}

module.exports = routerApi;