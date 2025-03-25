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
  height: 100%;
  overflow: hidden;
  font-family: 'proxima-nova', Arial, sans-serif;
}

.app-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.content-area {
  position: absolute;
  top: 80px;
  left: 250px;
  width: calc(100% - 250px);
  height: calc(100vh - 80px);
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  z-index: 1;
}
</style>
