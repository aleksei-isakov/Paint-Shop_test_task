<template>

  <ul class="product-filter">
    <li :key="option.method"
        v-for="option in filterOptions"
        >
      <span
        @click="store.onClickFilter(option)"
        :class="['switch-btn', option.isActive.value ? 'switch-on' : '' ]">
      </span>
      {{option.name}}
    </li>
  </ul>

</template>

<script setup>
import filterOptions from '../data/filterOptions.js'
import { useShopStore } from "../store/ShopStore";

const store = useShopStore()

</script>

<style scoped>
.product-filter {
  list-style: none;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding-left: 64px;
  width: 304px;
  grid-area: product-filter;
  text-transform: uppercase;
}
.switch-btn {
  display: inline-block;
  width: 36px;
  height: 22px;
  border-radius: 12px;
  background: #F2F2F2;
  z-index: 0;
  margin: 0 5px -6px 0;
  padding-top: 10px;
  border: none;
  cursor: pointer;
  position: relative;
  transition-duration: 300ms;
}
.switch-btn::after {
  content: "";
  height: 8px;
  width: 8px;
  border-radius: 18px;
  background: #000000;
  top: 7px;
  left: 5px;
  transition-duration: 300ms;
  box-shadow: 0 0 10px 0 #999999;
  position: absolute;
  z-index: 1;
}
.switch-on {
  background: #7BB899;
  box-shadow: inset 0 0 10px 0 #999999;
}
.switch-on::after {
  left: 22px;
  background: #000000;
}
</style>


