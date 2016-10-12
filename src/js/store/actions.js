import shop from '../api/shop'

export const getAllProducts = ({ commit }) => {
	shop.getProducts(products => {
		commit('RECEIVE_PRODUCTS', {
			products
		})
	})
}

export const addToCart = ({ commit }, product) => {
	if (product.inventory > 0) {
		commit('ADD_TO_CART', {
			id: product.id
		})
	}
}

export const removeFromCart = ({ commit }, product) => {
	commit('REMOVE_FROM_CART', {
		id: product.id
	})
}

export const removeAllFromCart = ({ commit }, product) => {
	commit('REMOVE_ALL_FROM_CART', {
		id: product.id
	})
}
