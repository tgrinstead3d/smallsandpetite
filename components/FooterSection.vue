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
            <li v-for="(occasion, index) in footerOccasions" :key="`footer-occasion-${index}`">{{ occasion }}</li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Company</h4>
          <ul>
            <li v-for="(item, index) in footerCompany" :key="`footer-company-${index}`">{{ item }}</li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Connect</h4>
          <ul>
            <li v-for="(item, index) in footerConnect" :key="`footer-connect-${index}`">{{ item }}</li>
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
  'Birthdays',
  'Birth Announcements',
  'Graduations',
  'School Events',
  'Showers',
  'Milestones',
  'Holidays',
  'Weddings',
  'Custom'
];

const footerCompany = ['About', 'Testimonials', 'FAQ', 'Contact'];
const footerConnect = ['Instagram', 'Email', 'Facebook'];
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

