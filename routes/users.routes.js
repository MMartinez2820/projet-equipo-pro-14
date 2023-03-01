const express = require('express');
const router = express.Router()
const {checkRole} = require("../middlewares/checkRole");
const {UserMiddleware} = require("../middlewares/User.middleware");
const passport = require('../libs/passport')
const { getUsers,getUserById, userUpdate, removeUser } = require("../controllers/users.controller"); 
const { addPublication } = require("../controllers/publications.controller");

router.get("/", 
passport.authenticate('jwt', { session: false }),
checkRole, getUsers
);

router.get("/:id",  
passport.authenticate('jwt', { session: false }),
UserMiddleware, getUserById);

router.post("/:id/publication", addPublication)

router.put("/:id", 
passport.authenticate('jwt', { session: false }),
UserMiddleware, userUpdate);

router.delete("/:id",  
passport.authenticate('jwt', { session: false }),
removeUser);


module.exports=router;