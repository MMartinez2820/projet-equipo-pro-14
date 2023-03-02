const models = require('../database/models')
const { Op } = require('sequelize')
const { CustomError } = require('../utils/helpers');

class CitiesServices {

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
  
      const cities = await models.Cities.findAndCountAll(options)
      return cities
    }

    async createCity(obj) {
        const transaction = await models.sequelize.transaction()
        try {
          let newCity = await models.cities.create({
            id: uuid.v4(),
            state_id: obj.state_id,
            name: obj.name
          }, { transaction })
    
          await transaction.commit()
          return newCity
        } catch (error) {
          await transaction.rollback()
          throw error
        }
      }

}

module.exports= CitiesServices;