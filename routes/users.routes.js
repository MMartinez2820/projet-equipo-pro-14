const express = require('express');
const router = express.Router()


const { getUsers,getUserById, userUpdate, removeUser } = require("../controllers/users.controller"); 
const { addPublication } = require("../controllers/publications.controller");

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/:id/publication", addPublication)

router.put("/:id", userUpdate);

router.delete("/:id",  removeUser);


module.exports=router;