<template>
  <div class="main-body" style="padding-top: 1px">
    <div class="menu" style="padding: 0px 300px; margin-top: 76px">
      <div class="menu-header" style="display: flex; align-items: center; justify-content: space-between; width: 400px">
        <svg-icon name="burger" style="width: 65px; height: 60px; margin-top: 5px" />
        <img src="src/assets/logo.png" alt="credit-card" style="width: 296px; height: 36px" />
      </div>
    </div>
    <svg-icon name="bg-lines" style="position: absolute; top: 226px; width: 100%; height: 50vh; color: #222222" />
    <img src="src/assets/credit.png" alt="credit-card" style="position: absolute; right: 0px; top: 240px" />
    <div class="container" style="">
      <div style="width: 735px">
        <h1 class="font" style="color: #ffffff; font-size: 92px; line-height: 109px">Твоя премиум карта</h1>
      </div>
      <div></div>
    </div>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SvgIcon from '@/components/icons/SvgIcon.vue'
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
html {
}
.font {
  font-family: Geometria, sans-serif;
  font-weight: 900;
}
.main-body {
  background-color: #0e0e0e;
  height: 1000px;
}
.container {
  max-width: 1170px;
  margin: auto;
  height: 1000px;
}
</style>
