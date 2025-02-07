'use strict';

const { DataTypes, Sequelize } = require('sequelize'); 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn('users', 'role', {
      role: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'customer'
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'role')
  }
};
