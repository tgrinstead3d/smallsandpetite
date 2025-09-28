export interface ProductCategoryInfo {
  slug: string
  title: string
  headline: string
  description: string
  accentColor: string
  backgroundGradient: string
}

export const PRODUCT_CATEGORIES: ProductCategoryInfo[] = [
  {
    slug: 'birthdays',
    title: 'Birthdays',
    headline: 'Make Every Age Feel Larger Than Life',
    description:
      'From first birthdays to milestone celebrations, surprise the guest of honor with vibrant, larger-than-life lawn displays tailored to their personality.',
    accentColor: '#f2b8d1',
    backgroundGradient: 'linear-gradient(135deg, #fff7fb 0%, #ffe9f4 100%)'
  },
  {
    slug: 'birth-announcements',
    title: 'Birth Announcements',
    headline: 'Share the Joy of a New Arrival',
    description:
      'Introduce your newest family member with a heartfelt display that captures the excitement and wonder of your growing family.',
    accentColor: '#b6d7e6',
    backgroundGradient: 'linear-gradient(135deg, #f5fbff 0%, #e6f3ff 100%)'
  },
  {
    slug: 'graduations',
    title: 'Graduations',
    headline: 'Spotlight the Graduate',
    description:
      'Honor hard-earned achievements with custom colors, school spirit, and personalized touches that make commencement day unforgettable.',
    accentColor: '#c5d6a9',
    backgroundGradient: 'linear-gradient(135deg, #f5fff2 0%, #e5f7d9 100%)'
  },
  {
    slug: 'school-events',
    title: 'School Events',
    headline: 'Bring School Spirit to the Front Lawn',
    description:
      'Kick off the school year or pep up a big milestone with displays that celebrate classrooms, teams, and everything in between.',
    accentColor: '#f6d6a2',
    backgroundGradient: 'linear-gradient(135deg, #fff9ed 0%, #ffeccb 100%)'
  },
  {
    slug: 'showers',
    title: 'Showers',
    headline: 'Sprinkle Every Shower With Charm',
    description:
      'Whether it’s baby or bridal, elevate the party with whimsical art pieces that set the scene for memorable photos and joyful gatherings.',
    accentColor: '#d0c3f2',
    backgroundGradient: 'linear-gradient(135deg, #faf7ff 0%, #ede7ff 100%)'
  },
  {
    slug: 'milestones',
    title: 'Milestones',
    headline: 'Toast Every Major Moment',
    description:
      'Mark anniversaries, retirements, baptisms, and more with thoughtful designs that celebrate the moments your family cherishes most.',
    accentColor: '#f4c9a9',
    backgroundGradient: 'linear-gradient(135deg, #fff4ed 0%, #ffe2cf 100%)'
  },
  {
    slug: 'holidays',
    title: 'Holidays',
    headline: 'Celebrate Each Season in Style',
    description:
      'Deck the yard for festive fun with limited-edition sets that bring seasonal magic to your neighborhood.',
    accentColor: '#a7dcd8',
    backgroundGradient: 'linear-gradient(135deg, #f1fffd 0%, #d9f5f1 100%)'
  },
  {
    slug: 'weddings',
    title: 'Weddings',
    headline: 'Welcome Guests With Heart',
    description:
      'Create an unforgettable first impression with personalized signage that celebrates the couple’s love story.',
    accentColor: '#f1d3d1',
    backgroundGradient: 'linear-gradient(135deg, #fff6f5 0%, #fde6e4 100%)'
  },
  {
    slug: 'custom',
    title: 'Custom',
    headline: 'Dream Up Something Totally Unique',
    description:
      'Have a special vision? Collaborate with our design team to craft a one-of-a-kind yard greeting made just for your celebration.',
    accentColor: '#cbd5f5',
    backgroundGradient: 'linear-gradient(135deg, #f5f7ff 0%, #e2e7ff 100%)'
  }
]

export const CATEGORY_BY_SLUG = new Map(
  PRODUCT_CATEGORIES.map((category) => [category.slug, category])
)

export const findCategoryBySlug = (slug: string): ProductCategoryInfo | undefined =>
  CATEGORY_BY_SLUG.get(slug)

export const formatCategoryTitle = (slug: string): string =>
  CATEGORY_BY_SLUG.get(slug)?.title ?? slug

