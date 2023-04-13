<template>
  <div class="sort-options-wrapper">
    <p @click="chooseSort(option)" class="sort-option" v-for="option in data">
      {{option.title}}</p>
  </div>

</template>

<script setup>
const props = defineProps({
  data: {
    type: Array
  }
})
const emit = defineEmits(['sortParams'])

const chooseSort = (option) => {
  emit('sortParams', option)
}
</script>

<style scoped>

.sort-options-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 150px;
  background-color: white;
  z-index: 6;
}
.sort-option {
  display: flex;
  padding: 15px;
  align-items: center;
  height: 38px;
}
.sort-option:hover {
  background-color: #7BB899;
}
</style>