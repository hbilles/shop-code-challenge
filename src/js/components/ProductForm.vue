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
						type="number"
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
				@click="submit">Submit</button>
		</fieldset>
	</div>
</form>
</template>

<script>
import request from 'superagent'
import store from '../vuex/store'
import baseUrl from '../helpers/baseUrl'

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
		baseUrl: function() {
			return baseUrl()
		},

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
		submit: function() {
			request
				.post(`${this.baseUrl}api/products/add`)
				.send(this.postData)
				.set('Accept', 'application/json')
				.end(function(err, res) {
					if (!err) {
						router.push({name: 'productList'})
					} else {
						console.log(err)
					}
				})
		}
	}
}
</script>

<style lang="scss" scoped>
	
</style>