const path    = require('path')
const express = require('express')
const router  = express.Router()

/* GET homepage */
router.get('/', (req, res, next) => {
	res.render('index', { title: 'Express' })
});

// import the Products API Controller
require('./api/products')(router)

module.exports = router;
