const router = require('express').Router();


const Catering  = require('./catering-route');
const transport=require('./transport-routes')
const Accomodation=require('./accomodation-route.js')


router.use('/catering', Catering);
router.use('/transport',transport);
router.use('/accomodation',Accomodation);


module.exports = router;
