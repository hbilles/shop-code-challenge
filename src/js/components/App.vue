<template>
<div>
	<header class="header">
		<h1>Shop!</h1>
		<nav class="menu">
			<ul>
				<li>
					<router-link :to="{name: 'productList'}">Products</router-link>
				</li>
				<li>
					<router-link :to="{name: 'productList'}">Shopping Cart</router-link>
				</li>
				<li>
					<router-link :to="{name: 'addProduct'}">Add Product</router-link>
				</li>
			</ul>
		</nav>
	</header>

	<main id="content">
		<p>Main content area.</p>
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
	
</style>
