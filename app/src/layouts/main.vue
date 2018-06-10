<template>
    <q-layout
            view="lHh Lpr lFf">
        <!-- Be sure to play with the Layout demo on docs -->

        <!-- (Optional) The Header -->
        <q-layout-header>
            <q-toolbar>
                <q-btn flat
                       round
                       icon="menu"
                       @click="leftDrawer = !leftDrawer"/>
                <q-toolbar-title>
                    Online
                    Store
                    <span slot="subtitle">Shopping is fun...</span>
                </q-toolbar-title>
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
                v-model="leftDrawer">
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
			leftDrawer: {
				get () {
					return this.$store.state.global.leftDrawer;
				},
				set (value) {
					this.$store.commit('global/leftDrawer', {value});
				}
			}
		},
		methods: {}
	};
</script>

<style>
</style>
