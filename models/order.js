const { DataTypes, Sequelize, Model } = require('sequelize'); 
const { get } = require('../src/routes/user.route');


const OrderSchema = {
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
    },
    // esto no es remomendable deberia ser por consulta de la base de datos
    total: {
        type: DataTypes.VIRTUAL,
        get() {
            if(this.items) {
                return this.items.reduce((acc, item) => {
                    return acc + (item.price * item.OrderProduct.amount)
                }, 0)
            }
            return 0
        }
    }
};

class Order extends Model {
    static associate(models) {
        this.belongsTo(models.Customer, { as: 'customer'});
        this.belongsToMany(models.Product, { 
            through: models.OrderProduct, 
            as: 'items', 
            foreignKey: 'orderId',
            otherKey: 'productId'
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'orders',
            modelName: 'Order',
            timestamps: false
        }
    }
}

module.exports = {Order, OrderSchema};