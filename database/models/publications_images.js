'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publications_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Publications_images.belongsTo(models.Publications,{as:'publications',foreignKey:'publication_id'})
    }
  }
  Publications_images.init({
    publication_id:{ type:DataTypes.UUID,
      foreignKey:true
    },
    image_url: 
    DataTypes.STRING,
    order: {
      allowNull: true,
      type: DataTypes.INTEGER,
      foreignKey:true
    },
  },
  
  {
    sequelize,
    modelName: 'Publications_images',
    tableName: 'Publications_images',
    underscored: true,
    timestamps: true,
  });
  return Publications_images;
};