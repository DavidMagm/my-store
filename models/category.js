const { DataTypes, Sequelize, Model } = require('sequelize'); 


const CategorySchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
};

class Category extends Model {
    static associate(models) {
        this.hasMany(models.Product, {foreignKey: 'categoryId', as: 'products'});
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'categories',
            modelName: 'Category',
            timestamps: false
        }
    }
}

module.exports = {Category, CategorySchema};