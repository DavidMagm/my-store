'use strict';

const {ProductSchema} = require('../models/product');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', ProductSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
