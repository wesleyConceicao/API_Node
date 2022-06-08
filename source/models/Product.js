const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Product = sequelize.define('Product', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    price: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // timestamps: false
});

Product.associate = function(models) {
    Product.belongsToMany(models.Order, { });
    Product.belongsTo(models.User, { });
}

module.exports = Product;