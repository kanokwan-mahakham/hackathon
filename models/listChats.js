const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const ListChat = sequelize.define(
    'ListChat',{

        userId:{
            type: DataTypes.DOUBLE
        },
        companyId:{
            type: DataTypes.DOUBLE
        },
        room:{
            type: DataTypes.DOUBLE
        },
            
    }
);

module.exports = ListChat;

  


