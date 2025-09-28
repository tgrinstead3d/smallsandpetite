<template>
  <section class="product-hero" :style="heroStyles">
    <div class="product-hero__content">
      <p class="product-hero__eyebrow">
        {{ category?.title ?? fallbackCategory }}
      </p>
      <h1 class="product-hero__title">
        {{ product.name }}
      </h1>
      <p class="product-hero__description">
        {{ product.description }}
      </p>
      <div class="product-hero__meta">
        <slot name="meta" />
      </div>
    </div>

    <div class="product-hero__art">
      <img
        v-if="product.mainImage"
        :src="product.mainImage"
        :alt="`Artwork for ${product.name}`"
        class="product-hero__image"
      />
      <div v-else class="product-hero__placeholder">Coming Soon</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ProductCategoryInfo } from '~/data/categories'

interface ProductVariant {
  variantName: string
  price: string
}

interface ProductDetail {
  name: string
  description: string
  mainImage: string
  variants: ProductVariant[]
  categories: string[]
}

const props = defineProps<{
  product: ProductDetail
  category?: ProductCategoryInfo
}>()

const fallbackCategory = computed(() => props.product.categories?.[0] ?? 'Product')

const heroStyles = computed(() => ({
  '--hero-accent': props.category?.accentColor ?? '#757472',
  background: props.category?.backgroundGradient ?? 'linear-gradient(135deg, #f8f7f5 0%, #eceae7 100%)'
}))
</script>

<style scoped>
.product-hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  align-items: center;
  gap: clamp(32px, 4vw, 60px);
  padding: clamp(48px, 6vw, 80px);
  border-radius: 32px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.1);
  color: #5f5d5b;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
}

.product-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.35), transparent 55%);
  pointer-events: none;
}

.product-hero__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.product-hero__eyebrow {
  margin: 0;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  font-family: 'Relation One', sans-serif;
  color: var(--hero-accent);
}

.product-hero__title {
  margin: 0;
  font-size: clamp(2.8rem, 3.8vw, 3.6rem);
  font-weight: 400;
  line-height: 1.12;
  font-family: 'Relation Two', sans-serif;
}

.product-hero__description {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #6c6a68;
  max-width: 620px;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
}

.product-hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  font-size: 0.95rem;
  color: #5f5d5b;
}

.product-hero__art {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-hero__image {
  width: min(540px, 100%);
  border-radius: 28px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.2);
}

.product-hero__placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(520px, 100%);
  aspect-ratio: 4 / 3;
  border-radius: 28px;
  background-color: rgba(255, 255, 255, 0.5);
  color: #757472;
  font-family: 'Relation Two', sans-serif;
  font-size: 1.4rem;
}

@media (max-width: 1024px) {
  .product-hero {
    width: 100%;
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  .product-hero {
    padding: 40px;
    gap: 32px;
    grid-template-columns: 1fr;
  }

  .product-hero__title {
    font-size: clamp(2.4rem, 4.8vw, 3rem);
  }

  .product-hero__description {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .product-hero {
    padding: 32px;
  }

  .product-hero__content,
  .product-hero__art,
  .product-hero__image {
    width: 100%;
  }

  .product-hero__art {
    order: -1;
  }
}
</style>

