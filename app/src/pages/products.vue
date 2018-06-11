<template>
    <q-page padding
            class="product">
        <q-card v-for="(product, index) in products"
                :key="index">
            <q-card-title>
                {{product.name}}
            </q-card-title>
            <q-card-media>
                <img :src="product.image">
            </q-card-media>
            <q-card-main>
                {{product.description}}
            </q-card-main>
            <q-card-separator/>
            <q-card-actions
                    align="end">
                <q-btn flat
                       dense
                       color="secondary"
                       label="add to cart"
                       @click="add(product)"/>
                <q-btn flat
                       dense
                       color="orange"
                       label="watch"
                       @click="watch(product)"/>
            </q-card-actions>
        </q-card>
    </q-page>
</template>

<script>
	export default {
		computed: {
			products: function () {
				return this.$store.state.products.products;
			}
		},
		methods: {
			add: function (product) {
				this.$store.commit('cart/add', {product});
			},
			watch: function (product) {
				this.$store.commit('cart/watch', {product});
			}
		}
	};
</script>

<style scoped>
    .product {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: .5em;
    }
</style>
