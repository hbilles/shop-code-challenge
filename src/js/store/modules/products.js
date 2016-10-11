// initial state
const state = {
	all: []
}

// mutations
const mutations = {
	RECEIVE_PRODUCTS(state, { products }) {
		state.all = products
	},

	ADD_TO_CART(state, { id }) {
		state.all.find(product => product.id === id).inventory--
	},

	REMOVE_FROM_CART(state, { id }) {
		state.all.find(product => product.id === id).inventory++
	}
}

export default {
	state,
	mutations
}
