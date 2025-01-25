const {Sequelize} = require('sequelize');
const setupModels = require('../../models');

const sequelize = new Sequelize('my_store', 'samuel', 'root', {
    host: 'localhost',
    dialect: 'postgres'
});

setupModels(sequelize);


module.exports = sequelize;