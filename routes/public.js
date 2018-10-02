const router = require('express').Router();
const body = require('connect-multiparty')();
const fs = require('fs');
const path = require('path');
const ctrl = require('../controllers');

router.get("/", function(req,res){res.json({message:"Hola mundo AngelHack!!"})});
router.post('/login', body, ctrl.auth.auth);
router.post('/register',body, ctrl.users.createUser);

module.exports = router;