const { DataTypes } = require("sequelize");
const { config } = require("../../.sequelizerc");

 module.exports = (sequelize, DataTypes) => {
    const alias = "Product";
    const cols = {
        
        name: {
            type: DataTypes.STRING (300)
        },
        price: {
            type: DataTypes.DECIMAL (2)
        },
        image: {
            type: DataTypes.STRING (300)
        },
        category: {
            type: DataTypes.STRING (4)
        }

    };
    const config = {
        tableName: "products",
        timestamps: false,
    }

const Product = sequelize.define(alias, cols, config);
    return Product;
}