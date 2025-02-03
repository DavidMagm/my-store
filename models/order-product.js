const { DataTypes, Sequelize, Model } = require('sequelize'); 


const OrderProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    amount: { 
        allowNull: false,
        type: DataTypes.INTEGER
    },
    orderId: { 
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'order_id',
        references: {
            model: 'orders',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'product_id',
        references: {
            model: 'products',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
};

class OrderProduct extends Model {
    static associate() {
        //
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'order_products',
            modelName: 'OrderProduct',
            timestamps: false
        }
    }
}

module.exports = {OrderProduct, OrderProductSchema};