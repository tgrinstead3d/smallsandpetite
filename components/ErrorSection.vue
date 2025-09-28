<template>
  <section class="error-section">
    <div class="error-section__content">
      <h2 class="error-section__title">Oops!</h2>
      <p class="error-section__description">
        {{ description }}
      </p>
      <NuxtLink to="/products" class="error-section__cta">
        Browse all products
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  description: {
    type: String,
    default: 'Something went wrong. Try another page or head back to the product collections.'
  }
})
</script>

<style scoped>
.error-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 320px;
  padding: 60px 24px;
  margin-left: 260px;
}

.error-section__content {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 247, 245, 0.95));
  border-radius: 28px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.1);
  padding: 48px 56px;
  max-width: 540px;
  text-align: center;
}

.error-section__title {
  margin: 0 0 16px;
  font-size: 2.2rem;
  font-family: 'Relation Two', sans-serif;
  color: #5f5d5b;
}

.error-section__description {
  margin: 0 0 28px;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #757472;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
}

.error-section__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 999px;
  background-color: #757472;
  color: #ffffff;
  font-size: 0.95rem;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.error-section__cta:hover {
  background-color: #5f5d5b;
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .error-section {
    margin-left: 0;
  }
}

@media (max-width: 576px) {
  .error-section__content {
    padding: 40px 32px;
  }
}
</style>

