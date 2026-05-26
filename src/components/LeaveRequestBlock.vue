<style lang="scss" scoped></style>
<template>
    <div style="position:fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: aquamarine; z-index: 10000;">
        <button @click="click_Back_LeaveRequest">{{ bool_LeaveRequest }}</button>
    </div>
</template>
<script setup lang="ts">
const bool_LeaveRequest = defineModel('bool_LeaveRequest');
const click_Back_LeaveRequest = () => {
  bool_LeaveRequest.value = false
}
</script>