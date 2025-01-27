const { DataTypes, Sequelize, Model } = require('sequelize'); 


const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
    categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'category_id',
        references: {
            model: 'categories',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
};

class Product extends Model {
    static associate(models) {
        this.belongsTo(models.Category, { as: 'category'});
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'products',
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = {Product, ProductSchema};