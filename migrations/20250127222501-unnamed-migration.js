'use strict';

const {OrderSchema} = require('../models/order');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', OrderSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
