const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Products = sequelize.define(
    'Products',{
        
        productId:{
            type: DataTypes.DOUBLE
        },
        companyId:{
            type: DataTypes.DOUBLE
        },
        name:{
            type: DataTypes.STRING
        },
        description:{
            type: DataTypes.STRING
        },
        image:{
            type: DataTypes.TEXT
        },
        typeCompany:{
            type: DataTypes.STRING
        },
        typeProduct:{
            type: DataTypes.STRING
        },
        service:{
            type: DataTypes.STRING
        },
        quantity:{
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.DOUBLE
        },
        
    }
);

module.exports = Products;
