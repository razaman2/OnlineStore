<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    beforeMount: function () {
      this.$store.dispatch({
        type: 'products/add',
        vue: this
      });
    },
  };
</script>
