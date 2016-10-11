<template>
<div>
	<h2>Product List</h2>
	<ul class="products">
		<li class="product"
			v-for="product in products">
			<div class="product__info">
				<span class="product__title">{{ product.title }}</span>
				<span class="product__price">${{ product.price }}</span>
			</div>
			<button
				:disabled="!product.inventory"
				@click="addToCart(product)"
				class="button button--solid product__add-to-cart">Add to Cart</button>
		</li>
	</ul>
</div>
</template>

<script>
import {
	mapGetters,
	mapActions
} from 'vuex'

export default {
	name: 'ProductList',

	created: function() {
		this.$store.dispatch('getAllProducts')
	},

	computed: {
		...mapGetters({
			products: 'allProducts'
		})
	},

	methods: {
		...mapActions([
			'addToCart'
		])
	}
}
</script>

<style lang="scss" scoped>
	@import '../helpers/vars.scss';

	.products {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		margin: 0 0 0 -1rem;
		width: calc(100% + 1rem);
		padding: 0;
	}

	.product {
		@include shadow-2dp-alt();

		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		width: 18rem;
		margin: 0 0 1em 1em;
		padding: .5em 1em;

		&__info {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			width: 100%;
			margin: 0 0 .5rem;
		}

		&__title,
		&__price {
			display: block;
		}

		&__title {
			font-weight: 700;
		}
	}
</style>