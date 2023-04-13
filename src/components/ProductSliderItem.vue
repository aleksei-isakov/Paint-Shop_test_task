<template>
  <transition>
  <div v-show="slideIndex === item.id" class="slider-wrapper">

    <div class="slider-item">

      <div class="slider-text">
    <h1 class="slider-title">{{item.name}}</h1>
    <h4 class="slider-description">{{item.description}}</h4>
      </div>

    <img class="slider-item_image" :src="image" alt="">
    </div>

  </div>
  </transition>

  <div class="slider-dot-container">
    <div @click="emit('id', 1)" :class="['slider-dot', slideIndex === 1 ? 'active' : '']"></div>
    <div @click="emit('id', 2)" :class="['slider-dot', slideIndex === 2 ? 'active' : '']"></div>
    <div @click="emit('id', 3)" :class="['slider-dot', slideIndex === 3 ? 'active' : '']"></div>
  </div>

</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
    required: true
  },
  slideIndex: {
    type: Number
  }
})

const emit = defineEmits(['id'])

const image = computed(()=> {
  return `src/assets/${props.item.img}`
})

</script>

<style scoped>
.slider-wrapper {
  position: relative;
  height: 560px;
  width: 1920px;
}
.slider-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
}

.slider-text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 129px;
  width: 472px;
  gap: 30px;
}
.slider-title {
  text-align: center;
  z-index: 5;
}
.slider-description {
  text-align: center;
  z-index: 5;
}
.slider-item_image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100%;
  width: 100%;
  transform: scale(1.0, 1.3);
  -ms-transform: scale(1.0, 1.3);
  -webkit-transform: scale(1.0, 1.3);
}

.slider-dot-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 120px;
  height: 35px;
  background-color: rgba(0, 0, 0, .1);
  left: 47%;
  bottom: 16%;
  border-radius: 15px;
}

.slider-dot {
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  height: 7px;
  width: 7px;
  opacity: 10%;
  transition: opacity ease 0.5s;
}

.active {
  opacity: 100%;
}

.v-enter-from {
  font-size: 0;
  width: 0;
}
.v-enter-active {
  transition: all 0.5s ease;
  font-size: 0;
}
.v-enter-to {
  width: 100%;
}

.v-leave-from {
  width: 100%;
  font-size: initial;
}
.v-leave-active {
  transition: all .5s ease;
  font-size: 0;
}
.v-leave-to {
  width: 0;
  font-size: 0;
}

</style>