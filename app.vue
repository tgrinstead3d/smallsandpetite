<template>
  <div class="maintenance-page">
    <div class="maintenance-card">
      <h1>We&apos;ll be back soon.</h1>
      <p>smallsandpetite.com is undergoing maintenance and will be back online shortly.</p>
      <p class="cta">
        In the meantime you can shop through our
        <a href="https://instagram.com/smallsandpetite" target="_blank" rel="noopener">Instagram</a>.
      </p>
    </div>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  overflow: hidden;
  font-family: 'proxima-nova', Arial, sans-serif;
  background: #f7f3f0;
  color: #201a16;
}

.maintenance-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 40px 20px;
  box-sizing: border-box;
}

.maintenance-card {
  max-width: 480px;
  background: #fff;
  padding: 48px 36px;
  border-radius: 24px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
}

.maintenance-card h1 {
  font-size: 2rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0 0 16px;
}

.maintenance-card p {
  margin: 0 0 16px;
  line-height: 1.6;
  font-size: 1rem;
}

.maintenance-card .cta {
  margin-top: 24px;
  font-weight: 600;
}

.maintenance-card a {
  color: #b37a5c;
  text-decoration: none;
}

.maintenance-card a:hover,
.maintenance-card a:focus-visible {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .maintenance-card {
    padding: 36px 24px;
  }

  .maintenance-card h1 {
    font-size: 1.75rem;
  }
}
</style>
