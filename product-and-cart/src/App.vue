<template>
  <div style="">
      <button  
        @click="toggleSidebar"
        style="position:absolute; top:0; right:0; width:50px; height:50px; margn-right:15px; margin-top:15px;">Cart ({{ totalQuantity }})</button>
      <h1>Product Lists</h1>
      <div style="display:flex; justify-content:space-evenly;; align-items:space-between; flex-wrap: wrap;">
        <div v-for="(product, i) in inventory" :key="product.id">
          <p><strong>{{ product.name }}</strong></p>
          <p style="text-align:left;">상품분류: {{ product.type }}</p>
          <p style="text-align:left;">상품가격: ${{ product.price.USD }}</p>
          <span>Quantity</span>
          <input type="number" 
            v-model.number="product.quantity" /><br>
          <button @click="addToCart(product.name, i)">Add to Cart</button><br>
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
    <products 
      v-if="showSidebar" 
      :toggle="toggleSidebar" 
      :cart="cart"
      :inventory="inventory"
      :remove="removeItem"
      />
  </div>
</template>

<script>
import Products from './views/products.vue'

export default {
  name: 'App',
  components: {
    Products
  },
  data () {
    return {
      showSidebar: false,
      inventory: [],
      cart: {}
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)

    }
  },
  methods: {
    addToCart( name, index ) {
      if(!this.cart[name]) this.cart[name] = 0
      //receive type and number
      this.cart[name] += this.inventory[index].quantity
      this.inventory[index].quantity = 0
      
    },
    toggleSidebar(){
      this.showSidebar = !this.showSidebar
    },
    removeItem(name){
      delete this.cart[name]
    }
  },
  async mounted () {
    const res = await fetch('/js/food.json', 
        { 
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
       }
      )
    const data = await res.json()
    this.inventory = data
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
