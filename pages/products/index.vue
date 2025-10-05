<template>
  <div class="products-page-wrapper">
    <div class="products-page">
      <header class="products-page__header">
        <h1 class="products-page__title">Shop by Occasion</h1>
        <p class="products-page__subtitle">
          Explore our illustrated yard sign collections curated for every milestone, from big birthdays to custom celebrations.
        </p>
      </header>

      <nav class="products-page__nav" aria-label="Product categories">
        <NuxtLink
          v-for="category in categories"
          :key="category.slug"
          :to="`/products/${category.slug}`"
          class="category-link"
        >
          <span class="category-link__title">{{ category.title }}</span>
          <span class="category-link__cta">Browse collection</span>
        </NuxtLink>
      </nav>
    </div>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { PRODUCT_CATEGORIES } from '~/data/categories'
import { useProducts } from '~/composables/useProducts'

import FooterSection from '~/components/FooterSection.vue'

const { uniqueCategories } = useProducts()

const categories = PRODUCT_CATEGORIES.filter((category) =>
  uniqueCategories.value.includes(category.slug)
)
</script>

<style scoped>
.products-page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.products-page {
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding: clamp(100px, 12vw, 140px) clamp(32px, 6vw, 80px) clamp(60px, 8vw, 100px);
  flex: 1 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.products-page__header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.products-page__title {
  margin: 0;
  font-size: clamp(2.4rem, 4vw, 3rem);
  font-family: 'Relation Two', sans-serif;
  color: #5f5d5b;
}

.products-page__subtitle {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #757472;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
  max-width: 720px;
}

.products-page__nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: clamp(20px, 3vw, 32px);
}

.category-link {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 28px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(248, 247, 244, 0.96));
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: inherit;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.category-link:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.12);
}

.category-link__title {
  font-size: 1.3rem;
  font-family: 'Relation Two', sans-serif;
  color: #5f5d5b;
}

.category-link__cta {
  font-size: 0.95rem;
  color: #757472;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
}

@media (max-width: 1024px) {
  .products-page {
    padding: 120px 40px 80px;
  }
}

@media (max-width: 768px) {
  .products-page {
    padding: 100px 24px 60px;
    gap: 40px;
  }

  .category-link {
    padding: 24px;
  }
}

@media (max-width: 576px) {
  .products-page {
    padding: 90px 20px 60px;
  }
}
</style>

