const router = require('express').Router();

const Catering  = require('./Catering');

const trending =require('./trending-routes');

router.use('/', trending);
router.use('/catering', Catering);

module.exports = router;
