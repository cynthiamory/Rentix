const router = require('express').Router();

// const apiRoutes = require('./api');
const trending =require('./trending-routes');

router.use('/', trending);
// router.use('/api', apiRoutes);

module.exports = router;
