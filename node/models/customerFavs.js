const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('./users'); // Import the User model

const CustomerFav = sequelize.define(
    'CustomerFav', {
        customerId: {
            type: DataTypes.DOUBLE
        },
        companyId: {
            type: DataTypes.DOUBLE
        },
        informationId:{
            type: DataTypes.DOUBLE
        }
    }
);

// CustomerFav.belongsTo(User, { foreignKey: 'companyId' });
module.exports = CustomerFav;

