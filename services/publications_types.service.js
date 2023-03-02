const {v4: uuid4} = require('uuid');
const models = require('../database/models')
const { Op } = require('sequelize')
const  {CustomError}  = require('../utils/helpers');
const { hashPassword } = require('../libs/bcrypt');

class publicationsTypesServices{
 
    async findAndCount(query) {
        const options = {
          where: {},
        }
    
        const { limit, offset } = query
        if (limit && offset) {
          options.limit = limit
          options.offset = offset
        }
    
        const { id } = query
        if (id) {
          options.where.id = id
        }
    
        const { name } = query
        if (name) {
          options.where.name = { [Op.iLike]: `%${name}%` }
        }
    
        const { description } = query
        if (description) {
          options.where.description = { [Op.iLike]: `%${description}%` }
        }
    
        //Necesario para el findAndCountAll de Sequelize
        options.distinct = true
    
        const publicationsTypes = await models.Publications_types.findAndCountAll(options)
       return publicationsTypes;
      }
      async getPublicationsTypes(id) {
        let PublicationTypes = await models.publications_types.findOne({where: {id}})
        if (!PublicationTypes) throw new CustomError('Not found type', 404, 'Not Found')
        return PublicationTypes
      }
}

module.exports=publicationsTypesServices;