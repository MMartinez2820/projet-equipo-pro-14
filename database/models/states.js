'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class states extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      states.belongsTo(models.Countries,{as:"country", foreignKey:"country_id"})
    
    }
  }
  states.init({
    id:{type: DataTypes.INTEGER,
      primaryKey: true},
    country_id: {type:DataTypes.INTEGER,
    primaryKey:true},
    name: {type:DataTypes.STRING,
    allowNull:false
    }
  }, {
    sequelize,
    modelName: 'states',
    tableName: 'states',
    underscored: true,
    timestamps: true,
  });
  return states;
};