const express = require('express');
const router = express.Router()

const {  getpublicationsTypes, getPublicationsTypesById }= require("../controllers/publications_types.controller")

router.get("/:id", getPublicationsTypesById)

module.exports=router;