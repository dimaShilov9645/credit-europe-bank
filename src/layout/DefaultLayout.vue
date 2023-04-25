<template>
  <app-body>
    <app-drawer v-model="useDrawer.drawer" />
    <app-container :class="{ 'drawer-mode': useDrawer.drawer }">
      <app-header />
      <RouterView />
    </app-container>
    <app-modal />
  </app-body>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import AppBody from '@/components/app/AppBody.vue'
import AppHeader from '@/components/app/AppHeader.vue'
import AppContainer from '@/components/app/AppContainer.vue'
import AppModal from '@/components/app/AppModal.vue'
import { useLayout } from '@/stores/layout'
import AppDrawer from '@/components/app/AppDrawer.vue'

const useDrawer = useLayout()
</script>

<style lang="scss" scoped>
.drawer-mode {
  max-width: 1000px;
}
</style>
