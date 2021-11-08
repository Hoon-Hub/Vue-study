<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="past-orders">Past Orders</router-link>
      <button
        @click="toggleSidebar"
        style="position:absolute; top:0; right:0; width:50px; height:50px; margn-right:15px; margin-top:15px;">Cart ({{ totalQuantity }})</button>
    </nav>
  </header>
  <router-view/>
</template>

<style>

</style>
