<template>
  <div style="display:flex">
      <div>
        <p>Carrots</p>
        <span>Quantity</span>
        <input type="number" 
          v-model.number="inventory.carrots" /><br>
        <button @click="addToCart('carrots', inventory.carrots)">Add to Cart</button>
      </div>
      <div>
        <p>pineapples</p>
        <span>Quantity</span>
        <input type="number" v-model.number="inventory.pineapples" />
        <button @click="addToCart('pineapples', inventory.pineapples)">Add to Cart</button>

      </div>
      <div>
        <p>cherries</p>
        <span>Quantity</span>
        <input type="number" v-model.number="inventory.cherries" />
        <button @click="addToCart('cherries', inventory.cherries)">Add to Cart</button>

      </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      inventory: {
        carrots: 3,
        pineapples: 1,
        cherries: 0,
      },
      cart: {
        carrots: 0,
        pineapples: 0,
        cherries: 0,
      }
    }
  },
  methods: {
    addToCart( type ) {
      //receive type and number
      this.cart[type] += this.inventory[type]
      console.log(this.cart)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
