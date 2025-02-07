const {config} = require('../config');


module.exports = {
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false,
      }
    }
  },
  development: {
    url: config.dbUrl,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false,
      }
    }
  },
}
