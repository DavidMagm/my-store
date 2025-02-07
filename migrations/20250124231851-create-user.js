'use strict';

const { DataTypes, Sequelize, } = require('sequelize'); 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable('users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        role: {
          allowNull: false,
          type: DataTypes.STRING,
          defaultValue: 'customer'
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'create_at',
            defaultValue: Sequelize.NOW
        }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users', UserSchema)
  }
};
