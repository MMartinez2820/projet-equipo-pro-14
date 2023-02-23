const express = require('express');
const router = express.Router()

const { getAllUsers,getUserById,getUserByEmail, userUpdate } = require("../controllers/users.controller"); 

router.get("/", getAllUsers);

router.get("/:id", getUserById);

//router.get("/:email", getUserByEmail);

router.put("/:id", userUpdate);

module.exports=router;