<template>
  <q-page padding class="product">
    <q-card v-for="(product, index) in products" :key="index">

      <q-card-title>
        <div class="product-title">
          {{product.name | truncate}}
          <q-icon class="icon" name="menu" @click.native="modify(product) $router.push('/new-product');"/>
        </div>
      </q-card-title>

      <q-card-media>
        <q-carousel arrows quick-nav color="white" height="300px">
          <q-carousel-slide v-for="(image, index) in product.images" :key="index" :img-src="image.path"/>
        </q-carousel>
      </q-card-media>

      <q-card-main>
        <p>
          {{product.description}}</p>
      </q-card-main>

      <q-card-main>
        <p v-if="product.price" class="row justify-between">
          <span><sup>$</sup>{{currency(product.price)}}</span>
          <span>{{product.status}}</span>
        </p>
      </q-card-main>

      <q-card-actions align="end">
        <q-btn flat dense color="secondary" label="add to cart" @click="add(product)"/>
        <q-btn flat dense color="orange" label="watch" @click="watch(product)"/>
      </q-card-actions>

    </q-card>
  </q-page>
</template>

<script>
  import {currency} from '../helpers/currency';

  export default {
    computed: {
      products () {
        return this.$store.state.products.products;
      },
      properties () {
        return this.products.map(product => {
          return {id: product.id};
        });
      }
    },
    methods: {
      add (product) {
        this.$store.commit('cart/add', {product});
      },
      watch (product) {
        this.$store.commit('cart/watch', {product});
      },
      modify (product) {
        this.$store.commit('products/set', {product});
      },
      currency (value) {
        return currency(value);
      }
    },
    filters: {
      truncate (value) {
        if(value.length > 26) {
          value = `${value.substring(0, 26)}...`;
        }
        return value;
      }
    }
  };
</script>

<style scoped>
  .product {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1em;
  }

  .product-title {
    display: grid;
    grid-template-columns: 1fr 2em;
  }

  .product-title .icon {
    justify-self: end;
  }
</style>
