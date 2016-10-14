import shop from '../api/shop'

export const getAllProducts = ({ commit }) => {
	shop.getProducts(products => {
		commit('RECEIVE_PRODUCTS', {
			products
		})
	})
}

export const addToCart = ({ commit }, { product, count }) => {
	if (product.inventory > 0) {
		shop.addToCart({ id: product.id, count }, inventory => {
			commit('ADD_TO_CART', {
				id: product.id,
				count,
				inventory
			})
		})
	}
}

export const removeFromCart = ({ commit }, { product, count }) => {
	shop.removeFromCart({ id: product.id, count }, inventory => {
		commit('REMOVE_FROM_CART', {
			id: product.id,
			count,
			inventory
		})
	})
}
