<template>
  <div class="bg" :class="{ bg_drawer: layout.drawer }" />
  <div class="main">
    <div class="container">
      <div class="main_title">
        <div>
          Твоя премиум карта
          <p>Лучшая карта для любителей путешествий</p>
        </div>
      </div>
      <div class="main_advantages">
        <div class="main_advantages_item" v-for="(advantageItem, index) in advantageList" :key="index">
          <div class="main_advantages_number">{{ advantageItem.number }}</div>
          <div class="main_advantages_text" v-html="advantageItem.text" />
        </div>
      </div>
      <c-button style="margin-top: 72px" @click="openModal">Заказать сейчас</c-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLayout } from '@/stores/layout'
import useModal from '@/stores/modal'

import CButton from '@/components/ui/CButton.vue'

import ModalRequest from '@/components/modal/CardOrderDialog/CardOrderDialog.vue'

const layout = useLayout()
const modal = useModal()

const openModal = () => {
  modal.open(ModalRequest, [
    {
      label: 'Save',
      callback: dataFromView => {
        console.log(dataFromView)
        modal.close()
      },
    },
  ])
}

const advantageList = [
  {
    number: '11%',
    text: 'Вернем <br> за покупки <br> милями',
  },
  {
    number: '0%',
    text: 'Бесплатное <br> снятие наличных <br> по всему миру',
  },
  {
    number: '7%',
    text: 'До 7% <br> на остаток <br> по счету',
  },
  {
    number: '0р',
    text: 'Бесплатное <br> годовое обслуживание',
  },
]
</script>

<style scoped lang="scss">
.container {
  margin: 80px 100px;
}

.bg {
  position: absolute;
  left: 0;
  right: 0;
  height: 80%;
  margin-top: 74px;
  background-image: url('@/icons/BG.png');
  background-size: cover;
  transition: $transition;
  &_drawer {
    right: -120px;
    left: 120px;
  }
}
.main {
  user-select: none;
  position: relative;
  &_title {
    width: 735px;
    font-weight: 900;
    color: $white-light;
    font-size: 92px;
    line-height: 109px;
  }
  &_advantages {
    display: grid;
    grid-template-columns: repeat(2, 0fr); /* Две колонки */
    grid-template-rows: repeat(2, 0fr); /* Две строки */
    row-gap: 36px;
    column-gap: 24px;
    margin-top: 55px;
    &_number {
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 45px;
      color: $orange-dark;
    }
    &_text {
      width: 130px;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      color: $gray-dark;
    }
  }
  p {
    color: $gray-dark;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    width: 303px;
    display: inline-block;
    margin: 8px;
  }
}
</style>
