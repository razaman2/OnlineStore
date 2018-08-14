<template>
  <q-page padding class="grid-1">
    <q-card flat v-if="hasItems" v-for="(item, index) in items" :key="index" class="grid-2">
      <div class="grid-3">
                <span class="grid-4">
                    <img class="item-image" :src="item.image" style="height: 50px">
                    <p>{{item.description}}</p>
                    <div class="grid-5">
                        <span v-if="item.status">{{item.status}}</span>
                        <span class="text-blue" v-if="item.price"><sup>$</sup>{{currency(item.price)}}</span>
                    </div>
                </span>
        <span class="item-name">
                    <strong>{{item.name}}</strong>
                </span>
        <span class="item-buttons">
                    <q-btn flat label="add to watchlist" color="orange" @click="remove(index)"/>
                    <q-btn flat label="remove" color="red" @click="remove(index)"/>
                </span>
        <q-card-separator/>
      </div>
    </q-card>

    <div class="grid-6" v-if="hasItems">
      <p>
        Total</p>
      <p>
        <sup>$</sup>{{currency(total())}}
      </p>
    </div>

    <q-list>
      <q-collapsible icon="remove_red_eye" label="Watchlist">
        <q-card flat v-for="(watched, index) in watching" :key="index">
          <div>
            {{watched.name}}
          </div>

          <q-card-separator/>

          <div>
            <sup>$</sup>{{currency(watched.price)}}
          </div>

          <q-card-separator/>

          <div>
            {{watched.status}}
          </div>
        </q-card>
      </q-collapsible>
    </q-list>
  </q-page>
</template>

<script>
  import {currency} from '../helpers/currency';

  export default {
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
    },
    methods: {
      remove (index) {
        this.$store.commit('cart/remove', {index});
      },
      total () {
        return this.items.reduce((total, current) => total + current.price, 0);
      },
      currency (value) {
        return currency(value);
      }
    }
  };
</script>

<style scoped>
  .grid-1 {
    display: grid;
    grid-row-gap: 1em;
  }

  .grid-2 {
    display: grid;
  }

  .grid-3 {
    display: grid;
  }

  .grid-4 {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-items: end;
  }

  .item-buttons {
    justify-self: end;
  }

  .item-name {
    padding-top: 1em;
  }

  .item-image {
    justify-self: start;
  }

  .grid-5 {
    display: grid;
  }

  .grid-6 {
    display: grid;
    grid-template-columns: 3fr 1fr;
    justify-items: end;
    margin: 0;
  }
</style>
