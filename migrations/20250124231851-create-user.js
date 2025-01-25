'use strict';
const {UserSchema} = require('../models/users')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', UserSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users', UserSchema)
  }
};
