<template>
    <q-layout
            view="lHh Lpr lFf">
        <!-- Be sure to play with the Layout demo on docs -->

        <!-- (Optional) The Header -->
        <q-layout-header>
            <q-toolbar
                    inverted>
                <q-btn flat
                       round
                       icon="menu"
                />
                <q-toolbar-title>
                    online
                    store
                    <span slot="subtitle">the place where shopping is fun...</span>
                </q-toolbar-title>
                <q-tabs inverted>
                    <q-route-tab
                            label="products"
                            to="/products"
                            slot="title"
                    />
                </q-tabs>
                <q-btn flat
                       round
                       icon="shopping_cart"
                       @click="$router.push('/cart')">
                    <q-chip v-if="items.length > 0"
                            floating
                            color="red">
                        {{items.length}}
                    </q-chip>
                </q-btn>
            </q-toolbar>
        </q-layout-header>

        <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
        <q-layout-drawer
                side="left"
                v-model="lDrawer">
        </q-layout-drawer>

        <q-page-container>
            <router-view/>
        </q-page-container>

    </q-layout>
</template>

<script>
	export default {
		computed: {
			items: function () {
				return this.$store.state.cart.items;
			},
			watching: function () {
				return this.$store.state.cart.watching;
			},
			lDrawer: {
				get: function () {
					return this.$store.state.global.lDrawer;
				},
				set: function (value) {
					this.$store.commit('global/leftDrawer', {value});
				}
			}
		},
		methods: {}
	};
</script>
