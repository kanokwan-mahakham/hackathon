const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Package = sequelize.define(
    'Package',{

        companyId:{
            type: DataTypes.DOUBLE
        },
        slip:{
            type: DataTypes.TEXT
        },
        status:{
            type: DataTypes.STRING
        },
        pack:{
            type: DataTypes.STRING
        },
        timeEnd:{
            type: DataTypes.STRING
        },
        dayEnd:{
            type: DataTypes.STRING
        }
        
        
    }
);


module.exports = Package;


