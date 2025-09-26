<template>
  <div class="app-container">
    <FontLoader />
    <NuxtRouteAnnouncer />
    <Navigation />
    <HeroSection />
    <div class="content-area">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import FontLoader from '~/components/FontLoader.vue';
import HeroSection from '~/components/HeroSection.vue';
import Navigation from '~/components/Navigation.vue';
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  overflow-x: hidden;
  font-family: 'proxima-nova', Arial, sans-serif;
}

body.no-scroll {
  overflow: hidden;
}

.app-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.content-area {
  width: 100%;
  margin-left: 0;
  padding: 20px 48px 80px;
  box-sizing: border-box;
  margin-top: 80px;
}

@media (max-width: 1024px) {
  .content-area {
    padding: 20px 32px 60px;
  }
}

@media (max-width: 900px) {
  .content-area {
    width: 100%;
    margin-left: 0;
    padding: 20px 24px 60px;
  }
}
</style>
