<style lang="scss">
</style>

<template>
    <div @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <!-- {{ isHovered ? 'Привет!' : 'Наведи' }} -->
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const isHovered = ref(false)
// Следим за изменениями
watch(isHovered, (newValue) => {
    // console.log('Статус наведения:', newValue)
    if (newValue) document.body.classList.add('small_business_page');
    else document.body.classList.remove('small_business_page');
})

</script>