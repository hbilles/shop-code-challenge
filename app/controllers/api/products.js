const path     = require('path')
const Products = require(path.resolve('./app/models')).products

// inject the Express router into the controller
module.exports = function(router) {
	// GET /api/products
	router.get('/api/products', function(req, res, next) {
		Products
			.findAll()
			.then(function(products) {
				res.setHeader('Content-Type', 'application/json')
				res.send(JSON.stringify(products))
			})
			.catch(function(e) {
				throw Error(e)
			})
	})

	// GET /api/products/:id
	router.get('/api/products/:id', function(req, res, next) {
		Products
			.findById(id)
			.then(function(product) {
				res.setHeader('Content-Type', 'application/json')
				res.send(JSON.stringify(product))
			})
			.catch(function(e) {
				throw Error(e)
			})
	})

	// POST /api/products/add
	router.post('/api/products/add', function(req, res, next) {
		const data = req.body

		Products
			.create(data)
			.then(function(result) {
				res.setHeader('Content-Type', 'application/json')

				if (result) {
					res.json({success: 'Saved sucessfully'})
				} else {
					res.status(500).json({error: 'Failed to save'})
				}
			})
			.catch(function(e) {
				res.status(500).json({error: 'Something went wrong'})
				throw Error(e)
			})
	})
}
