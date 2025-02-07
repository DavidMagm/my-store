const {Sequelize} = require('sequelize');
const setupModels = require('../../models');
const {config} = require('../../config');


const options = {
    dialect: 'postgres',
}

if(config.isProd) {
    options.dialectOptions = {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
}
const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);


module.exports = sequelize;