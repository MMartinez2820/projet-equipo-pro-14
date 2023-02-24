const UsersService = require('../services/users.service');
const sender = require('../libs/nodemailer');
require('dotenv').config();
const { getPagination, getPagingData } = require('../utils/helpers')



const getUsers = async (request, response, next) => {
    try {
      let query = request.query
      let { page, size } = query
      const { limit, offset } = getPagination(page, size, '10')
      query.limit = limit
      query.offset = offset
  
      let Users = await UsersService.findAndCount(query)
      const results = getPagingData(Users, page, limit)
      return response.json({ results: results })
    } catch (error) {
      next(error)
    }
  }

const getUserById = async (req, res, next)=>{
    try {
        const { id }= req.params;
       const  result= await UsersService.getUser(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
};

/*const getUserByEmail= async (req, res, next) =>{
    try {
        const { email }= req.body;
        const result= await UsersService.getUserByEmailOr404(email);
        res.status(200).json(result)
    } catch (error) {
         console.log(error);
    }
}*/

const userUpdate = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const body= req.body;
        const result= await UsersService.updateUser(id, body);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
    
}

const removeUser = async (request, response, next) => {
    try {
      const{ id } = request.params
      const User = await UsersService.removeUser(id)
      return response.json({ results: User, message: 'removed' })
    } catch (error) {
      next(error)
    }
  }

module.exports={
    getUsers,
  getUserById,
  userUpdate,
  removeUser
};

