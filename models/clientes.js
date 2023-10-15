'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
   
   
  }
  Clientes.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    createdat: DataTypes.DATE,
    updatedat: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Clientes',
  });
  return Clientes;
};