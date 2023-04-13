<template>
  <div class="product-list_item">

    <div class="product-list_item_image-container">
      <img class="product-list_item-image"
          :src="`${item.avatar}`"
          alt="item-image">
    </div>

    <p class="product-list_item_name">Краска {{item.name}}</p>
    <div class="product-list_item_footer">
      <strong>{{itemPrice}} ₽</strong>
      <button
          v-show="item.quantity === 0"
          :class="['add-to-cart-button']"
          @click="store.onClickAddToCart(item)"
      >
        <span class="add-symbol">+</span>
      </button>

      <div
          v-show="item.quantity !== 0"
          class="add-to-cart-button-alternate-container"
      >
        <button
            @click="store.onClickCartCountMinus(item)"
            class="add-to-cart-button-alternate cart-minus"
        >
          -
        </button>

        <strong
            class="product-item-quantity">
            {{item.quantity}}
        </strong>

        <button
            @click="store.onClickCartCountPlus(item)"
            class="add-to-cart-button-alternate cart-plus"
        >
          +
        </button>

      </div>



    </div>
  </div>

</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useShopStore } from "../store/ShopStore";

const store = useShopStore()

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const itemPrice = computed(() => {
  return Math.trunc(props.item.price)
})

onMounted(()=> {
  props.item['quantity'] = 0
})

</script>

<style scoped>

.product-list_item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 386px;
  width: 294px;
}

.product-list_item_image-container {
  display: flex;
  align-items: center;
  height: 75%;
}

.product-list_item-image {
  width: 100%;
  height: 100%;
}

.product-list_item_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
}
.product-item-quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
}

.add-to-cart-button {
  display: none;
}

.cart-plus {
  animation: split 300ms ease-out;
  transform-origin: right;
}

.cart-minus {
  animation: split 300ms ease-out;
  transform-origin: left;
}

.add-to-cart-button-alternate-container {
  display: flex;
  width: 80px;
}

.add-to-cart-button-alternate {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  height: 32px;
  width: 25px;
  padding: 0;
  background-color: #7BB899;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart-button-alternate:active {
  transform: translate(0px, 1px);
}

.product-list_item:hover
.add-to-cart-button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 32px;
  width: 80px;
  background-color: #7BB899;
  cursor: pointer;
}

.add-symbol {
  position: absolute;
  left: 37%;
  top: -25%;
  height: 0;
  font-size: 30px;
  font-weight: bold;
}

@keyframes split {
  0%{
    transform: scaleX(2);
  }
  100% {
    transform: scaleX(1);
  }
}


@media (min-width: 320px) and (max-width: 768px) {

  .product-list_item {
    height: 300px;
    width: 200px;
  }
}





</style>