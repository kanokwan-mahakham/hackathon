const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Chat = sequelize.define(
    'Chat',{

        room:{
            type: DataTypes.DOUBLE
        },
        sendId:{
            type: DataTypes.DOUBLE
        },
        message:{
            type: DataTypes.TEXT
        },
            
    }
);

module.exports = Chat;

  


