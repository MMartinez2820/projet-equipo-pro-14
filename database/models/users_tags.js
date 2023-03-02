'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users_tags.belongsTo(models.tags,{as:'tags',foreignKey:'tag_id'})
      users_tags.belongsTo(models.Users,{as:'users',foreignKey:'user_id'})
    }
  }
  users_tags.init({
    tag_id:{
      type: DataTypes.INTEGER,
      primaryKey: true},
  
    user_id: {
      type: DataTypes.UUID,
      primaryKey: true}
  }, {
    sequelize,
    modelName: 'users_tags',
    tableName: 'users_tags',
    underscored: true,
    timestamps: true,
  });
  return users_tags;
};