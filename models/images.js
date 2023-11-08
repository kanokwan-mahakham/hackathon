// models/image.js
const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');

const Image = sequelize.define('image', {
  filename: {
    type: DataTypes.STRING,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = Image;
