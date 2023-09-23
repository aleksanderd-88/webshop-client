<template>
  <div class="product-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/molecules/Card/ProductCard.vue';
import { useListProducts } from '@/stores/products';
import { computed } from 'vue'

useListProducts().listProducts()

const products = computed(() => useListProducts().products)
</script>

<style lang="scss" scoped>
  .product-list {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 1rem;
  }
</style>