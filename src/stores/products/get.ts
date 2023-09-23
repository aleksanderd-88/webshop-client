import { defineStore } from "pinia";
import { computed, ref } from "vue";
import PRODUCTS_API from '@/services/products/api'
import { type SingleProductType } from "./types";

const get = defineStore('getProduct', () => {

  const item = ref({} as SingleProductType)
  const product = computed(() => item.value)

  const getProduct = async (id: number) => {
    try {
      const { data } = await PRODUCTS_API.getProduct(id)
      item.value = data
    } catch (error) {
      console.log(`ERROR: ${ error }`);
    }
  }

  return {
    product,
    getProduct
  }
})

export default get