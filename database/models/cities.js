'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cities.belongsTo(models.states,{as:"state", foreignKey:"state_id"})
      Cities.hasMany(models.Publications,{as:"publications", foreignKey:"city_id"})
    }
  }
  Cities.init({
    id:{ type:DataTypes.INTEGER,
    primaryKey: true},
    name: DataTypes.STRING,
    state_id: { type:DataTypes.INTEGER,
      primaryKey: true}
  },
  
  {
    sequelize,
    modelName: 'Cities',
  });
  return Cities;
};