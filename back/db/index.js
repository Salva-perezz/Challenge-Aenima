const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres://postgres@localhost/aenima", {
    logging: false,
    dialect: "postgres"
});

module.exports = sequelize