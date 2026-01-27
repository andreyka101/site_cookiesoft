<style lang="scss">
.small_business_page {
    background-color: #b2ffe6;
}
</style>

<template>
    цвцвввц
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
    document.body.classList.add('small_business_page');
});
onUnmounted(() => {
    document.body.classList.remove('small_business_page');
})
</script>