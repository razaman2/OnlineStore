<template>
  <q-page>
    <q-card class="q-mt-xl" flat>

      <q-card-title>
        <p>{{productExists ? 'Modify' : 'New'}} Product</p>
      </q-card-title>

      <q-card-separator/>

      <q-card-main>
        <q-input @input="mask(product)" v-model="product.info.name" type="text" float-label="Name" clearable/>
        <q-input class="q-mt-sm" v-model="product.info.description" type="textarea" float-label="Description" clearable/>
        <q-input class="q-mt-sm" v-model="product.info.quantity" type="number" float-label="Quantity"/>
        <q-input class="q-mt-sm" v-model="product.info.price" float-label="Price" type="number"/>
        <q-uploader ref="images" multiple name="product-image" class="q-mt-sm" @uploaded="uploading" @finish="uploaded" :url="product_images_url" hide-upload-button float-label="Images"/>
      </q-card-main>

      <q-card-actions>
        <template v-if="productExists">
          <q-btn class="full-width" label="delete" color="red" @click="remove(product)"/>
          <q-btn class="full-width q-mt-sm" label="save" color="green" @click="update(product)"/>
        </template>
        <q-btn v-else class="fit" label="save" color="green" @click="upload"/>
      </q-card-actions>

    </q-card>
  </q-page>
</template>

<script>
  export default {
    data () {
      return {
        product_images_url: 'http://localhost:8000/api/products/images',
      };
    },
    computed: {
      product () {
        return this.$store.state.products.product;
      },
      productExists () {
        return this.product.hasOwnProperty('id');
      }
    },
    methods: {
      upload () {
        this.$refs.images.upload();
      },
      uploading (file, xhr) {
        this.product.images.push(xhr.response);
      },
      uploaded () {
        console.log('all images uploaded');
        this.$store.dispatch('products/create', {product: this.product});
      },
      update (product) {
        this.$store.dispatch('products/update', {product});
      },
      remove (product) {
        this.$store.dispatch('products/remove', {product});
      },
      mask (product) {
        let val = product.info.name;
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
