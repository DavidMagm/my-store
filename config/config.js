const {config} = require('../config');

const URI = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

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
    url: URI,
    dialect: 'postgres',
  },
}
