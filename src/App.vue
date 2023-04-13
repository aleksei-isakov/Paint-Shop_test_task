<template>
<Header/>
<Collection/>
<Footer/>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Collection from'./components/Collection.vue'
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useShopStore } from '../src/store/ShopStore.js'

const store = useShopStore()

const isMobile = computed(() => {
  return width.value <= 768
})

const width = ref(0)

const updateViewPort = () => {
  width.value = window.outerWidth

  if (isMobile.value) {
    store.isMobile = true
  }
  else store.isMobile = false

}
onMounted(() => {
  window.addEventListener('resize', updateViewPort)
  updateViewPort()
})
onUnmounted(()=> {
  window.removeEventListener('resize', updateViewPort);
})
</script>

