'use strict';

const { OrderProductSchema } = require('../models/order-product');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('order_products', OrderProductSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('order_products');
  }
};
