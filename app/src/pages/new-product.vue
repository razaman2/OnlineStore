<template>
  <q-page>
    <q-card class="q-mt-xl" flat>
      <q-card-title>
        <p>{{productExists ? 'Modify' : 'New'}} Product</p>
      </q-card-title>
      <q-card-separator/>
      <q-card-main>
        <q-input v-model="product.name" type="text" float-label="Name" clearable/>
        <q-input class="q-mt-sm" v-model="product.description" type="textarea" float-label="Description" clearable/>
        <q-input class="q-mt-sm" v-model="product.quantity" type="number" float-label="Quantity"/>
        <q-input class="q-mt-sm" v-model="product.price" float-label="Price" type="number"/>
        <!--<q-uploader ref="images" multiple name="product-image" class="q-mt-sm" @uploaded="uploading" @finish="uploaded" :url="product_images_url" hide-upload-button float-label="Images"/>-->
      </q-card-main>
      <q-card-actions>
        <template v-if="productExists">
          <q-btn class="full-width" label="delete" color="red" @click="remove(product)"/>
          <q-btn class="full-width q-mt-sm" label="save" color="green" @click="update(product)"/>
        </template>
        <q-btn v-else class="fit" label="save" color="green" @click="create"/>
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
      create () {
        this.$store.dispatch({
          type: 'products/create',
          vue: this,
          product: this.product
        });
      },
      upload () {
        this.$refs.images.upload();
      },
      uploading (file, xhr) {
        this.product.images.push(xhr.response);
      },
      uploaded () {
        this.$store.dispatch('products/create', {product: this.product});
      },
      update (product) {
        this.$store.dispatch({
          type: 'products/update',
          vue: this,
          product
        });
      },
      remove (product) {
        this.$store.dispatch({
          type: 'products/remove',
          vue: this,
          product
        });
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
