<template>
  <div class="app-header">
    <div class="app-header_left">
      <transition-group name="fade">
        <svg-icon name="burger" class="app-menu__burger" v-if="!useDrawer.drawer" @click="useDrawer.changeDrawer()" />
        <svg-icon name="close" class="app-menu__burger" v-if="useDrawer.drawer" @click="useDrawer.changeDrawer()" />
      </transition-group>

      <img src="src/assets/logo.png" alt="credit-card" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/icons/SvgIcon.vue'
import { useLayout } from '@/stores/layout'

const useDrawer = useLayout()
</script>

<style scoped lang="scss">
.app-header {
  margin: 40px auto;
  display: flex;
  &_left {
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: space-between;
    width: 404px;
  }
  svg {
    width: 25px;
    height: 19px;
    cursor: pointer;
  }
  img {
    width: 296px;
    height: 36px;
    user-select: none;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: $transition;
  position: absolute;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  visibility: hidden;
  position: relative;
}
</style>
