const path     = require('path')
const Products = require(path.resolve('./app/models')).products

// inject the Express router into the controller
module.exports = router => {
	// GET /api/products
	router.get('/api/products', (req, res, next) => {
		Products
			.findAll()
			.then(products => {
				res.setHeader('Content-Type', 'application/json')
				res.send(JSON.stringify(products))
			})
			.catch(e => {
				throw Error(e)
			})
	})

	// GET /api/products/:id
	router.get('/api/products/:id', (req, res, next) => {
		Products
			.findById(id)
			.then(product => {
				res.setHeader('Content-Type', 'application/json')
				res.send(JSON.stringify(product))
			})
			.catch(e => {
				throw Error(e)
			})
	})

	// POST /api/products/:id/increment/:count
	router.post('/api/products/:id/increment/:count', (req, res, next) => {
		const id = req.params.id,
			count = req.params.count

		Products
			.findById(id)
			.then(product => {
				product.inventory += count
				product.save()
					.then(product => {
						res.setHeader('Content-Type', 'application/json')

						if (product) {
							res.send(JSON.stringify(product))
						} else {
							res.status(500).json({ error: 'Failed to save' })
						}
					})
					.catch(e => {
						res.setHeader('Content-Type', 'application/json')
						res.status(500).json({ error: 'Something went wrong' })
						throw Error(e)
					})
			})
	})

	// POST /api/products/:id/decrement/:count
	router.post('/api/products/:id/decrement/:count', (req, res, next) => {
		const id = req.params.id,
			count = req.params.count

		Products
			.findById(id)
			.then(product => {
				console.log('product: ' + product)
				product.inventory = product.inventory >= count ? product.inventory - count : 0
				product.save()
					.then(product => {
						res.setHeader('Content-Type', 'application/json')

						if (product) {
							res.send(JSON.stringify(product))
						} else {
							res.status(500).json({ error: 'Failed to save' })
						}
					})
					.catch(e => {
						res.setHeader('Content-Type', 'application/json')
						res.status(500).json({ error: 'Something went wrong' })
						throw Error(e)
					})
			})
	})

	// POST /api/products/add
	router.post('/api/products/add', (req, res, next) => {
		const data = req.body

		Products
			.create(data)
			.then(result => {
				res.setHeader('Content-Type', 'application/json')

				if (result) {
					res.json({ success: 'Saved sucessfully' })
				} else {
					res.status(500).json({ error: 'Failed to save' })
				}
			})
			.catch(e => {
				res.status(500).json({ error: 'Something went wrong' })
				throw Error(e)
			})
	})
}
