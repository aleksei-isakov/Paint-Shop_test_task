<template>
  <div :class="['site-header', store.isMobile ? 'underscored' : '']">
    <div class="burger-menu">
      <img src="../assets/icons/burger.png" alt="">
    </div>
    <img class="site-header_logo"
         src="../assets/site-logo.png"
    />

      <ul class="site-header_navigation">
        <li class="header-navigation_item">Продукты</li>
        <li class="header-navigation_item">Цвета</li>
        <li class="header-navigation_item">Вдохновение</li>
        <li class="header-navigation_item">Советы</li>
        <li class="header-navigation_item">Найти Магазин</li>
      </ul>

    <div class="site-header_contacts">
      <strong>+7(495)221-77-69</strong>
      <p class="feedback-description">Заказать звонок</p>
    </div>

    <div class="site-header_toolbar">
      <button class="header-button search">
        <img class="header-icon"
            src="../assets/icons/search.png" alt="">
      </button>
      <button class="header-button profile">
        <img class="header-icon"
             src="../assets/icons/profile.png" alt="">
      </button>
      <button class="header-button favourites">
        <img class="header-icon"
             src="../assets/icons/favourites.png" alt="">
      </button>
      <button
          class="header-button cart-button"
          @click="onClickOpenCart"
      >
        <img class="cart-icon" src="../assets/icons/cart.png" alt="">
        <strong
            class="cart-icon_count"
            v-show="store.cart.length > 0"
        >
          {{store.cart.length}}
        </strong>
      </button>
    </div>
    <div style="display: flex; gap: 20px; position: absolute; left: 0; bottom: -40px"
         v-if="store.isMobile">
      <p>Главная</p>
      <p>Продукты</p>
      <p>Краски</p>
    </div>

    <Cart @closeCart="isCartOpen = !isCartOpen"
         v-if="isCartOpen"/>

  </div>
</template>

<script setup>
import Cart from './Cart.vue'
import { useShopStore } from "../store/ShopStore";
import { ref } from 'vue'

const onClickOpenCart = () => {
  isCartOpen.value = true
}

const store = useShopStore()

const isCartOpen = ref(false)
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
  list-style: none;
  gap: 25px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.header-navigation_item {

}
.feedback-description {
  font-size: 14px;
  opacity: 30%;
}
.site-header_logo {
  height: 76px;
}
.underscored {
  border-bottom: 2px solid rgba(128,128,128, .2);
  margin: 0 0 100px 0;
  position: relative;
}
.site-header_toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 165px;
}
.header-button {
  padding: 0;
  height: 28px;
  outline: none;
  border: none;
  background-color: transparent;
}
.burger-menu {
  display: none;
}
.cart-icon,
.header-icon{
  height: 29px;
  width: 29px;
}
.cart-button {
  position: relative;
  padding: 0;
  height: 30px;
  width: 30px;
  cursor: pointer;
}
.cart-icon_count {
  position: absolute;
  text-align: center;
  padding-top: 2px;
  top: 0;
  right: 0;
  height: 30px;
  width: 30px;
  background-color: #7BB899;
  border-radius: 50%;
}


@media (min-width: 320px) and (max-width: 768px) {
  .site-header {
    padding: 0;
    width: 100%;
  }
  .burger-menu {
    display: block;
  }
  .site-header_navigation,
  .site-header_contacts,
  .search,
  .profile,
  .favourites {
  display: none;
  }
  .site-header_toolbar {
    width: auto;
  }
}

</style>