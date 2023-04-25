<template>
  <component :is="layout"></component>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from '@/layout/DefaultLayout.vue'

const layout = ref(DefaultLayout)
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  display: block;
}
body {
  overflow: hidden;
  min-height: 100vh;
  scroll-behavior: smooth;
  margin: 0;
  font-family: $Geometria;
}
</style>
