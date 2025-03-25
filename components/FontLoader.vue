<template>
  <!-- Font Loader Component -->
  <div style="display: none;">Font Loader</div>
</template>

<script setup>
// Font Loader Component
</script>

<style>
/* Adobe Fonts (Typekit) for Proxima Nova */
@import url('https://use.typekit.net/xts7lxl.css');
/* Proxima Nova */

/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

/* CDN Fonts for Relation and Shelby fonts */
@import url('https://fonts.cdnfonts.com/css/relation-one?styles=122872');
@import url('https://fonts.cdnfonts.com/css/relation-two');
@import url('https://fonts.cdnfonts.com/css/shelby');

/* Custom font definitions with fallbacks */
@font-face {
  font-family: 'relation-one-fallback';
  src: local('Georgia'), local('Times New Roman');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'relation-two-fallback';
  src: local('Georgia'), local('Times New Roman');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'shelby-fallback';
  src: local('Brush Script MT'), local('Comic Sans MS');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'satisfy-fallback';
  src: local('Brush Script MT'), local('Comic Sans MS');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'proxima-nova-fallback';
  src: local('Helvetica'), local('Arial');
  font-weight: normal;
  font-style: normal;
}
</style>