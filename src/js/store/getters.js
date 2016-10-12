// get all products in store
export const allProducts = state => state.products.all

// get all products in cart
export const cartProducts = state => {
	// map cart items to products
	return state.cart.added.map(({ id, quantity }) => {
		// if there are products in the store
		// find the product
		if (state.products.all.length) {
			const product = state.products.all.find(product => product.id === id)
			
			// if the cart item is in the product store
			// return the product
			if (product) {
				return {
					id: product.id,
					title: product.title,
					price: product.price,
					inventory: product.inventory,
					quantity
				}
			} else {
				// if no product found return an empty object
				return {}
			}
		} else {
			// if no products in the store
			// return an empty object
			return {}
		}
	})
	// remove the empty objects from the array
	.filter(item => Object.keys(item).length !== 0)
}
