import request from 'superagent'
import baseUrl from '../helpers/baseUrl'

export default {
	// @param Function cb
	getProducts(cb) {
		request
			.get(baseUrl() + 'api/products')
			.set('Accept', 'application/json')
			.end((err, res) => !err ? cb(res.body) : err)
	},

	// @param Object data
	// @param Function cb
	// @param Function errorCb
	saveProduct(data, cb, errorCb) {
		request
			.post(baseUrl() + 'api/products/add')
			.send(data)
			.set('Accept', 'application/json')
			.end((err, res) => !err ? cb() : errorCb(err))
	},

	// @param Object: String ID, Number count
	// @param Function cb
	addToCart({ id, count }, cb) {
		request
			.post(baseUrl() + `api/products/${id}/decrement/${count}`)
			.set('Accept', 'application/json')
			.end((err, res) => !err ? cb(res.body.inventory) : console.log(err))
	},

	// @param Object: String ID, Number count
	// @param Function cb
	removeFromCart({ id, count }, cb) {
		request
			.post(baseUrl() + `api/products/${id}/increment/${count}`)
			.set('Accept', 'application/json')
			.end((err, res) => !err ? cb(res.body.inventory) : console.log(err))
	}
}
