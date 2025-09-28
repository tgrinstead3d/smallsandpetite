<template>
  <div v-if="category" class="category-page">
    <header class="category-page__header">
      <p class="category-page__eyebrow">{{ category.title }}</p>
      <h1 class="category-page__title">{{ category.headline }}</h1>
      <p class="category-page__description">{{ category.description }}</p>
    </header>

    <section class="category-page__products">
      <ProductCard
        v-for="product in categoryProducts"
        :key="product.handle"
        :product="product"
        :category-slug="category.slug"
      />
    </section>
  </div>
  <ErrorSection v-else description="We couldn’t find this category. Please choose another collection from the menu." />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '~/components/ProductCard.vue'
import ErrorSection from '~/components/ErrorSection.vue'
import { PRODUCT_CATEGORIES, findCategoryBySlug } from '~/data/categories'
import { useProducts } from '~/composables/useProducts'

const route = useRoute()
const slug = computed(() => route.params.category as string)

const category = computed(() => findCategoryBySlug(slug.value))

const { byCategorySlug } = useProducts()

const categoryProducts = computed(() => byCategorySlug(slug.value))
</script>

<style scoped>
.category-page {
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding: 120px 60px 80px;
  margin-left: 260px;
}

.category-page__header {
  max-width: 680px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.category-page__eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.45rem;
  font-size: 0.95rem;
  font-family: 'Relation One', sans-serif;
  color: #757472;
}

.category-page__title {
  margin: 0;
  font-size: clamp(2.5rem, 4.2vw, 3.3rem);
  font-family: 'Relation Two', sans-serif;
  color: #5f5d5b;
}

.category-page__description {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #757472;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
}

.category-page__products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
}

@media (max-width: 1024px) {
  .category-page {
    margin-left: 0;
    padding: 120px 40px 80px;
  }
}

@media (max-width: 768px) {
  .category-page {
    padding: 100px 24px 60px;
    gap: 40px;
  }

  .category-page__products {
    gap: 24px;
  }
}

@media (max-width: 576px) {
  .category-page {
    padding: 90px 20px 60px;
  }

  .category-page__products {
    gap: 20px;
  }
}
</style>
