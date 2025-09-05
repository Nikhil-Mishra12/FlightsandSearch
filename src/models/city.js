'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      // define association here if needed
      this.hasMany(models.Airport,{
        foreignKey:'cityId'
      })
    }
  }

  City.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false   // 👈 correctly placed inside the field definition
      }
    },
    {
      sequelize,
      modelName: 'City',
      tableName: 'cities' // optional, ensures Sequelize uses cities table
    }
  );

  return City;
};