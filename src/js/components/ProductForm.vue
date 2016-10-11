<template>
<form class="product-form">
	<div class="questions">
		<h2>Add Product</h2>

		<fieldset>
			<ol>
				<li class="question question--hide-label">
					<label class="question__label" for="title">Product Name</label>
					<input
						type="text"
						class="question__input"
						id="title"
						name="title"
						placeholder="Product Name"
						v-model="title">
				</li>

				<li class="question question--hide-label">
					<label class="question__label" for="price">Price ($)</label>
					<input
						type="text"
						class="question__input"
						id="price"
						name="price"
						placeholder="Price ($)"
						v-model="price">
				</li>

				<li class="question question--hide-label">
					<label class="question__label" for="inventory">Inventory</label>
					<input
						type="number"
						class="question__input"
						id="inventory"
						name="inventory"
						placeholder="Inventory"
						v-model="inventory">
				</li>
			</ol>

			<button
				class="button button--outlined button--colored"
				@click="submitForm($event)">Submit</button>
		</fieldset>
	</div>
</form>
</template>

<script>
import shop from '../api/shop'

export default {
	name: 'ProductForm',

	created: function() {

	},

	ready: function() {

	},

	data: function() {
		return {
			title: '',
			price: '',
			inventory: ''
		}
	},

	computed: {
		postData: function() {
			return {
				title: this.title,
				price: this.price,
				inventory: this.inventory
			}
		}
	},

	watch: {

	},

	methods: {
		submitForm: function(e) {
			const self = this

			// prevent form from submitting
			// as we want to post via AJAX
			e.preventDefault()

			// set up the cb
			function pushRoute() {
				return self.$router.push({name: 'productList'})
			}

			// save the product to server
			shop.saveProduct(this.postData, pushRoute)
		}
	}
}
</script>

<style lang="scss" scoped>
	
</style>