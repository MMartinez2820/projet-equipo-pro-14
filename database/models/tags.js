'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tags.hasMany(models.Publications_tags,{as:'publications_tags',foreignKey:'tag_id'})
      tags.hasMany(models.users_tags,{as:'users_tags',foreignKey:'tag_id'})
    }
  }
  tags.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {type:DataTypes.STRING,
    allowNull:false
    },
    description: {type:DataTypes.STRING,
    allowNull:false
    },
    image_url: {type:DataTypes.STRING,
    allowNull:false
    }
  }, {
    sequelize,
    modelName: 'tags',
    tableName: 'tags',
    underscored: true,
    timestamps: true,
  });
  return tags;
};