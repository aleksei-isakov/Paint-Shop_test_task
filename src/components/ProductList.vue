<template>
  <div class="product-list">

    <div v-if="isModal" class="background-dim"></div>

    <h1 v-if="store.isMobile"
        class="mobile-section-title"
    >
      Краски
    </h1>
    <div class="product-list_header">

      <p  v-if="!store.isMobile"
          class="product-list_header_product-quantity">
        {{store.foundProductsCount}} товаров
        </p>

      <p v-else
          class="product-list_header_product-quantity">
          фильтры
      </p>

      <div @click="openSortingModal"
          class="product-list_header_filter"> {{currentSortTitle}}
        <img src="../assets/icons/list-trigger.png"
             alt="">
          <SortOptions
              @click.stop
              v-if="isModal"
              :data="sortingMethods"
              @sortParams="getSortData"
          />
      </div>

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
import SortOptions from './SortOptions.vue'
import Modal from './Modal.vue'
import { onMounted, ref, watch } from 'vue'
import { useShopStore } from "../store/ShopStore";

const sortingMethods = ref([
    {id: 1, option: 'cheap', title: 'СНАЧАЛА НЕДОРОГИЕ'},
    {id: 2, option: 'expensive', title: 'СНАЧАЛА ДОРОГИЕ'},
    {id: 3, option: 'popular', title: 'СНАЧАЛА ПОПУЛЯРНЫЕ'},
    {id: 4, option: 'new', title: 'СНАЧАЛА НОВЫЕ'},
])
const currentSortTitle = ref('Сортировка...')
const currentSortType = ref('cheap')

const store = useShopStore()

const isModal = ref(false)

const openSortingModal = () => {
  isModal.value = true
}
const getSortData = (option) => {
  isModal.value = false
  currentSortTitle.value = option.title
  currentSortType.value = option.option
  sortData()
}

const sortData = () => {
  switch (currentSortType.value) {
    case 'cheap': store.filteredData = store.filteredData.sort((a , b) => {
      return a.price - b.price
    })
      break;
    case "expensive": store.filteredData = store.filteredData.sort((a , b) => {
      return b.price - a.price
    })
      break
    case "new": store.filteredData = store.filteredData.sort((a , b) => {
      return new Date(a.receivedDate) - new Date(b.receivedDate)
    })
      break
    case "popular": store.filteredData = store.filteredData.sort((a , b) => {
      return a.popularity - b.popularity
    })
      break
  }
}

onMounted(() => {
    store.getData()
})

watch(()=> store.filteredData, ()=> {
  sortData()
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
.product-list_header_filter {
  cursor: pointer;
  position: relative;
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

.background-dim {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vw;
  background-color: rgba(0,0,0, .8);
  z-index: 5;
}


@media (min-width: 320px) and (max-width: 768px) {

  .product-list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
    min-width: 320px;
    max-width: 768px;
    width: auto;
  }
  .product-list_items-container {
    justify-content: center;
    height: auto;
    margin-bottom: 50px;
  }
  .mobile-section-title {
    font-family: Roboto Light;
  }
}
</style>