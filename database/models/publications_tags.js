'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publications_tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Publications_tags.belongsTo(models.tags,{as:'tags',foreignKey:'tag_id'})
      Publications_tags.belongsTo(models.Publications,{as:'publications',foreignKey:'publications_id'})
    }
  }
  Publications_tags.init({
    tag_id: {type: DataTypes.INTEGER, 
      primaryKey: true},

    publication_id:{type: DataTypes.UUID, 
      primaryKey: true},
  }, {
    sequelize,
    modelName: 'Publications_tags',
    tableName: 'Publications_tags',
    underscored: true,
    timestamps: true,
  });
  return Publications_tags;
};