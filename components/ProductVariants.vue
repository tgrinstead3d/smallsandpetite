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
        role="button"
        tabindex="0"
        @click="openVariant(variant)"
        @keydown.enter.prevent="openVariant(variant)"
        @keydown.space.prevent="openVariant(variant)"
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
        <div v-if="variant.image" class="variant-card__image-wrapper">
          <img :src="variant.image" :alt="`${variant.variantName} artwork`" loading="lazy" />
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

        <button type="button" class="variant-card__cta" @click.stop="openVariant(variant)">
          View Details
        </button>
      </article>
    </div>

    <Teleport to="body">
      <div
        v-if="selectedVariant"
        class="variant-modal"
        role="dialog"
        aria-modal="true"
        :aria-label="`${product.name} ${selectedVariant.variantName} details`"
        @click.self="closeVariant"
      >
        <div class="variant-modal__dialog">
          <button type="button" class="variant-modal__close" @click="closeVariant" aria-label="Close details">
            ×
          </button>
          <div class="variant-modal__media">
            <img :src="activeImage" :alt="`${product.name} large artwork`" />
          </div>
          <div class="variant-modal__content">
            <p class="variant-modal__eyebrow">{{ product.name }}</p>
            <h3 class="variant-modal__title">{{ selectedVariant.variantName }}</h3>
            <p class="variant-modal__price" v-if="selectedVariant.price">
              {{ selectedVariant.price }}
            </p>
            <p class="variant-modal__description">{{ product.description }}</p>

            <dl class="variant-modal__details">
              <div v-if="selectedVariant.optionName" class="variant-modal__row">
                <dt>Collection</dt>
                <dd>{{ selectedVariant.optionName }}</dd>
              </div>
              <div v-if="selectedVariant.requiresShipping" class="variant-modal__row">
                <dt>Shipping</dt>
                <dd>Physical delivery required</dd>
              </div>
              <div v-if="selectedVariant.downloadUrl" class="variant-modal__row">
                <dt>Digital Files</dt>
                <dd>
                  <a :href="selectedVariant.downloadUrl" target="_blank" rel="noopener">
                    {{ selectedVariant.downloadName || 'Download assets' }}
                  </a>
                </dd>
              </div>
            </dl>

            <button type="button" class="variant-modal__cta" @click="closeVariant">
              Close
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'

export interface ProductVariant {
  variantId: string
  variantName: string
  optionName: string
  price: string
  requiresShipping: boolean
  downloadUrl: string
  downloadName: string
  image?: string
}

interface ProductInfo {
  name: string
  description: string
  mainImage: string
}

const props = defineProps<{
  variants: ProductVariant[]
  product: ProductInfo
}>()

const selectedVariant = ref<ProductVariant | null>(null)
const previousOverflow = ref('')

const activeImage = computed(() => selectedVariant.value?.image || props.product.mainImage)

const variantLabel = (variant: ProductVariant) => {
  const name = variant.variantName.toLowerCase()
  if (name.includes('mini')) return 'Mini Set'
  if (name.includes('medium')) return 'Medium Set'
  if (name.includes('large')) return 'Large Set'
  if (name.includes('custom')) return 'Custom'
  return ''
}

const openVariant = (variant: ProductVariant) => {
  selectedVariant.value = variant
}

const closeVariant = () => {
  selectedVariant.value = null
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeVariant()
  }
}

watch(selectedVariant, (value) => {
  if (!process.client) return

  if (value) {
    previousOverflow.value = document.body.style.overflow || ''
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)
  } else {
    document.body.style.overflow = previousOverflow.value
    window.removeEventListener('keydown', handleEscape)
  }
})

onBeforeUnmount(() => {
  if (!process.client) return
  window.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = previousOverflow.value
})
</script>

<style scoped>
.variants {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: none;
  width: min(1400px, 100%);
  margin: 0 auto;
  padding: clamp(48px, 6vw, 80px);
  box-sizing: border-box;
}

.variants__header {
  text-align: center;
  width: 100%;
  margin: 0;
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
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: clamp(20px, 3vw, 32px);
}

.variant-card {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 32px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(248, 248, 246, 0.96));
  box-shadow: 0 20px 42px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(214, 210, 203, 0.4);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
  outline: none;
}

.variant-card:focus-visible {
  box-shadow: 0 0 0 3px rgba(117, 116, 114, 0.35);
}

.variant-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 28px 54px rgba(0, 0, 0, 0.12);
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
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
}

.variant-card__title {
  margin: 0;
  font-family: 'Relation Two', sans-serif;
  font-size: 1.4rem;
  color: #5f5d5b;
}

.variant-card__price {
  margin: 0;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
  font-size: 1.05rem;
  color: #5f5d5b;
  font-weight: 600;
}

.variant-card__image-wrapper {
  border-radius: 18px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: inset 0 0 0 1px rgba(214, 210, 203, 0.4);
}

.variant-card__image-wrapper img {
  width: 100%;
  display: block;
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

.variant-modal {
  position: fixed;
  inset: 0;
  background-color: rgba(18, 18, 18, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  z-index: 1000;
}

.variant-modal__dialog {
  background-color: #ffffff;
  border-radius: 32px;
  max-width: min(1100px, 100%);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: clamp(28px, 6vw, 40px);
  position: relative;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.22);
}

.variant-modal__close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: rgba(117, 116, 114, 0.15);
  color: #5f5d5b;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.variant-modal__close:hover {
  background-color: rgba(117, 116, 114, 0.25);
}

.variant-modal__media {
  border-radius: 24px;
  overflow: hidden;
  background-color: #f9f8f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.variant-modal__media img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.variant-modal__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #5f5d5b;
}

.variant-modal__eyebrow {
  margin: 0;
  font-family: 'Relation One', sans-serif;
  letter-spacing: 0.35rem;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: rgba(95, 93, 91, 0.8);
}

.variant-modal__title {
  margin: 0;
  font-family: 'Relation Two', sans-serif;
  font-size: clamp(2rem, 3.5vw, 2.6rem);
}

.variant-modal__price {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
}

.variant-modal__description {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.8;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
  color: #6c6a68;
}

.variant-modal__details {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.variant-modal__row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
  font-size: 0.95rem;
  color: #6c6a68;
}

.variant-modal__row dt {
  font-weight: 600;
  color: #5f5d5b;
}

.variant-modal__row dd {
  margin: 0;
  text-align: right;
}

.variant-modal__cta {
  align-self: flex-start;
  padding: 12px 24px;
  border-radius: 999px;
  border: none;
  background-color: #757472;
  color: #ffffff;
  font-size: 0.95rem;
  font-family: 'Proxima Nova', 'proxima-nova', Helvetica, Arial, sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.variant-modal__cta:hover {
  background-color: #5f5d5b;
}

@media (max-width: 1024px) {
  .variant-modal__dialog {
    padding: clamp(28px, 6vw, 36px);
  }
}

@media (max-width: 768px) {
  .variants__grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .variant-card {
    padding: 28px;
  }
}

@media (max-width: 576px) {
  .variant-modal__dialog {
    padding: 28px;
  }

  .variant-modal__close {
    top: 12px;
    right: 12px;
  }
}
</style>

