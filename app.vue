<template>
  <div class="app-container">
    <FontLoader />
    <NuxtRouteAnnouncer />
    <Navigation />
    <SideNavigation />
    <div class="content-area">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import FontLoader from '~/components/FontLoader.vue';
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

body.no-scroll {
  overflow: hidden;
}

.app-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-left: 250px;
  padding-top: 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.content-area {
  width: 100%;
  margin-left: 0;
  padding: 20px 0 0;
  box-sizing: border-box;
  margin-top: 0;
  flex: 0 0 auto;
}

@media (max-width: 1024px) {
  .content-area {
    padding: 20px 0 0;
  }
}

@media (max-width: 900px) {
  .app-container {
    padding-left: 0;
  }

  .content-area {
    width: 100%;
    margin-left: 0;
    padding: 20px 0 0;
  }
}
</style>
