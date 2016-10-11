// get all products in store
export const allProducts = state => state.products.all

// get all products in cart
export const cartProducts = state => {
	return state.cart.added.map(({ id, quantity }) => {
		if (state.products.all.length) {
			const product = state.products.all.find(product => product.id === id)
			return {
				id: product.id,
				title: product.title,
				price: product.price,
				inventory: product.inventory,
				quantity
			}
		} else {
			return {}
		}
	})
}
