<template>
  <section class="variants">
    <header class="variants__header">
      <h2 class="variants__title">Choose Your Package</h2>
      <p class="variants__subtitle">
        Flexible sizes and arrangements make it easy to match your celebration.
      </p>
    </header>

    <div class="variants__grid">
      <article
        v-for="variant in variants"
        :key="variant.variantId"
        class="variant-card"
      >
        <div v-if="variantLabel(variant)" class="variant-card__badge">
          {{ variantLabel(variant) }}
        </div>
        <div class="variant-card__header">
          <h3 class="variant-card__title">{{ variant.variantName }}</h3>
          <p class="variant-card__price" v-if="variant.price">
            {{ variant.price }}
          </p>
        </div>
        <dl class="variant-card__details">
          <div v-if="variant.optionName" class="variant-card__row">
            <dt>Collection</dt>
            <dd>{{ variant.optionName }}</dd>
          </div>
          <div v-if="variant.requiresShipping" class="variant-card__row">
            <dt>Shipping</dt>
            <dd>Physical delivery required</dd>
          </div>
          <div v-if="variant.downloadUrl" class="variant-card__row">
            <dt>Digital Files</dt>
            <dd>
              <a :href="variant.downloadUrl" target="_blank" rel="noopener">
                {{ variant.downloadName || 'Download' }}
              </a>
            </dd>
          </div>
        </dl>

        <button type="button" class="variant-card__cta">
          Reserve This Package
        </button>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface ProductVariant {
  variantId: string
  variantName: string
  optionName: string
  price: string
  requiresShipping: boolean
  downloadUrl: string
  downloadName: string
}

const props = defineProps<{
  variants: ProductVariant[]
}>()

const variantLabel = (variant: ProductVariant) => {
  const name = variant.variantName.toLowerCase()
  if (name.includes('mini')) return 'Mini Set'
  if (name.includes('medium')) return 'Medium Set'
  if (name.includes('large')) return 'Large Set'
  if (name.includes('custom')) return 'Custom'
  return ''
}
</script>

<style scoped>
.variants {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.variants__header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.variants__title {
  margin: 0;
  font-family: 'Relation Two', sans-serif;
  font-weight: 400;
  font-size: clamp(2.1rem, 3vw, 2.6rem);
  color: #5f5d5b;
}

.variants__subtitle {
  margin: 0;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
  font-size: 1.05rem;
  color: #757472;
  line-height: 1.7;
}

.variants__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
  justify-items: stretch;
}

.variant-card {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 28px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(248, 248, 246, 0.96));
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(214, 210, 203, 0.4);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.variant-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.12);
}

.variant-card__badge {
  align-self: flex-start;
  background-color: rgba(117, 116, 114, 0.12);
  color: #5f5d5b;
  font-size: 0.78rem;
  letter-spacing: 0.18rem;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 999px;
  font-family: 'Relation One', sans-serif;
}

.variant-card__header {
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.variant-card__title {
  margin: 0;
  font-family: 'Relation Two', sans-serif;
  font-size: 1.3rem;
  color: #5f5d5b;
}

.variant-card__price {
  margin: 0;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
  font-size: 1.05rem;
  color: #5f5d5b;
  font-weight: 600;
  white-space: nowrap;
}

.variant-card__details {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
}

.variant-card__row {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  font-size: 0.9rem;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
  color: #6c6a68;
}

.variant-card__row dt {
  margin: 0;
  font-weight: 600;
  color: #5f5d5b;
}

.variant-card__row dd {
  margin: 0;
  text-align: right;
}

.variant-card__cta {
  margin-top: auto;
  align-self: stretch;
  padding: 12px 18px;
  font-size: 0.95rem;
  border-radius: 12px;
  border: none;
  background-color: #757472;
  color: #ffffff;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.variant-card__cta:hover {
  background-color: #5f5d5b;
  transform: translateY(-2px);
}

@media (max-width: 576px) {
  .variants__grid {
    gap: 20px;
  }

  .variant-card {
    padding: 24px;
  }
}
</style>

