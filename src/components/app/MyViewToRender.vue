<template>
  <input v-model="someVar" type="text" />
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue'

const someVar = ref('')
// no need to import defineEmits
const emit = defineEmits(['update:modelValue'])

// when someVar changes, it will update the reference passed via v-model
watch(someVar, value => {
  emit('update:modelValue', value)
})
</script>

<style scoped></style>
