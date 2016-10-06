<template>
<div class="products">
	<h2>Product List</h2>
	<ul>
		<li>foo</li>
		<li>bar</li>
	</ul>
</div>
</template>

<script>
import request from 'superagent'
import store from '../vuex/store'
import baseUrl from '../helpers/baseUrl'

export default {
	name: 'ProductList',

	created: function() {
		this.getProducts()
	},

	ready: function() {

	},

	data: function() {
		return {
			products: []
		}
	},

	computed: {

	},

	watch: {

	},

	methods: {
		getProducts: function() {
			const self = this
			request
				.get(baseUrl() + 'api/products')
				.set('Accept', 'application/json')
				.end(function(err, res) {
					self.products = res.body.data
				})
		}
	}
}
</script>

<style lang="scss" scoped>
	
</style>