<template>
  <q-page padding>
    <product title="Update-Product" :data="product"/>
  </q-page>
</template>

<script>
  import product
    from '../components/product';

  export default {
    computed: {
      product () {
        return this.$store.getters['products/getProduct'](this.$route.params.id);
      }
    },
    components: {
      product
    }
  };
</script>
