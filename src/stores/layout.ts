import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLayout = defineStore('layout', () => {
  const drawer = ref(false)
  function changeDrawer() {
    drawer.value = !drawer.value
  }

  return { drawer, changeDrawer }
})
