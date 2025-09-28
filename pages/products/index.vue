<template>
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
</template>

<script setup lang="ts">
import { PRODUCT_CATEGORIES } from '~/data/categories'
import { useProducts } from '~/composables/useProducts'

const { uniqueCategories } = useProducts()

const categories = PRODUCT_CATEGORIES.filter((category) =>
  uniqueCategories.value.includes(category.slug)
)
</script>

<style scoped>
.products-page {
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding: 120px 60px 80px;
  margin-left: 260px;
}

.products-page__header {
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
}

.products-page__nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
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
    margin-left: 0;
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

