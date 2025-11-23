<template>
  <div>
    <FontLoader />
    <SideNavigation />
    <Navigation />
    <div class="main-content">
      <NuxtPage />
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import FontLoader from '~/components/FontLoader.vue'
import FooterSection from '~/components/FooterSection.vue'
import Navigation from '~/components/Navigation.vue'
import SideNavigation from '~/components/SideNavigation.vue'
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: 'proxima-nova', Arial, sans-serif;
  background: #f7f3f0;
  color: #201a16;
}

.main-content {
  margin-left: 250px;
  transition: margin-left 0.3s ease;
}

@media (max-width: 900px) {
  .main-content {
    margin-left: 0;
  }
}
</style>
