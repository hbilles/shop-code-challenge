<template>
<form class="product-form">
	<div class="questions">
		<h2>Add Product</h2>

		<fieldset>
			<ol>
				<li class="question">
					<label class="question__label" for="title">Product Name</label>
					<input
						type="text"
						class="question__input"
						id="title"
						name="title"
						v-model="title">
					<label
						class="error"
						for="title"
						v-if="titleError">{{ titleError }}</label>
				</li>

				<li class="question">
					<label class="question__label" for="price">Price ($)</label>
					<input
						type="text"
						class="question__input"
						id="price"
						name="price"
						v-model="price">
					<label
						class="error"
						for="price"
						v-if="priceError">{{ priceError }}</label>
				</li>

				<li class="question">
					<label class="question__label" for="inventory">Inventory</label>
					<input
						type="number"
						class="question__input"
						id="inventory"
						name="inventory"
						v-model="inventory">
					<label
						class="error"
						for="title"
						v-if="inventoryError">{{ inventoryError }}</label>
				</li>
			</ol>

			<button
				class="button button--solid"
				@click="submitForm($event)">Submit</button>
		</fieldset>
	</div>
</form>
</template>

<script>
import shop from '../api/shop'

export default {
	name: 'ProductForm',

	data: function() {
		return {
			title: '',
			price: '',
			inventory: '',
			validate: false
		}
	},

	computed: {
		postData: function() {
			return {
				title: this.title,
				price: this.price,
				inventory: this.inventory
			}
		},

		titleError: function() {
			return (!this.title.length && this.validate) ? 'Please enter the title of this product' : false
		},

		priceError: function() {
			if (!this.price.length && this.validate) {
				return 'Please enter a numeric price in dollars'
			} else if (isNaN(this.price) && this.validate) {
				return 'Please enter a number (no currency symbols, etc.)'
			} else {
				return false
			}
		},

		inventoryError: function() {
			if (!this.inventory.length && this.validate) {
				return 'Please enter the number of items for this product'
			} else if (isNaN(this.price) && this.validate) {
				return 'Please enter a number'
			} else {
				return false
			}
		},

		hasErrors: function() {
			return (this.titleError || this.priceError || this.inventoryError) ? true : false
		}
	},

	methods: {
		submitForm: function(e) {
			const self = this

			// prevent form from submitting
			// as we want to post via AJAX
			e.preventDefault()

			// validate the fields
			this.check()

			// if there are no errors, submit the form
			if (!this.hasErrors) {
				// set up the cb
				function pushRoute() {
					return self.$router.push({name: 'productList'})
				}

				// set up the errorCb
				function errorCb(err) {
					console.log(err)
				}

				// save the product to server
				shop.saveProduct(this.postData, pushRoute, errorCb)
			}
		},

		check: function() {
			this.validate = true
		}
	}
}
</script>

<style lang="scss" scoped>
	
</style>