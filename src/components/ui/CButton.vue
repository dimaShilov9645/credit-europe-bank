<template>
  <div :class="[$style.button]">
    <div class="button_icon"><slot name="icon"></slot></div>
    <div :class="[$style.button_text, btnClasses.text]">
      <span>
        <slot>{{ label }}</slot>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed } from 'vue'
interface Props {
  label: string
  text: 'center' | 'left' | 'right'
}
const props = withDefaults(defineProps<Props>(), {
  label: '',
  text: 'center',
})
const btnClasses = computed(() => {
  return {
    text: {
      'button_text-center': props.text === 'center',
      'button_text-left': props.text === 'left',
      'button_text-right': props.text === 'right',
    },
  }
})
</script>

<style module lang="scss">
.button {
  background-color: $orange-dark;
  border-radius: 10px;
  padding: 26px 44px;
  width: 290px;
  cursor: pointer;
  &_text {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: $white-light;
  }
}
</style>
