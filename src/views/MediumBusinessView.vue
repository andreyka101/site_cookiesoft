<style lang="scss">
.medium_business_page {
    // background-color: #b2edff;
    // background-color: #cee5ff;
    // background-color: #CEFFFF7F;
    
    // background-color: #CEF6FF7F;
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