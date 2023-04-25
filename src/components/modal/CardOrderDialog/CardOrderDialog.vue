<template>
  <div class="card-order">
    <div class="dialog-header">
      <p>Заявка на карту</p>
      <div>X</div>
    </div>
    <c-input placeholder="ФИО" v-model="form.fio" />
    <c-input placeholder="Электронный адрес" v-model="form.mail" />
    <c-input placeholder="Номер телефона" v-model="form.phone" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed, watch, ref, reactive } from 'vue'
import CInput from '@/components/ui/CInput.vue'

const someVar = ref('')
// no need to import defineEmits
const emit = defineEmits(['update:modelValue'])

// when someVar changes, it will update the reference passed via v-model

interface Props {
  modelValue: boolean
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
})

const form = reactive({
  fio: '',
  mail: '',
  phone: '',
})

watch(someVar, value => {
  emit('update:modelValue', value)
})
</script>

<style scoped lang="scss">
.dialog-header {
  display: flex;
  align-items: center;
  & p {
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 113.22%;
    color: $white-light;
    width: 100%;
    text-align: center;
  }
}
.card-order {
  max-width: 680px;
  margin: 20px auto;
}
</style>
