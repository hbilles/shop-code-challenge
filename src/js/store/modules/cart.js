export const STORAGE_KEY = 'cart'

// initial state
const state = {
	added: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

// mutations
const mutations = {
	ADD_TO_CART(state, { id, count }) {
		const record = state.added.find(product => product.id === id)
		// create new item in cart if not exist
		if (!record) {
			state.added.push({
				id,
				quantity: count
			})
		} else {
			// update existing cart item
			record.quantity += count
		}
	},

	REMOVE_FROM_CART(state, { id, count }) {
		// find item and item index in cart
		state.added.some(function(product, index) {
			if (product.id === id) {
				// remove item from cart entirely
				if (product.quantity <= count) {
					state.added.splice(index, 1)
				} else {
					// update existing cart item
					product.quantity -= count
				}

				return true
			}
		})
	}
}

export default {
	state,
	mutations
}
