//Import dependencies
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//Set up routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

//Export
module.exports = router;
