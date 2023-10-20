const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Information = sequelize.define(
    'Information',{
        
        
        name:{
            type: DataTypes.STRING
        },
        description:{
            type: DataTypes.STRING
        },
        profile:{
            type: DataTypes.TEXT
        },
        address:{
            type: DataTypes.STRING
        },
        tel:{
            type: DataTypes.STRING
        },
        facebook:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        instagram:{
            type: DataTypes.STRING
        },
        website:{
            type: DataTypes.STRING
        },
        image1:{
            type: DataTypes.TEXT
        },
        image2:{
            type: DataTypes.TEXT
        },
        image3:{
            type: DataTypes.TEXT
        },
        image4:{
            type: DataTypes.TEXT
        },
        image5:{
            type: DataTypes.TEXT
        },
        image6:{
            type: DataTypes.TEXT
        }
    }
);

module.exports = Information;
