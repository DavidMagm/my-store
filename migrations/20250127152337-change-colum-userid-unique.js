'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('customers', 'user_id', {
      allowNull: false,
      type: Sequelize.INTEGER,
      field: 'user_id',
      unique: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('customers', 'user_id', {
      allowNull: false,
      type: Sequelize.INTEGER,
      field: 'user_id',
      unique: true,
    });
  }
};
