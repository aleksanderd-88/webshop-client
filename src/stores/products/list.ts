import { defineStore } from "pinia";
import { computed, ref } from "vue";
import PRODUCTS_API from '@/services/products/api'
import { type ProductsType } from "./types";

const list = defineStore('listProducts', () => {

  const items = ref([] as ProductsType)
  const products = computed(() => items.value)

  const listProducts = async (offset = 0) => {
    try {
      const { data } = await PRODUCTS_API.listProducts(offset)
      items.value = data
    } catch (error) {
      console.log(`ERROR: ${ error }`);
    }
  }

  return {
    products,
    listProducts
  }
})

export default list