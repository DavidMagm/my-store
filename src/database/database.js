const {Sequelize} = require('sequelize');
const setupModels = require('../../models');
const {config} = require('../../config');

const sequelize = new Sequelize(config.dbUrl, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
});

setupModels(sequelize);


module.exports = sequelize;