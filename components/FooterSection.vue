<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <img src="~/assets/logo.png" alt="Smalls and Petite" class="footer-logo-image" />
        <p>Custom yard greetings for life’s biggest moments.</p>
      </div>

      <div class="footer-links">
        <div class="footer-column">
          <h4>Occasions</h4>
          <ul>
            <li v-for="link in footerOccasions" :key="link.label">
              <NuxtLink :to="link.href" class="footer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Company</h4>
          <ul>
            <li v-for="link in footerCompany" :key="link.label">
              <NuxtLink v-if="!link.external" :to="link.href" class="footer-link">{{ link.label }}</NuxtLink>
              <a v-else :href="link.href" target="_blank" rel="noopener" class="footer-link">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Connect</h4>
          <ul>
            <li v-for="link in footerConnect" :key="link.label">
              <a :href="link.href" class="footer-link" target="_blank" rel="noopener">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>&copy; {{ currentYear }} Smalls &amp; Petite. All rights reserved.</span>
      <div class="footer-meta">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();

const footerOccasions = [
  { label: 'Birthdays', href: '/products/birthdays' },
  { label: 'Birth Announcements', href: '/products/birth-announcements' },
  { label: 'Graduations', href: '/products/graduations' },
  { label: 'School Events', href: '/products/school-events' },
  { label: 'Showers', href: '/products/showers' },
  { label: 'Milestones', href: '/products/milestones' },
  { label: 'Holidays', href: '/products/holidays' },
  { label: 'Weddings', href: '/products/weddings' },
  { label: 'Custom', href: '/products/custom' }
];

const footerCompany = [
  { label: 'Shop Products', href: '/products' },
  { label: 'Installation Guide', href: '/installation-guide' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' }
];

const footerConnect = [
  { label: 'Instagram', href: 'https://www.instagram.com/smallsandpetite' },
  { label: 'Email', href: 'mailto:hello@smallsandpetite.com' },
  { label: 'Facebook', href: 'https://www.facebook.com/smallsandpetite' }
];
</script>

<style scoped>
.site-footer {
  background-color: #f9f8f6;
  padding: 60px;
  color: #757472;
  width: 100%;
  box-sizing: border-box;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
}

.footer-brand {
  max-width: 320px;
}

.footer-logo-image {
  max-width: 220px;
  margin-bottom: 16px;
}

.footer-links {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.footer-column h4 {
  margin: 0 0 16px 0;
  font-family: 'Relation Two', sans-serif;
  font-size: 1.1rem;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.95rem;
}

.footer-link {
  color: inherit;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}

.footer-bottom {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 0.9rem;
}

.footer-meta {
  display: flex;
  gap: 20px;
}

.footer-meta a {
  color: #757472;
  text-decoration: none;
  position: relative;
}

.footer-meta a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 1px;
  background-color: #b8b7b5;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.footer-meta a:hover::after {
  transform: scaleX(1);
}

@media (max-width: 900px) {
  .site-footer {
    padding: 48px 24px;
  }

  .footer-logo-image {
    max-width: 180px;
  }
}

@media (max-width: 600px) {
  .footer-top {
    flex-direction: column;
    gap: 24px;
  }

  .footer-links {
    width: 100%;
    justify-content: space-between;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>

