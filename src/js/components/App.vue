<template>
<div>
	<header class="header">
		<h1 class="site-name">
			<router-link :to="{name: 'productList'}">Shop!</router-link>
		</h1>
		<nav class="menu">
			<ul class="menu__list">
				<li class="menu__item">
					<router-link
						class="menu__link"
						:to="{name: 'productList'}">All Products</router-link>
				</li>
				<li class="menu__item">
					<router-link
						class="menu__link"
						:to="{name: 'cart'}">Shopping Cart</router-link>
				</li>
				<li class="menu__item">
					<router-link
						class="menu__link"
						:to="{name: 'addProduct'}">Add Product</router-link>
				</li>
			</ul>
		</nav>
	</header>

	<main class="content">
			<router-view></router-view>
	</main>
</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="scss" scoped>
	@import '../helpers/vars.scss';

	.header {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		padding: .5em 1em;

		@include media($medium) {
			padding: 1em 2em;
		}
	}

	.site-name {
		margin: 0;
	}

	.menu {
		&__list {
			display: flex;
			list-style: none;
			padding: 0;
			margin: 0;
		}

		&__link {
			display: block;
			padding: .25em .5em;

			&.router-link-active {
				&:link,
				&:visited {
					color: $clr-black;
					text-decoration: underline;
				}
			}
		}
	}

	.content {
		padding: 1em;

		@include media($medium) {
			padding: 2em;
		}
	}
</style>
