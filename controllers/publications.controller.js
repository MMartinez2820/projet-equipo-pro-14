const PublicationsService = require("../services/publications.service")
const { getPagination, getPagingData } = require('../utils/helpers')


const getPublications = async (request, response, next) => {
    try {
      let query = request.query
      let { page, size } = query
      const { limit, offset } = getPagination(page, size, '10')
      query.limit = limit
      query.offset = offset
  
      let Publications = await PublicationsService.findAndCount(query)
      const results = getPagingData(Publications, page, limit)
      return response.json({ results: results })
    } catch (error) {
      next(error)
    }
  }


const addPublication = async (request, response, next) => {
    try {
      let { body } = request
      let Publication = await PublicationsService.createPublication(body)
      return response.status(201).json({ results: Publication })
    } catch (error) {
      next(error)
    }
  }

  module.exports={
    getPublications,
    addPublication
  }

