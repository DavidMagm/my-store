const { DataTypes, Sequelize, Model } = require('sequelize'); 

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING
    },
    role: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'customer'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
};

class User extends Model {
    static associate(models) {
        this.hasOne(models.Customer, {foreignKey: 'userId', as: 'customer'});
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'users',
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = {User, UserSchema};
