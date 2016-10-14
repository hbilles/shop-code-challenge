// initial state
const state = {
	all: []
}

// mutations
const mutations = {
	RECEIVE_PRODUCTS(state, { products }) {
		state.all = products
	},

	ADD_TO_CART(state, { id, inventory }) {
		state.all.find(product => product.id === id).inventory = inventory
	},

	REMOVE_FROM_CART(state, { id, inventory }) {
		state.all.find(product => product.id === id).inventory = inventory
	}
}

export default {
	state,
	mutations
}
