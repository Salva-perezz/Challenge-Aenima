const Sequelize = require('sequelize');
const db = require('../db');

class Product extends Sequelize.Model{}

Product.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull:false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull:false
    }
}, { sequelize: db, modelName: 'product' });

module.exports = Product;