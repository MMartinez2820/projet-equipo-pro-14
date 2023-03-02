'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     Publications.belongsTo(models.Users, {as:"user", foreignKey:"user_id"})
     Publications.belongsTo(models.publications_types,{as:"publications_type", foreignKey:"publications_types_id"})
     Publications.belongsTo(models.Cities, {as:"city", foreignKey:"city_id"})
     Publications.belongsToMany(models.Users,{through:"users", foreignKey:"user_id"})
     Publications.hasMany(models.Publications_images, {as:"publications_images", foreignKey:"publications__id"})
     Publications.hasMany(models.Publications_tags, { as: 'Publications_tags', foreignKey: 'publication_id' })
    }
  }
  Publications.init({
    id: {
      type:DataTypes.UUID,
      primaryKey: true
    },
    user_id: {
      type:DataTypes.UUID,
      primaryKey: true
    },
    publications_types_id:{
      type:DataTypes.INTEGER,
       primaryKey: true
      },
    city_id: {
      type:DataTypes.INTEGER,
      primaryKey: true
    },
    tittle: {
      type:DataTypes.STRING, 
      allowNull:false},
    description: {type:DataTypes.STRING,
      allowNull:false
    },
    content: DataTypes.TEXT,
    picture: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Publications',
    tableName: "publications",
    underscored: true,
    timestamps: true,
     scopes: {
      no_timestamps: { attributes: { exclude: ['createdAt', 'updatedAt'] } }
    }
  },);
  

  
  return Publications;
};