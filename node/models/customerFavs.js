const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const CustomerFav = sequelize.define(
    'CustomerFav',{

        customerId:{
            type: DataTypes.DOUBLE
        },
        companyId:{
            type: DataTypes.DOUBLE
        }
    }
);

module.exports = CustomerFav;