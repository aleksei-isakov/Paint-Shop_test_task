<template>
  <div class="modal-wrapper">
    <div >
      <Filter v-if="option === 'filter'"/>
      <SortOptions class="slot-wrapper" :data="data" v-if="option === 'sort'"/>
    </div>

  </div>
</template>

<script setup>
import {onMounted} from 'vue'
import Filter from './Filter.vue'
import SortOptions from './SortOptions.vue'
const props = defineProps({
  option: {
    type: String
  },
  data: {
    type: Array
  }
})
onMounted(() => {
  console.log(props.option)
})
</script>

<style scoped>
.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0, .8);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
}
.slot-wrapper {
  height: 300px;
  width: 300px;
  background-color: white;
}
</style>