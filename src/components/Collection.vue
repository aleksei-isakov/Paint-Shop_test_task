<template>
  <div class="collection-wrapper">
  <ProductSlider/>
  <Filter/>
  <ProductList/>
  </div>
</template>

<script setup>
import Filter from './Filter.vue'
import ProductList from './ProductList.vue'
import ProductSlider from './ProductSlider.vue'

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

@media (min-width: 320px) and (max-width: 768px) {
  .collection-wrapper {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 320px;
    max-width: 768px;
    width: auto;
  }
}
</style>