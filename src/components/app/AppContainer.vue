<template>
  <div :class="$style['app-container']">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.app-container {
  max-width: 1184px;
  margin: auto;
  height: 1000px;
  transition: $transition;
}
</style>
