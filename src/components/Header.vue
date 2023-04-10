<template>
  <div class="site-header">

    <div class="site-header_logo">
      COLORS
    </div>


      <ul class="site-header_navigation">
        <li class="header-navigation_item">Продукты</li>
        <li class="header-navigation_item">Цвета</li>
        <li class="header-navigation_item">Вдохновение</li>
        <li class="header-navigation_item">Советы</li>
        <li class="header-navigation_item">Найти Магазин</li>
      </ul>


    <div class="site-header_contacts">
      <strong>+7(495)221-77-69</strong>
      <p>Заказать звонок</p>
    </div>

    <div class="site-header_toolbar">
      <p>&times</p>
      <p>&times</p>
      <p>&times</p>
      <div
          class="cart-button"
          @click="onClickOpenCart"
      >
        <img class="cart-icon" src="../assets/icons/cart.png" alt="">
        <strong
            class="cart-icon_count"
            v-show="store.cart.length > 0"
        >
          {{store.cart.length}}
        </strong>
      </div>
    </div>


  </div>
</template>

<script setup>
import { useShopStore } from "../store/ShopStore";

const onClickOpenCart = () => {
  console.log('opened')
}

const store = useShopStore()

</script>

<style scoped>
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
  height: 104px;
}
.site-header_navigation {
  display: flex;
}
.site-header_toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 165px;
}
.cart-icon {
  height: 29px;
  width: 29px;
}
.cart-button {
  position: relative;
  height: 30px;
  width: 30px;
  cursor: pointer;
}
.cart-icon_count {
  position: absolute;
  text-align: center;
  padding-top: 2px;
  top: 1px;
  right: 2px;
  height: 30px;
  width: 30px;
  background-color: #7BB899;
  border-radius: 50%;
}

</style>