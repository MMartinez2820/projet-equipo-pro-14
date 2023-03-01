const publicationsTypesService = require("../services/publications_types.service") 
const { getPagination, getPagingData } = require('../utils/helpers')

const getpublicationsTypes = async (request, response, next) => {
    try {
      let query = request.query
      let { page, size } = query
      const { limit, offset } = getPagination(page, size, '10')
      query.limit = limit
      query.offset = offset
  
      let publicationsTypes = await publicationsTypesService.findAndCount(query)
      const results = getPagingData(publicationsTypes, page, limit)
      return response.json({ results: results })
  
    } catch (error) {
      next(error)
    }
  }

const getPublicationsTypesById= async (request, response, next) => {

    try {
        let { id } = request.params
        let publicationsTypes = await publicationsTypesService.getPublicationsTypes(id)
        return response.json({ results: publicationsTypes })
      } catch (error) {
        next(error)
      }
}
module.exports={
    getpublicationsTypes,
    getPublicationsTypesById
}
