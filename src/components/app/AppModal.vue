<template>
  <div>
    <div v-if="isOpen" class="app-modal">
      <div>
        <label @click="modal.close()">✕</label>
        <component :is="view" v-model="model"></component>

        <div>
          <button v-for="action in actions" @click="action.callback(model)">
            {{ action.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useModal } from '@/stores/modal'

const modal = useModal()

// reactive container to save the payload returned by the mounted view
const model = reactive({})

// convert all state properties to reactive references to be used on view
const { isOpen, view, actions } = storeToRefs(modal)
</script>

<style lang="scss">
.app-modal {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 999;
}
</style>
