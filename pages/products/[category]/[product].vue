<template>
  <div v-if="product && category" class="product-page">
    <ProductHero :product="product" :category="category">
      <template #meta>
        <div class="product-meta">
          <span v-for="tag in displayTags" :key="tag" class="product-meta__tag">{{ tag }}</span>
        </div>
      </template>
    </ProductHero>

    <main class="product-page__content">
      <ProductVariants :variants="product.variants" :product="product" />

      <section class="product-page__details">
        <h2 class="product-page__details-title">What’s Included</h2>
        <p class="product-page__details-text">
          Each package is professionally designed, printed, and prepared to arrive ready for installation. Yard stakes and supporting hardware are included with every physical order.
        </p>

        <ul class="product-page__feature-list">
          <li class="product-page__feature">Weather-resistant, high-quality corrugated plastic signage</li>
          <li class="product-page__feature">Custom personalization available during checkout</li>
          <li class="product-page__feature">Optional photo add-ons for select collections</li>
        </ul>
      </section>
    </main>

    <FooterSection />
  </div>
  <ErrorSection v-else description="We couldn’t find this product. Please select another collection from the menu." />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductHero from '~/components/ProductHero.vue'
import ProductVariants from '~/components/ProductVariants.vue'
import ErrorSection from '~/components/ErrorSection.vue'
import FooterSection from '~/components/FooterSection.vue'
import { findCategoryBySlug } from '~/data/categories'
import { useProducts } from '~/composables/useProducts'

const route = useRoute()
const categorySlug = computed(() => route.params.category as string)
const productSlug = computed(() => route.params.product as string)

const { findByHandle } = useProducts()

const product = computed(() => findByHandle(productSlug.value))
const category = computed(() => findCategoryBySlug(categorySlug.value))

const displayTags = computed(() => {
  const tags = new Set<string>()
  product.value?.categories.forEach((rawTag) => {
    const tag = rawTag.replace(/([a-z])([A-Z])/g, '$1 $2')
    tags.add(tag)
  })
  return Array.from(tags)
})
</script>

<style scoped>
.product-page {
  display: flex;
  flex-direction: column;
  gap: clamp(48px, 6vw, 80px);
  width: min(1600px, 100%);
  margin: 0 auto;
  padding: clamp(48px, 8vw, 120px) clamp(24px, 6vw, 80px) clamp(40px, 6vw, 80px);
  box-sizing: border-box;
}

.product-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.product-meta__tag {
  padding: 6px 12px;
  border-radius: 999px;
  background-color: rgba(117, 116, 114, 0.15);
  color: #5f5d5b;
  font-size: 0.85rem;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
}

.product-page__content {
  display: flex;
  flex-direction: column;
  gap: clamp(32px, 5vw, 48px);
  width: 100%;
}

.product-page__details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: clamp(32px, 3vw, 40px);
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(245, 244, 241, 0.96));
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(214, 210, 203, 0.5);
  width: 100%;
  margin: 0;
}

.product-page__details-title {
  margin: 0;
  font-size: 1.8rem;
  font-family: 'Relation Two', sans-serif;
  color: #5f5d5b;
}

.product-page__details-text {
  margin: 0;
  font-size: 1.02rem;
  line-height: 1.7;
  color: #6c6a68;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
}

.product-page__feature-list {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #6c6a68;
  font-size: 0.95rem;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
}

.product-page__feature {
  line-height: 1.6;
}

@media (max-width: 1200px) {
  .product-page__content {
    grid-template-columns: minmax(0, 1fr);
  }

  .product-page__details {
    align-self: auto;
  }
}

@media (max-width: 768px) {
  .product-page {
    padding: 90px 24px 60px;
    gap: 56px;
  }

  .product-page__details {
    padding: 28px;
  }
}

@media (max-width: 576px) {
  .product-page {
    padding: 80px 20px 50px;
  }
}
</style>

