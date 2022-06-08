const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define('User', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    //timestamps: false
});

User.associate = function(models) {
    User.belongsTo(models.Order, {through: 'Make', as: 'Making', foreignKey: 'MakeOrderId' });
    User.belongsToMany(models.Product, { through: 'Comprar', as: 'comprando', foreignKey: 'BuyId' });
}

module.exports = User;