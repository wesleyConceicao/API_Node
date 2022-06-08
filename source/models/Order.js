const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Order = sequelize.define('Order', {

    quantity: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // timestamps: false
});

Order.associate = function(models) {
    Order.belongsTo(models.Usuario, { });
    Order.hasMany(models.Produto, { });
}

module.exports = Order;