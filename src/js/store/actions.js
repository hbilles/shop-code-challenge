import shop from '../api/shop'

export const getAllProducts = ({ commit }) => {
	shop.getProducts(products => {
		commit('RECEIVE_PRODUCTS', {
			products
		})
	})
}

export const addToCart = ({ commit }, { product, count }) => {
	// only add to cart if there is inventory
	if (product.inventory > 0) {
		// update server's product inventory
		shop.addToCart({ id: product.id, count }, inventory => {
			// commit update to app
			commit('ADD_TO_CART', {
				id: product.id,
				count,
				inventory
			})
		})
	}
}

export const removeFromCart = ({ commit }, { product, count }) => {
	// update server's product inventory
	shop.removeFromCart({ id: product.id, count }, inventory => {
		// commit update to app
		commit('REMOVE_FROM_CART', {
			id: product.id,
			count,
			inventory
		})
	})
}
