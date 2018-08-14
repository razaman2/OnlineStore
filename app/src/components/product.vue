<template>
  <q-card class="q-mt-xl" flat>
    <q-card-title>
      <h4>{{title ? title : 'Default-Title'}}</h4>
    </q-card-title>
    <q-card-separator/>
    <q-card-main>
      <q-input v-model="product.name" type="text" float-label="Name" clearable/>
      <q-input class="q-mt-sm" v-model="product.description" type="textarea" float-label="Description" clearable/>
      <q-input class="q-mt-sm" v-model="product.quantity" type="number" float-label="Quantity"/>
      <q-input class="q-mt-sm" v-model="product.price" float-label="Price" type="number"/>
      <q-uploader multiple name="product-image" class="q-mt-sm" @add="store" url="" hide-upload-button float-label="Images"/>
    </q-card-main>
    <q-card-actions>
      <template v-if="productExists">
        <q-btn class="full-width" label="delete" color="red" @click="remove"/>
        <q-btn class="full-width q-mt-sm" label="save" color="green" @click="update"/>
      </template>
      <q-btn v-else class="fit" label="save" color="green" @click="create"/>
    </q-card-actions>
  </q-card>
</template>

<script>
  export default {
    data () {
      return {
        product: this.data ? this.data : {
          name: null,
          description: null,
          price: null,
          quantity: 1,
          images: []
        }
      };
    },
    computed: {
      productExists () {
        if(this.product.hasOwnProperty('id')) {
          return this.product.id !== null;
        } else {
          return false;
        }
      }
    },
    methods: {
      store (files) {
        this.$store.dispatch({
          type: 'products/images',
          vue: this,
          file: files[0]
        }).then(url => {
          this.product.images.push(url);
        });
      },
      create () {
        this.$store.dispatch({
          type: 'products/create',
          vue: this,
          product: this.product
        });
        this.reset();
      },
      update () {
        this.$store.dispatch({
          type: 'products/update',
          vue: this,
          product: this.product
        });
        this.$router.push('/products');
      },
      remove () {
        this.$store.dispatch({
          type: 'products/remove',
          vue: this,
          product: this.product
        });
        this.$router.push('/products');
      },
      reset () {
        for(let index in this.product) {
          if(index === 'images') {
            this.product[index] = [];
          } else if(index === 'quantity') {
            this.product[index] = 1;
          } else {
            this.product[index] = null;
          }
        }
      }
    },
    props: ['title', 'data']
  };
</script>
