<template>
  <div :class="$style['app-body']">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.app-body {
  background-color: $black-dark;
  position: relative;
  padding: 40px;
  width: 100%;
}
</style>
