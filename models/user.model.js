const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection')

const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: true
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.BOOLEAN,
    default: true,
  },
  google: {
    type: DataTypes.BOOLEAN,
    default: false
  }
}, {
  // Other model options go here

});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = User