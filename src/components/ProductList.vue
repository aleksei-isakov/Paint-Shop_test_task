<template>
  <div class="product-list">
    <div class="product-list_header">
      <p class="product-list_header_product-quantity">
        {{store.foundProductsCount}} товаров
        </p>
      <div class="product-list_header_filter"> МЕТОДЫ ФИЛЬТРАЦИИ {{store.totalPrice}} </div>
    </div>
    <div class="product-list_items-container">
      <ProductListItem
          v-for="item in store.filteredData"
          :key="item.id"
          :item="item"/>
    </div>
  </div>
</template>

<script setup>
import ProductListItem from './ProductListItem.vue';
import { onMounted } from 'vue'
import { useShopStore } from "../store/ShopStore";

const store = useShopStore()

onMounted(() => {
    store.getData()
})

</script>

<style scoped>
.product-list {
  grid-area: product-list;
  margin-right: 64px;
  width: 1551px;
}
.product-list_header {
  display: flex;
  justify-content: space-between;
  height: 30px;
}
.product-list_items-container {
  display: flex;
  flex-wrap: wrap;
  height: 120px;
  gap: 20px;
}
.product-list_header_product-quantity {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 550;
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
</style>