const UsersService = require('../services/users.service');
const sender = require('../libs/nodemailer');
require('dotenv').config();

const getAllUsers = async (req, res, next)=>{
    try {
        const allUsers = await UsersService.getUsersAll();
        res.json(allUsers)
    } catch (error) {
        console.log(error);
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

module.exports={
  getAllUsers,
  getUserById,
  userUpdate
};

