const express =require('express');
const passport = require('../libs/passport');
const router = express.Router();
const {checkRole}=require('../middlewares/checkRole');
const {getTags,addTags,detailTag}=require('../controllers/tags.controller');
const { addAbortSignal } = require('stream');

router.get('/',
  passport.authenticate('jwt',{session:false}), getTags);

router.post('/',
  passport.authenticate('jwt',{session:false}), checkRole, addTags);

router.get('/:id', passport.authenticate('jwt',{session:false}), detailTag);



module.exports = router