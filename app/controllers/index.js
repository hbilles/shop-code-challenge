const path    = require('path')
const express = require('express')
const router  = express.Router()

/* GET homepage */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' })
});

// import the Products API Controller
require(path.join(__dirname, 'api/products'))(router)

module.exports = router;
