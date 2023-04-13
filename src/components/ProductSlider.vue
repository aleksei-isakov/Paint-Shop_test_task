<template>
  <div class="product-slider" >
  <ProductSliderItem v-for="item in sliderItems"
                     :slideIndex="currentSlideIndex"
                     :item="item"
                     @id="showId"
  />
    <button v-show="currentSlideIndex > 1"
            @click="onClickPreviousSlide"
            class="slider-button prev">
       <img class="arrow-icon"
             src="../assets/icons/arrow-prev.png"
            alt="">
    </button>

    <button v-show="currentSlideIndex < 3"
            @click="onClickNextSlide"
            class="slider-button next">
        <img class="arrow-icon"
            src="../assets/icons/arrow-next.png"
            alt="">
    </button>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductSliderItem from './ProductSliderItem.vue'
import sliderItems from "../data/sliderItems.js";

const currentSlideIndex = ref(1)

const onClickNextSlide = () => {
  if (currentSlideIndex.value < sliderItems.value.length)
    currentSlideIndex.value += 1
}

const onClickPreviousSlide = () => {
  if (currentSlideIndex.value > 1)
    currentSlideIndex.value -= 1
}
const showId = (id) => {
  currentSlideIndex.value = id
}

</script>

<style scoped>
.product-slider {
  position: relative;
  display: flex;
  height: 560px;
  overflow: hidden;
  grid-area: product-slider;
  background-color: green;
  transition: all ease 2s;
}
.slider-button {
  position: absolute;
  border: none;
  outline: none;
  height: 60px;
  width: 30px;
  padding: 0;
}
.prev {
  top: 65%;
  left: 15%;
}
.next {
  top: 65%;
  right: 15%;
}
.arrow-icon {
  height: 40px;
  width: 30px;
}

@media (min-width: 320px) and (max-width: 768px) {
  .product-slider {
    display: none;
  }

}
</style>