<template>
  <div class="cart-wrapper" @click="closeModal">
    <div class="cart-container" @click.stop>
      <div class="cart-header">
        <h2>Корзина</h2>
        <button @click="closeModal" class="cart-total-close-button">
          <img src="/src/assets/icons/cart-close.png" alt="">
        </button>
      </div>

      <div v-if="!store.cart.length">
        <h3>Пока пусто</h3>
      </div>

      <div v-else class="cart-body">
        <div class="cart-body-header">
          <p class="cart-items-count">{{cartTotalItemsCount}}</p>
          <p class="cart-empty-button">очистить список</p>
        </div>

        <div :class="['cart-item', item.hasOwnProperty('isRemoved') ? 'disabled-opacity' : '']"
             v-for="item
         in
        store.cart">
          <div class="disabled" v-show="item.hasOwnProperty('isRemoved')"></div>
          <div class="item-image-container">
            <img class="item-image"
                 :src="`${item.avatar}`"
                 alt="item-image">
          </div>
          <div class="cart-item-description">
            <p class="cart-item-description_title">Краска {{item.name}}</p>
            <strong>{{Math.trunc(item.price)}} ₽</strong>
          </div>
          <div class="cart-quantity-container">
            <button
                class="cart-manage-button"
                @click="store.onClickCartCountMinus(item)"> -
            </button>
            <p>{{item.quantity}}</p>
            <button @click="store.onClickCartCountPlus(item)"
                    class="cart-manage-button"> +

            </button>
          </div>
          <div class="remove-button-container">
              <img v-show="!item.hasOwnProperty('isRemoved')"
                   @click="onClickRemoveFromCart(item)"
                   class="remove-button"
                   src="/src/assets/icons/close.png" alt=""
              >
            <img class="reinstate-icon"
                 v-show="item.hasOwnProperty('isRemoved')"
                 @click="onClickRestoreInCart(item)"
                 src="/src/assets/icons/cart-reinstate.png"
                 alt=""
            >
          </div>
        </div>

      </div>
      <div class="cart-footer">
        <div class="cart-footer_total-container">
          <p>Итого</p>
          <strong>{{store.totalPrice}}₽</strong>
        </div>
        <img style="cursor: pointer" src="/src/assets/cart-order.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useShopStore } from "../store/ShopStore";
import { computed } from "vue";
const store = useShopStore()

const closeModal = () => {
  emit('closeCart')
}

const cartTotalItemsCount = computed(() => {
  if (store.totalCartCount === 1) return `${store.totalCartCount} товар`
  if (store.totalCartCount >= 2 && store.totalCartCount <= 4) return`${store.totalCartCount} товара`
  if (store.totalCartCount >= 5) return `${store.totalCartCount} товаров`
})

const onClickRemoveFromCart = (item) => {
 let element = store.cart.find((el) => el.id === item.id)
  element['isRemoved'] = true
}
const onClickRestoreInCart = (item) => {
  let element = store.cart.find((el) => el.id === item.id)
  delete element.isRemoved
}
const emit = defineEmits(['closeCart'])
</script>

<style scoped>
.cart-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(0,0,0, .8);
  z-index: 10;
}
.cart-container {
  height: 100vh;
  width: 500px;
  background-color: white;
  animation: emerge .5s ease;
  display: flex;
  flex-direction: column;
  padding: 30px;
  overflow-y: auto;
}
.reinstate-icon {
  z-index: 11;
  position: absolute;
  top: 40%;
  right: 0;
  cursor: pointer;

}
.cart-manage-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 4px 0;
  margin: 0;
  border: none;
  outline: none;
  background-color: rgba(192,192,192, .4);
  border-radius: 5px;
  width: 35px;
  height: 25px;
}
.disabled {
  padding: 5px;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 90%;
  background-color: transparent;
  z-index: 10;
}
.disabled-opacity {
  opacity: 50%;
}
.cart-total-close-button {
  border: none;
  outline: none;
}

.remove-button-container {
  display: flex;
  align-items: center;

}
.cart-item-description_title {
  max-height: 72px;
  width: 122px;
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-body-header {
  display: flex;
  justify-content: space-between;
}
.remove-button {
  height: 20px;
  width: 20px;
  cursor: pointer;
}

.cart-footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart-footer_total-container {
  display: flex;
  flex-direction: column;
}

.cart-item {
  position: relative;
  border-top: 2px solid rgba(192,192,192, .4);
  padding: 20px 0 ;
  display: flex;
  gap: 20px;
}

.item-image-container {
  height: 100px;
  width: 120px;
}

.item-image {
  height: 100px;
  width: 120px;
}

.cart-item-description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cart-quantity-container {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
}

@keyframes emerge {
  0% {
    transform: translateX(500px);
  }
  100%{
    transform: translateX(0);
  }
}
</style>