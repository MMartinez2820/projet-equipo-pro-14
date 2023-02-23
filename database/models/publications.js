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
     Publications.belongsTo(models.publications_types,{as:"publications_types", foreignKey:"publication_types_id"})
     Publications.belongsTo(models.Cities, {as:"city", foreignKey:"city_id"})
     Publications.belongsToMany(models.Users,{through:"users", foreignKey:"user_id"})
    // Publications.belongsToMany(models.Tags,{through:"tags", foreignKey:"tags_id"})
    //Publications.hasMany(models.Publications_images, {as:"publications_images", foreignKey:"publications_images_id"})
    }
  }
  Publications.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true
    },
    profile_id: {
      type:DataTypes.UUID,
      primaryKey: true
    },
    publication_type_id:{
      type:DataTypes.INTEGER,
       primaryKey: true
      },
    city_id: {
      type:DataTypes.STRING,
      primaryKey: true
    },
    tittle: {
      type:DataTypes.STRING, 
      allowNull:false},
    description: DataTypes.STRING,
    content: DataTypes.TEXT,
    picture: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Publications',
    tableName: "publications",
    underscored: true,
    timestamps: true,
  },);
  

  
  return Publications;
};