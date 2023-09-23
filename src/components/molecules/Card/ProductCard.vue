<template>
  <button 
    type="button" 
    class="product-card"
    :class="modifiedClass"
  >
    <div 
      class="product-card__content" 
      @click="onCardClick()"
    >
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

    <div class="product-card__menu">
      <button 
        type="button" 
        class="product-card__add-btn"
      >
        Add to cart
      </button>
    </div>
  </button>
</template>

<script setup lang="ts">
import BaseIcon from '../../atoms/Base/BaseIcon.vue';
import get from 'lodash/get'
import type { SingleProductType } from '@/stores/products/types';
import { type PropType, ref, computed } from 'vue';

defineProps({
  product: {
    type: Object as PropType<SingleProductType>,
    default: () => ({}),
    required: true
  }
})

const menuVisible = ref(false)

const onCardClick = () => {
  menuVisible.value = !menuVisible.value
}

const modifiedClass = computed(() => menuVisible.value && 'product-card--menu-visible')
</script>

<style lang="scss" scoped>
  .product-card {
    $root: &;

    flex: 0 0 100%;
    max-width: 300px;
    position: relative;
    overflow-y: hidden;

    &__content {
      border: 1px solid #eee;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      border-radius: 3px;
    }

    &__image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 3px;
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
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color .1s ease;

      @media (min-width: 1024px) {
        &:hover {
          background-color: rgba(#999, .1);
        }
      }
    }

    &__menu {
      background-color: #1e1f29;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 50%;
      width: 95%;
      opacity: 0;
      cursor: default;
      padding: 1rem;
      border-radius: 3px 3px 0 0;
      visibility: hidden;
      transform: translate(-50%, 100%);
      transition: transform .2s, opacity .2s, visibility .2s ease;
    }

    &__add-btn {
      margin: auto;
      background-color: #eee;
      border-radius: 50px;
      font-weight: 500;
      visibility: hidden;
      opacity: 0;
      padding: 1rem 2rem;
      transition: visibility .2s, opacity .2s ease;  
    }

    @media (max-width: 1024px) {
      &--menu-visible {
        #{$root}__menu {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, 0);
        }
        
        #{$root}__add-btn {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
</style>