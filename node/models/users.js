const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define(
    'User',{

        username:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        type:{
            type: DataTypes.STRING
        },
        juristicNumber:{
            type: DataTypes.STRING
        },
        address:{
            type: DataTypes.STRING
        },
        JuristicFile:{
            type: DataTypes.TEXT
        },
        status:{
            type: DataTypes.STRING
        },
        informationId:{
            type: DataTypes.DOUBLE
        }
        
    }
);

module.exports = User;