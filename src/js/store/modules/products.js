// initial state
const state = {
	all: []
}

// mutations
const mutations = {
	// add products from server to app store
	RECEIVE_PRODUCTS(state, { products }) {
		state.all = products
	},

	// update product inventory from server
	ADD_TO_CART(state, { id, inventory }) {
		state.all.find(product => product.id === id).inventory = inventory
	},

	// update product inventory from server
	REMOVE_FROM_CART(state, { id, inventory }) {
		state.all.find(product => product.id === id).inventory = inventory
	}
}

export default {
	state,
	mutations
}
