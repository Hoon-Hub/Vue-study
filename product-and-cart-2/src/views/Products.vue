<template>
  <div style="width:500px; margin-left:100px; margin-top:100px;">
      <div style="display:flex; justify-content: space-between; align-items:center; width:100%;" >
        <h1 style="">Products-Profile</h1>&nbsp;
        <button
            @click="toggle"
            style=" width:50px; height:30px; vertical-align:middle;" type="button">close</button>
      </div>
      <div>
        <table>
            <thead>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
                <td></td>
            </thead>
            <tr v-for="( quantity, key, i ) in cart" :key="i">
                <td>{{ key }}</td>
                <td>${{ getPrice(key) }}</td>
                <td>{{ quantity }}</td>
                <td>${{ quantity * getPrice(key) }}</td>
                <td><button
                    @click="remove(key)">
                    Delete</button></td>
            </tr>

            <tfoot>
                <td>Total</td>
                <td>${{ calculateTotal }}</td>
                <td colspan="2">
                    <button>check out</button>
                </td>
            </tfoot>
        </table>
        <p
            v-if="Object.keys(cart).length < 1"
            style="text-align: center;">No items in cart</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
