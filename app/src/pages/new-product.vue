<template>
    <q-page padding>
        <q-card flat>
            <q-card-title>
                New
                Product
            </q-card-title>
        </q-card>
        <q-card-separator/>
        <q-card-main>
            <q-input
                    v-model="product.name"
                    type="text"
                    float-label="Name"
                    clearable
            />
            <q-input
                    v-model="product.description"
                    type="textarea"
                    float-label="Description"
                    clearable
            />
            <q-input
                    v-model="product.quantity"
                    type="number"
                    float-label="Quantity"
            />
            <q-input
                    v-model="product.price"
                    float-label="Price"
                    type="number"
            />
            <q-uploader
                    :url="product.image"
                    hide-upload-button
                    float-label="Images"
            />
        </q-card-main>
        <q-card-actions>
            <q-btn v-if="product.id === null"
                   flat
                   label="save"
                   color="green"
                   @click="create(product)"></q-btn>
            <template
                    v-else>
                <q-btn flat
                       label="delete"
                       color="red"
                       @click="remove(product)"></q-btn>
                <q-btn flat
                       label="update"
                       color="orange"
                       @click="update(product)"></q-btn>
            </template>
        </q-card-actions>
    </q-page>
</template>

<script>
	export default {
		computed: {
			product: function () {
				return this.$store.state.products.product;
			}
		},
		methods: {
			create: function (product) {
				this.$store.dispatch('products/create', {product});
			},
			update: function (product) {
				this.$store.dispatch('products/update', {product});
			},
			remove: function (product) {
				this.$store.dispatch('products/remove', {product});
			}
		}
	};
</script>

<style>
</style>
