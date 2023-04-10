import { defineStore } from 'pinia';
import { ref, computed } from 'vue'
import filterOptions from "../data/filterOptions";

export const useShopStore = defineStore('ShopStore', () => {
    const cart = ref([])
    const productData = ref([])
    const filteredData = ref([])
    const button = ref(null)

    const totalPrice = computed(() => {
        return cart.value.reduce((acc, item) => {
            return acc + Math.trunc(item.quantity * item.price)
        },0)
    })

    const foundProductsCount = computed(() => {
       return filteredData.value.length
    })

    const getData = () => {
       fetch('https://642c583fd7081590f938301f.mockapi.io/shopData')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                else console.log( response.statusText)
            })
            .then(data => {
                productData.value = data
                filteredData.value = productData.value
            })
            .catch(error => console.log(error));
    }

    const onClickFilter = (option) => {
        let currentMethod = option.method
        filterOptions.forEach(el => {
            if (el.isActive.value && currentMethod !== el.method) {
                el.isActive.value = false
            }
        })
        option.isActive.value = !option.isActive.value

        function filter() {
            filteredData.value = productData.value.filter(el => el[currentMethod] === true)
            if (!filterOptions.find(el => el.isActive.value)) {
                filteredData.value = productData.value
            }
        }
        filter()
    }

    const onClickAddToCart = (item) => {
        item.quantity += 1
        if ((cart.value.find((el) => el.id === item.id) === undefined)) {
            cart.value.push(item)
        }
    }

    const onClickCartCountPlus = (item) => {
        item.quantity += 1
    }

    const onClickCartCountMinus = (item) => {
        if (item.quantity) {
            item.quantity -= 1
        }
        if (!item.quantity) {
            cart.value = cart.value.filter(el => el.id !== item.id)
        }
    }

    return {
        cart,
        button,
        productData,
        filteredData,
        getData,
        onClickFilter,
        onClickAddToCart,
        foundProductsCount,
        onClickCartCountPlus,
        onClickCartCountMinus,
        totalPrice
    }
})