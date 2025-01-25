const {User, UserSchema} = require('./users');
const {Customer, CustomerSchema} = require('./customer');

function setupModels(sequelize) {
   User.init(UserSchema, User.config(sequelize))
   Customer.init(CustomerSchema, Customer.config(sequelize))
   Customer.associate(sequelize.models)
}
  
module.exports = setupModels;