<template>
  <div class="product-card">
    <img 
      class="product-card__image" 
      :src="get(product, 'category.image', '')" 
      :alt="get(product, 'description', '')" 
    />

    <section class="product-card__specifications">
      <h1 class="product-card__headline">Category</h1>
      <h2 class="product-card__name">{{ get(product, 'category.name', '') }}</h2>
      <p class="product-card__price">${{ get(product, 'price', '') }}</p>
    </section>

    <section class="product-card__actions">
      <button type="button" class="product-card__action-btn">
        <BaseIcon>favorite</BaseIcon>
      </button>

      <button type="button" class="product-card__action-btn">
        <BaseIcon>compare_arrows</BaseIcon>
      </button>

      <button type="button" class="product-card__action-btn">
        <BaseIcon>visibility</BaseIcon>
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '../../atoms/Base/BaseIcon.vue';
import get from 'lodash/get'
import type { SingleProductType } from '@/stores/products/types';
import { type PropType } from 'vue';

defineProps({
  product: {
    type: Object as PropType<SingleProductType>,
    default: () => ({}),
    required: true
  }
})
</script>

<style lang="scss" scoped>
  .product-card {
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    flex: 0 0 100%;
    max-width: 300px;

    &__image {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    &__specifications {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }

    &__headline {
      font-size: .8rem;
      color: #999;
      text-transform: uppercase;
    }

    &__name {
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 700;
    }

    &__price {
      font-weight: 700;
      font-size: 1.25rem;
    }

    &__actions {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    &__action-btn {

    }
  }
</style>