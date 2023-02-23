'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class publications_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      publications_types.hasMany(models.Publications, {as:"publications", foreignKey:"publications_types"})
    }
  }
  publications_types.init({
    id:{type: DataTypes.UUID,
      primaryKey: true
    },
    name: {type:DataTypes.STRING, allowNull:false},
    description:{type:DataTypes.STRING, allowNull:false}
  }, {
    sequelize,
    modelName: 'publications_types',
  });
  return publications_types;
};