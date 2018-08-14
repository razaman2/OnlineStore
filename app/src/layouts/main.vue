<template>
  <q-layout view="Lhh lpR ffr">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header>
      <q-toolbar inverted>
        <q-btn flat round icon="menu" @click="leftDrawer = !leftDrawer"/>
        <q-toolbar-title>
          Online-Store
        </q-toolbar-title>
        <!--<q-search v-model="search" color="none" />-->
        <q-tabs inverted>
          <q-route-tab label="products" to="/products" slot="title"/>
          <q-route-tab label="new" to="/product/new" slot="title"/>
        </q-tabs>
        <q-btn flat round icon="shopping_cart" @click="$router.push('/cart')">
          <q-chip v-if="hasItems" floating color="red">
            {{items.length}}
          </q-chip>
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-layout-drawer side="left" v-model="leftDrawer"></q-layout-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
  export default {
    data () {
      return {
        search: null,
        leftDrawer: false
      };
    },
    computed: {
      items () {
        return this.$store.state.cart.items;
      },
      watching () {
        return this.$store.state.cart.watching;
      },
      hasItems () {
        return this.items.length > 0;
      }
    }
  };
</script>
