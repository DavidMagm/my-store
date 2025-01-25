'use strict';

const {UserSchema} = require('../models/users')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'role', UserSchema.role)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'role')
  }
};
