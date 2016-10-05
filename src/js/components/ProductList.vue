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

export default {
	name: 'ProductList',

	created: function() {

	},

	ready: function() {

	},

	data() {
		return {
			title: String,
			price: Number,
			inventory: Number
		}
	},

	computed: {

	},

	watch: {

	},

	methods: {

	}
}
</script>

<style lang="scss" scoped>
	
</style>