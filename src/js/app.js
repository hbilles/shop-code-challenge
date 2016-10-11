import Vue from 'vue/dist/vue'
import Router from 'vue-router'

// tell Vue to use Router
Vue.use(Router)

// import Vue components to route
import App from './components/App.vue'
import store from './store'
import ProductList from './components/ProductList.vue'
import ProductForm from './components/ProductForm.vue'
import Cart from './components/Cart.vue'

// map routes to components
const routes = [
	{
		// App wrapper
		path: '/',
		component: App,
		children: [
			{
				// home
				path: 'products',
				name: 'productList',
				component: ProductList
			},
			{
				// add product form
				path: 'add',
				name: 'addProduct',
				component: ProductForm
			},
			{
				// shopping cart
				path: 'cart',
				name: 'cart',
				component: Cart
			}
		]
	}
]

// initialize and configure new router
const router = new Router({
	mode: 'history',
	routes
})

// start App
const app = new Vue({
	router,
	store
}).$mount('#app')
