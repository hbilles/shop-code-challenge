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
			.end((err, res) => !err ? cb() : errorCb())
	},

	// @param Object containing product ID
	addToCart({id}) {
		request
			.post(baseUrl() + `api/products/${id}/decrement`)
			.set('Accept', 'application/json')
			.end((err, res) => !err ? res : err)
	},

	// @param Object containing product ID
	removeFromCart({id}) {
		request
			.post(baseUrl() + `api/products/${id}/increment`)
			.set('Accept', 'application/json')
			.end((err, res) => !err ? res : err)
	}
}
