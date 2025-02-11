'use strict';

const {DataTypes, Sequelize} = require('sequelize')
const {UserSchema} = require('../models/users')
const {CustomerSchema} = require('../models/customer')
const {ProductSchema} = require('../models/product')
const {CategorySchema} = require('../models/category')
const {OrderSchema} = require('../models/order')
const {OrderProductSchema} = require('../models/order-product')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable('users', UserSchema)
    await queryInterface.createTable('customers', CustomerSchema)
    await queryInterface.createTable('categories', CategorySchema)
    await queryInterface.createTable('products', ProductSchema)
    await queryInterface.createTable('orders', {
      id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: DataTypes.INTEGER
          },
          createdAt: {
              allowNull: false,
              type: DataTypes.DATE,
              field: 'create_at',
              defaultValue: Sequelize.NOW
          },
          customerId: {
              allowNull: false,
              type: DataTypes.INTEGER,
              field: 'customer_id',
              references: {
                  model: 'customers',
                  key: 'id'
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL'
          }
    })
    await queryInterface.createTable('orders_products', OrderProductSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
    await queryInterface.dropTable('customers')
    await queryInterface.dropTable('categories')
    await queryInterface.dropTable('products')
    await queryInterface.dropTable('orders_products')
    await queryInterface.dropTable('orders')
  }
};
