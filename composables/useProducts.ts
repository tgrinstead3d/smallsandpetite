import { computed } from 'vue'
import productsData from '~/assets/products.json'

export interface ProductVariant {
  variantId: string
  variantName: string
  optionName: string
  price: string
  compareAtPrice: string
  sku: string
  inventory: string
  requiresShipping: boolean
  weight: string
  width: string
  height: string
  length: string
  downloadUrl: string
  downloadName: string
  image: string
  createdOn: string
  updatedOn: string
  publishedOn: string
}

export interface ProductRecord {
  handle: string
  name: string
  type: string
  description: string
  categories: string[]
  navCategories: string[]
  mainImage: string
  moreImages: string[]
  variants: ProductVariant[]
}

const products: ProductRecord[] = productsData as ProductRecord[]

export const useProducts = () => {
  const allProducts = computed(() => products)

  const findByHandle = (handle: string) =>
    products.find((product) => product.handle === handle)

  const byCategorySlug = (slug: string) =>
    products.filter((product) => product.navCategories.includes(slug))

  const uniqueCategories = computed(() => {
    const categorySet = new Set<string>()
    products.forEach((product) => {
      product.navCategories.forEach((categorySlug) => categorySet.add(categorySlug))
    })
    return Array.from(categorySet)
  })

  return {
    products: allProducts,
    uniqueCategories,
    findByHandle,
    byCategorySlug
  }
}

