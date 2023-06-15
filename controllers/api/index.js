const router = require('express').Router();


const Catering  = require('./catering-route');
const transport=require('./transport-routes')

router.use('/catering', Catering);
router.use('/transport',transport);

module.exports = router;
