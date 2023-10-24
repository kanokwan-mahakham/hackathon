// models/image.js
const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');

const Image = sequelize.define('Image', {
  filename: {
    type: DataTypes.STRING,
  },
  data: {
    type: DataTypes.BLOB('long'),
  },
});

module.exports = Image;
