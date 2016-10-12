<template>
<div>
	<h2>Shopping Cart</h2>
	<section class="cart">
		<header class="cart__header">
			<span class="cart__header__title">Item</span>
			<span class="cart__header__quantity">Quantity</span>
			<span class="cart__header__price">Price</span>
			<span class="cart__header__spacer"></span>
		</header>
		
		<div class="item"
			v-for="item in cartProducts">
			<span class="item__title">{{ item.title }}</span>
			<span class="item__quantity">
				<span class="item__quantity__number">{{ item.quantity }}</span>

				<span class="item__quantity__buttons button-group">
					<button
						@click="removeFromCart(item)"
						class="button button--small button--solid item__remove-from-cart">-</button>
					<button
						:disabled="!item.inventory"
						@click="addToCart(item)"
						class="button button--small button--solid item__add-to-cart">+</button>
				</span>
			</span>
			<span class="item__price">${{ item.price }}</span>
			<span class="item__action">
				<button
					@click="removeAllFromCart(item)"
					class="button button--solid button--round button--small item__remove-all-from-cart">
						<span>x</span>
					</button>
			</span>
		</div>

		<div class="cart__total">
			<span class="cart__total__label">Total:</span>
			<span class="cart__total__spacer"></span>
			<span class="cart__total__price">${{ total }}</span>
			<span class="cart__total__spacer"></span>
		</div>
	</section>
</div>
</template>

<script>
import {
	mapGetters,
	mapActions
} from 'vuex'

export default {
	name: 'Cart',

	created: function() {
		if (!this.$store.getters.allProducts.length) {
			this.$store.dispatch('getAllProducts')
		}
	},

	computed: {
		...mapGetters([
			'cartProducts'
		]),

		total: function() {
			if (this.cartProducts.length && this.cartProducts[0].price) {
				return this.cartProducts.reduce((pre, cur) => {
					return pre + (cur.price * cur.quantity)
				}, 0)
			} else {
				return 0
			}
		}
	},

	methods: {
		...mapActions([
			'addToCart',
			'removeFromCart',
			'removeAllFromCart'
		])
	}
}
</script>

<style lang="scss" scoped>
	@import '../helpers/vars.scss';

	.cart {
		display: table;
		width: 100%;

		&__header {
			display: table-row;

			&__title,
			&__price,
			&__quantity {
				display: table-cell;
				padding: .5em 0;
			}

			&__title {
				width: 50%;
			}

			&__quantity {
				text-align: center;
			}
		}

		&__total {
			display: table-row;

			&__label,
			&__price,
			&__spacer {
				display: table-cell;
				padding: .5em 0;
				border-top: 1px solid rgba(0, 0, 0, .4);
			}

			&__label {
				width: 50%;
			}

			&__price {
				font-weight: 700;
			}
		}
	}

	.item {
		display: table-row;
		padding: .5em 1em;

		&__title,
		&__quantity,
		&__price,
		&__action {
			display: table-cell;
			vertical-align: middle;
			padding: .5em 0;
			border-top: 1px solid rgba(0, 0, 0, .1);
		}

		&__title {
			width: 50%;
			font-weight: 700;
		}

		&__quantity {
			text-align: center;

			&__number {
				display: block;
			}
		}

		&__add-to-cart,
		&__remove-from-cart,
		&__remove-all-from-cart {
			font-weight: 700;
		}
	}
</style>