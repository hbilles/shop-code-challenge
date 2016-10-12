export const STORAGE_KEY = 'cart'

// initial state
const state = {
	added: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

// mutations
const mutations = {
	ADD_TO_CART(state, { id }) {
		const record = state.added.find(product => product.id === id)
		if (!record) {
			state.added.push({
				id,
				quantity: 1
			})
		} else {
			record.quantity++
		}
	},

	REMOVE_FROM_CART(state, { id }) {
		state.added.some(function(product, index) {
			if (product.id === id) {
				if (product.quantity <= 1) {
					state.added.splice(index, 1)
				} else {
					product.quantity--
				}

				return true
			}
		})
	},

	REMOVE_ALL_FROM_CART(state, { id }) {
		state.added.some(function(product, index) {
			if (product.id === id) {
				state.added.splice(index, 1)

				return true
			}
		})
	}
}

export default {
	state,
	mutations
}
