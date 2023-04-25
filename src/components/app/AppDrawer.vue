<template>
  <transition name="app-drawer">
    <div class="app-drawer_content" v-if="modelValue">
      <div class="app-drawer_items">
        <p>Какие преимущества</p>
        <p>Что вы получаете</p>
        <p>Еще сюрпризы</p>
        <p>Оформить карту</p>
      </div>
      <div class="app-drawer_phones">
        <div class="app-drawer_phones_item">
          <span>По России</span>
          <div class="app-drawer_phones_number">8 800 950 6570</div>
        </div>
        <div class="app-drawer_phones_item">
          <span>По Миру</span>
          <div class="app-drawer_phones_number">8 800 950 6570</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, withDefaults } from 'vue'
const emits = defineEmits(['update:modelValue'])
interface Props {
  modelValue: boolean
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
})
</script>

<style lang="scss" scoped>
.app-drawer {
  display: flex;
  flex-direction: row;
  min-height: 100%;
  &_content {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100vh;
    width: 393px;
    background-color: $black-light;
  }
  &_items {
    width: 195px;
    margin: 96px auto;
    & p {
      font-weight: 600;
      font-size: 18px;
      color: $white-light;
      margin: 34px 0;
      cursor: pointer;
    }
  }
  &_phones {
    margin: 512px auto;
    width: 190px;
    span {
      font-size: 14px;
      color: $gray-dark;
    }
    &_number {
      font-size: 24px;
      font-weight: 500;
      color: $gray-light;
    }
    &_item {
      margin: 30px 0;
    }
  }
  &-enter-active,
  &-leave-active {
    transition: $transition;
  }
  &-enter-from,
  &-leave-to {
    left: -393px;
  }
}
</style>
