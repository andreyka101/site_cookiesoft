<style lang="scss">
.big_business_page {
    // background-color: #b2c0ff;
    background-color: #cfceff;
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