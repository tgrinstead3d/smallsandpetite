<template>
  <article class="product-card">
    <NuxtLink :to="productLink" class="product-card__image-wrapper">
      <img
        v-if="product.mainImage"
        :src="product.mainImage"
        :alt="product.name"
        class="product-card__image"
        loading="lazy"
      />
      <div v-else class="product-card__placeholder" aria-hidden="true">
        <span>{{ product.name.charAt(0) }}</span>
      </div>
    </NuxtLink>

    <div class="product-card__content">
      <div class="product-card__header">
        <h3 class="product-card__title">
          <NuxtLink :to="productLink">{{ product.name }}</NuxtLink>
        </h3>
        <p class="product-card__description">
          {{ product.description }}
        </p>
      </div>

      <div class="product-card__footer">
        <div class="product-card__price" v-if="lowestPrice">
          <span>Starting at</span>
          <strong>{{ lowestPrice }}</strong>
        </div>

        <NuxtLink :to="productLink" class="product-card__cta">
          View Details
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ProductVariant {
  price: string
}

export interface ProductSummary {
  handle: string
  name: string
  description: string
  mainImage: string
  variants: ProductVariant[]
}

const props = defineProps<{
  product: ProductSummary
  categorySlug?: string
}>()

const productLink = computed(() => {
  return props.categorySlug
    ? `/products/${props.categorySlug}/${props.product.handle}`
    : `/products/${props.product.handle}`
})

const lowestPrice = computed(() => {
  const priceValues = props.product.variants
    .map((variant) => variant.price?.trim())
    .filter((price) => price)

  if (!priceValues.length) return ''

  const numericPrices = priceValues
    .map((price) => Number(price.replace(/[^\d.]/g, '')))
    .filter((price) => !Number.isNaN(price))

  if (!numericPrices.length) return priceValues[0]

  const lowest = Math.min(...numericPrices)
  return `$${lowest.toFixed(2)}`
})
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.09);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 55px rgba(0, 0, 0, 0.12);
}

.product-card__image-wrapper {
  display: block;
  background: linear-gradient(135deg, rgba(226, 232, 241, 0.5), rgba(214, 223, 240, 0.3));
}

.product-card__image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.product-card__placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 4 / 3;
  background-color: #f3f2f0;
  color: #757472;
  font-size: 2rem;
  font-family: 'Relation Two', sans-serif;
}

.product-card__content {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 28px 28px 24px;
  height: 100%;
}

.product-card__title {
  margin: 0 0 12px 0;
  font-family: 'Relation Two', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  color: #5f5d5b;
}

.product-card__title a {
  color: inherit;
  text-decoration: none;
}

.product-card__title a:hover {
  text-decoration: underline;
}

.product-card__description {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.7;
  color: #757472;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
}

.product-card__footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.product-card__price {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
  color: #757472;
}

.product-card__price strong {
  font-size: 1.2rem;
  font-weight: 600;
  color: #5f5d5b;
}

.product-card__cta {
  background-color: #757472;
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 999px;
  font-size: 0.95rem;
  text-decoration: none;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.product-card__cta:hover {
  background-color: #5f5d5b;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .product-card__content {
    padding: 24px;
  }

  .product-card__title {
    font-size: 1.25rem;
  }

  .product-card__description {
    font-size: 0.95rem;
  }

  .product-card__footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .product-card__cta {
    width: 100%;
    text-align: center;
  }
}
</style>

