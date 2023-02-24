const express = require('express');
const router = express.Router()

const {  getPublications, addPublication }= require("../controllers/publications.controller");

router.get("/publications/", getPublications);

router.post("/users/:id/publication", addPublication);

module.exports=router;

