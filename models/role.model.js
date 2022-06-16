
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

const Role = sequelize.define('Role',{
 id: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
 },
 roleName: {
  type: DataTypes.STRING,
  allowNull: false,
  unique: true
 }
})

module.exports = Role