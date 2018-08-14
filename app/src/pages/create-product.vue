<template>
  <q-page padding>
    <product title="Create-Product"/>
  </q-page>
</template>

<script>
  import product
    from '../components/product';

  export default {
    components: {
      product
    },
    methods: {
      mask (product) {
        let val = create.info.name;
        if(val.match(/\d$/)) {
          // if(!val.match(/^\(/))
          val = val.replace(/(\d{1,2})/, `(` + '$1');
          // if(val.match(/\(\d{3}$/))
          val = val.replace(/(\d{3})/, '$1' + `) `);
          // if(!val.match(/\(\d{3}\)/))
          val = val.replace(/(\d{3}\)\s\d{3})/, '$1' + `-`);
          // if(val.match(/-$/))
          val = val.replace(/(\d{3}\)\s\d{3}-\d{4})/, '$1');
        }
        console.log(val);
      }
    }
  };
</script>
