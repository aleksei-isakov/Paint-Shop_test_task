import {ref} from 'vue'

const filterOptions = [
    {
        name: "новинки",
        method: "new",
        isActive: ref(false)
    },
    {
        name: "есть в наличии",
        method: "inStock",
        isActive: ref(false)
    },
    {
        name: "контрактные",
        method: "contract",
        isActive: ref(false)
    },
    {
        name: "эксклюзивные",
        method: "exclusive",
        isActive: ref(false)
    },
    {
        name: "распродажа",
        method: "sale",
        isActive: ref(false)
    },
]

export default filterOptions