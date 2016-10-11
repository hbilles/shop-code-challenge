import Vue from 'vue/dist/vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'
import plugins from './plugins'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

var store = new Vuex.Store({
	actions,
	getters,
	modules: {
		cart,
		products
	},
	plugins,
	strict: debug
})

export default store
