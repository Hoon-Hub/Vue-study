<template>
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
</template>

<script>
import food from '../food.json'

export default {
  name: 'Home',
  data () {
    return {
      inventory: food
    }
  },
  components: {
  }
}
</script>
