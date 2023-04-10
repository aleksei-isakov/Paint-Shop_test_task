<template>
  <div class="collection-wrapper">
    <div class="product-slider"> </div>
  <Filter/>
  <ProductList/>
  </div>
</template>

<script setup>
import Filter from './Filter.vue'
import ProductList from './ProductList.vue'


</script>

<style scoped>
.collection-wrapper {
  display: grid;
  grid-template-areas: "product-slider product-slider product-slider"
                       "product-filter product-list product-list"
                       "product-filter product-list product-list";
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 25px;
  margin-bottom: 150px;
}

.product-slider {
  height: 560px;
  grid-area: product-slider;
  background-color: green;
}

</style>