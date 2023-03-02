const express = require('express');
const router = express.Router()

const {  getPublications, addPublication ,getPublicationById }= require("../controllers/publications.controller");

router.get("/publications/", getPublications);

router.get("/publications/:id", getPublicationById );

router.post("/users/:id/publication", addPublication);

module.exports=router;

