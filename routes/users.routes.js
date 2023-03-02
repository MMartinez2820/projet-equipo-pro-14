const express = require('express');
const router = express.Router()
const passport = require('../libs/passport');
const { checkRole } = require('../middlewares/checkRole');
const { getUsers,getUserById, userUpdate, removeUser } = require("../controllers/users.controller"); 


router.get("/",passport.authenticate('jwt', { session: false }),checkRole, getUsers);

router.get("/:id",passport.authenticate('jwt', { session: false }),checkRole, getUserById);


router.put("/:id",passport.authenticate('jwt', { session: false }),checkRole, userUpdate);

router.delete("/:id",passport.authenticate('jwt', { session: false }),checkRole,  removeUser);


module.exports=router;