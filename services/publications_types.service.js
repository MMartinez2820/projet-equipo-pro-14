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
    
        const { name } = query
        if (name) {
          options.where.name = { [Op.iLike]: `%${name}%` }
        }
    
        //Necesario para el findAndCountAll de Sequelize
        options.distinct = true
    
        const states = await models.publications_types.findAndCountAll(options)
        return states
      }
      async getPublicationsTypes(id) {
        let PublicationTypes = await models.publications_types.findByPk(id)
        if (!state) throw new CustomError('Not found State', 404, 'Not Found')
        return PublicationTypes
      }
}

module.exports=publicationsTypesServices;