<template>
  <div class="app-container">
    <FontLoader />
    <NuxtRouteAnnouncer />
    <Navigation />
    <SideNavigation />
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
import SideNavigation from '~/components/SideNavigation.vue';
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

.app-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.content-area {
  width: calc(100% - 250px);
  margin-left: 250px;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 80px;
}
</style>
