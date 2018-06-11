<template>
    <div id="q-app">
        <router-view/>
    </div>
</template>

<script>
	export default {
		name: 'App',
		beforeCreate: function () {
			this.$store.dispatch('products/getProducts');
		}
	};
</script>
