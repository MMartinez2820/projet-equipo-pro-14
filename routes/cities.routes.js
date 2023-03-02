const express = require('express');
const { getCities, getCityById } = require('../controllers/cities.controller');
const passport = require('../libs/passport');
const router = express.Router()

router.get('/', passport.authenticate('jwt', { session: false }), getCities);

router.get('/:id', passport.authenticate('jwt', { session: false }),  getCityById );

module.exports = router