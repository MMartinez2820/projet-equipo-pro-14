const {v4: uuid4} = require('uuid');
const models = require('../database/models')
const uuid = require('uuid')
const { Op } = require('sequelize')
const  {CustomError}  = require('../utils/helpers');
const { hashPassword } = require('../libs/bcrypt');
const UsersService = require("./users.service");
class PublicationsService{

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
    
        const { id } = query
        if (id) {
          options.where.id = id
        }
    
        const { name } = query
        if (name) {
          options.where.name = { [Op.iLike]: `%${name}%` }
        }
    
        //Necesario para el findAndCountAll de Sequelize
        options.distinct = true
    
        const publications = await models.Publications.findAndCountAll(options)
        return publications
      }

     static async createPublication(obj, id){
   
        const transaction = await models.sequelize.transaction()
        try {
           const userId=await models.Users.findByPk(id)
          let newPublication = await models.Publications.create(
            {
              id: uuid.v4(),
                user_id: obj.user_id,
                publication_type_id: obj.publications_types_id,
                city_id: obj.city_id,
                tittle: obj.tittle,
                description: obj.description,
                content: obj.content
            },{transaction})
    
          await transaction.commit()
          return newPublication
        } catch (error) {
          await transaction.rollback()
          throw error
        }
      }

     static async getPublicationOr404(id) {
        const Publication = await models.Publications.findByPk(id, { raw: true })
        if (!Publication) throw new CustomError('Not found publication', 404, 'Not Found')
        return Publication
      }

     static async updatePublication(id, obj) {
        const transaction = await models.sequelize.transaction()
        try {
          const Publication = await models.Publications.findByPk(id)
    
          if (!Publication) throw new CustomError('Not found publication', 404, 'Not Found')
    
          const updatedPublication = await Publication.update(obj, { transaction })
    
          await transaction.commit()
    
          return updatedPublication
        } catch (error) {
          await transaction.rollback()
          throw error
        }
      }

     static async removePublication(id) {
        const transaction = await models.sequelize.transaction()
        try {
          let Publication = await models.Publications.findByPk(id)
    
          if (!Publication ) throw new CustomError('Not found Publication', 404, 'Not Found')
    
          await Publication .destroy({ transaction })
    
          await transaction.commit()
    
          return Publication 
        } catch (error) {
          await transaction.rollback()
          throw error
        }
      }
}

  module.exports=PublicationsService;