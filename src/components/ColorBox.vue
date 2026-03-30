<style lang="scss"></style>

<template>
  <div @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <!-- {{ isHovered ? 'Привет!' : 'Наведи' }} -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const isHovered = ref(false)
const numeClass = ref("")
// Следим за изменениями
// watch(isHovered, (newValue) => {
//   // console.log('Статус наведения:', newValue)
//   if (newValue) document.body.classList.add(numeClass.value);
//   else document.body.classList.remove(numeClass.value);
// })
const props = defineProps({
  num_id: {
    type: Number
  }
})
onMounted(() => {
  if (props.num_id == 1) {
    numeClass.value = 'small_business_box'
  }
  if (props.num_id == 2) {
    numeClass.value = 'medium_business_box'
  }
  if (props.num_id == 3) {
    numeClass.value = 'big_business_box'
  }
  if (props.num_id == 4) {
    numeClass.value = 'portfolio_box'
  }
})
</script>