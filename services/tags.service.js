const models = require('../database/models')
const { Op } = require('sequelize')
const { CustomError } = require('../utils/helpers');

class TagsServices {


    constructor() {

    }
  
    async findAndCount(query) {
      const options = {
        where: {},
      }
  
      const { limit, offset } = query
      if (limit && offset) {
        options.limit = limit
        options.offset = offset
      }
  
      const { name } = query
      if (name) {
        options.where.name = { [Op.iLike]: `%${name}%` }
      }
  
      //Necesario para el findAndCountAll de Sequelize
      options.distinct = true
  
      const tags = await models.tags.findAndCountAll(options)
      return tags
    }

    async createTag(obj) {
        const transaction = await models.sequelize.transaction()
        try {
          let newTag = await models.tags.create({
            name: obj.name,
            description: obj.description,
          }, { transaction })
    
          await transaction.commit()
          return  newTag
        } catch (error) {
          await transaction.rollback()
          throw error
        }
      }

      async getTagById(id) {
        let tag = await models.tags.findByPk(id)
        if (!tag) throw new CustomError('Not found State', 404, 'Not Found')
        return tag
      }
}

module.exports= TagsServices;