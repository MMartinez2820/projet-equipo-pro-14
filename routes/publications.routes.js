const express = require('express');
const router = express.Router()
const passport = require('../libs/passport');
const { checkRole } = require('../middlewares/checkRole');
const {  getPublications, addPublication ,getPublicationById }= require("../controllers/publications.controller");

router.get("/publications/",passport.authenticate('jwt', { session: false }),checkRole, getPublications);

router.get("/publications/:id",passport.authenticate('jwt', { session: false }),checkRole, getPublicationById );

router.post("/users/:id/publication",passport.authenticate('jwt', { session: false }),checkRole, addPublication);

module.exports=router;

/**{
  "tittle": "example-tittle",
  "description": "description",
  "content": "example-content",
  "city_id": 1,
  "publications_types_id": 1
} */