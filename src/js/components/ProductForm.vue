<template>
<form class="product-form">
	<div class="questions">
		<h2>Add Product</h2>

		<fieldset>
			<ol>
				<li class="textfield textfield--full-width textfield--floating-label">
					<input
						type="text"
						class="textfield__input"
						id="title"
						name="title"
						v-model="title">
					<label class="textfield__label" for="title">Product Name</label>
				</li>

				<li class="textfield textfield--full-width textfield--floating-label">
					<input
						type="number"
						class="textfield__input"
						id="price"
						name="price"
						v-model="price">
					<label class="textfield__label" for="price">Price ($)</label>
				</li>

				<li class="textfield textfield--full-width textfield--floating-label">
					<input
						type="number"
						class="textfield__input"
						id="inventory"
						name="inventory"
						v-model="inventory">
					<label class="textfield__label" for="inventory">Inventory</label>
				</li>
			</ol>
		</fieldset>
	</div>
</form>
</template>

<script>
import request from 'superagent'
import store from '../vuex/store'

export default {
	name: 'ProductForm',

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