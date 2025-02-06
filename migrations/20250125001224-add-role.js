'use strict';

const { DataTypes } = require('sequelize'); 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn('users', 'role', {
      role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'customer'
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'role')
  }
};
