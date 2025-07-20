<style scoped lang="scss">
.transparent_box {
  --pad: 1px;
  --wid: 1px;
  --hei: 1px;
  }
.transparent_box{
    background-color: #ffffff52;
    // background-color: var(--plshldColor);
    backdrop-filter: blur(40px);
    border-radius: 15px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--pad);
    height: var(--hei);
    width: var(--wid);
    border: 0px #ff1515 solid;
}
</style>

<template>
    <div class="transparent_box" :style="componentStyles">
        <slot></slot>
    </div>
</template>

<script lang="ts">
// const { num } = defineProps(['num'])
export default {
    props: {
        num:{
            type: Number,
            default: 20,
        },
        width:{
            type: String,
            default: "-",
        },
        height:{
            type: String,
            default: "-",
        },
    },
    mounted() {
        // console.log("mounted  /", Date.now())
        // console.log(this.num)
        // console.log(this.width)
        // const div_box = document.querySelector(".transparent_box") as HTMLDivElement
        // if(this.num) div_box.style.padding = this.num + "px"
        // if(this.width != 0) div_box.style.width = this.width + "px"
        // if(this.height != 0) div_box.style.height = this.height + "px"
    },
    computed: {
    componentStyles() {
      return {
        '--pad': (this.num) +"px",
        '--wid': this.width,
        '--hei': this.height,
      }
    }
  }
}
// const { num } = defineProps(['num'])
</script>
