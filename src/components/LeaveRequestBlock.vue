<style lang="scss" scoped>
div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(127, 255, 212, 0.269);
    z-index: 10000;
}
</style>
<template>
    <div>
        <button @click="click_Back_LeaveRequest">{{ bool_LeaveRequest }}</button>
    </div>
</template>
<script setup lang="ts">
const bool_LeaveRequest = defineModel('bool_LeaveRequest');
const click_Back_LeaveRequest = () => {
    bool_LeaveRequest.value = false
    const body = document.querySelector("body") as HTMLBodyElement
    body.classList.remove("no-scroll")
}
</script>