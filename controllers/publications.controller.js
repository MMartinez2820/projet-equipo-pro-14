const PublicationsService = require("../services/publications.service")
const { getPagination, getPagingData,CustomError } = require('../utils/helpers')
const uuid = require('uuid')
const publicationsService = new PublicationsService
const getPublications = async (request, response, next) => {
    try {
      let query = request.query
      let { page, size } = query
      const { limit, offset } = getPagination(page, size, '10')
      query.limit = limit
      query.offset = offset
  
      let Publications = await publicationsService.findAndCount(query)
      const results = getPagingData(Publications, page, limit)
      return response.json({ results: results })
    } catch (error) {
      next(error)
    }
  }


const addPublication = async (req, res, next) => {
  const data = req.body
  const { id }= req.params;
  try {
    if (!data.tittle) throw new CustomError('Not found tittle', 400, 'Required parameter');
    if (!data.city_id) throw new CustomError('Not found city_id', 400, 'Required parameter');
    if (!data.publications_types_id) throw new CustomError('Not found publication type id', 400, 'Required parameter');

    
    const publication = await PublicationsService.createPublication({...data, id: uuid.v4(), user_id:(id)})
    
    if (!publication) throw new CustomError('Not publication created', 400, 'Contact admin');

    res.status(201).json({message: 'Publication created'})
  } catch (error) {
    next(error);
  }
  }

  const getPublicationById = async (req, res, next) => {
    const publicationId = req.params.id
    try {
      const publication = await publicationsService.findById(publicationId)
      res.json(publication);
    } catch (error) {
      next(error)
    }
  }

  module.exports={
    getPublications,
    addPublication,
    getPublicationById 
  }

