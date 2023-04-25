<template>
  <div class="c-input">
    <!--    <div v-if="$slots.pre" class="c-input_icon"><slot name="pre" /></div>-->
    <div class="c-input_placeholder" :class="{ 'c-input_focus': focus || inputValue.length }">{{ placeholder }}</div>
    <div class="c-input_input">
      <input
        class="c-input_native"
        type="text"
        v-model="inputValue"
        @focusout="focus = false"
        @focusin="focus = true"
      />
    </div>
    <!--    <div v-if="$slots.after" class="c-input_action"><slot name="after" /></div>-->
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, ref, withDefaults } from 'vue'
interface Props {
  placeholder: string
  modelValue: string
}

const emits = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
})

const focus = ref(false)

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  },
})
</script>

<style scoped lang="scss">
.c-input_placeholder {
  font-weight: 500;
  font-size: 20px;
  color: $gray-dark;
  position: absolute;
  top: calc(50% - 20px / 2);
  transition: all ease 0.3s;
  &:hover {
    transition: all ease 0.3s;
  }
}
.c-input_focus {
  font-weight: 500;
  font-size: 14px;
  top: 15%;
  transition: all ease 0.3s;
}
.c-input {
  position: relative;
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 28px 30px 18px 30px;
  border-radius: 10px;
  background-color: rgba($white-light, 0.1);
  transition: all ease 0.3s;
  &:hover {
    background-color: rgba($white-light, 0.2);
  }
  &:hover > &_placeholder {
    font-weight: 500;
    font-size: 14px;
    top: 15%;
    transition: all ease 0.3s;
  }
  &_native {
    font-weight: 500;
    font-size: 20px;
    color: $white-light;
    margin-top: 6px;
    &:focus {
      outline: none;
    }
    &:focus > .c-input_placeholder {
      font-weight: 500;
      font-size: 14px;
      top: 15%;
      transition: all ease 0.3s;
    }
  }

  &_icon {
    flex: 0 0 auto;

    svg {
      @include icon(#b7ccf3, 20px);
    }
  }

  &_action {
    flex: 0 0 auto;

    svg {
      @include icon($orange-dark, 24px);
    }
  }

  &_input {
    flex: auto;

    input {
      width: 100%;
      background-color: transparent;
      border: none;
    }
  }
}
</style>
