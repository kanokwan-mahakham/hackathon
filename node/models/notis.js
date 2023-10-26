const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Noti = sequelize.define(
    'Noti',{

        companyId:{
            type: DataTypes.DOUBLE
        },
        icon:{
            type: DataTypes.STRING
        },
        type:{
            type: DataTypes.STRING
        },
        description:{
            type: DataTypes.STRING
        },    
    }
);


module.exports = Noti;

  


