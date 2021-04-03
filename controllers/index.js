//Import dependencies
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

//Set up routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req,res) => { 
    res.status(404).end();
});

//Export
module.exports = router;