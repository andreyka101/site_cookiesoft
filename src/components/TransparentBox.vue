<style scoped lang="scss">
.transparent_box{
    background-color: #ffffff52;
    backdrop-filter: blur(40px);
    border-radius: 15px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<template>
    <div class="transparent_box">
        <slot></slot>
    </div>
</template>

<script lang="ts">
// const { num } = defineProps(['num'])
export default {
    props: {
        num:{
            type: Number,
            default: 5,
        },
        width:{
            type: Number,
            default: 0,
        },
        height:{
            type: Number,
            default: 0,
        },
    },
    mounted() {
        console.log("mounted  /", Date.now())
        console.log(this.num)
        // const div_box = document.querySelector(".transparent_box") as HTMLDivElement
        // if(this.num) div_box.style.padding = this.num + "px"
        // if(this.width != 0) div_box.style.width = this.width + "px"
        // if(this.height != 0) div_box.style.height = this.height + "px"
    },
}
// const { num } = defineProps(['num'])
</script>
