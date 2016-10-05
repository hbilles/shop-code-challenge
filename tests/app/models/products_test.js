const expect   = require('chai').expect
const path     = require('path')

const Products = require(path.resolve('./app/models')).products

describe('app Products model', function() {
	it('should exist', function() {
		expect(Products).to.not.be.undefined
	})

	describe('create', function() {
		it('with empty values in fields', function() {
			let product = Products.build()
			expect(product.dataValues).to.have.any.keys('id')
		})

		it('with values for required fields', function() {
			let params = {
					title: 'My awesome product',
					price: 54.99,
					inventory: 34
				},
				product = Products.build(params)

			expect(product).to.be.a('object')
			expect(product.dataValues).to.have.all.keys(['id', 'title', 'price', 'inventory'])
		})
	})
})


