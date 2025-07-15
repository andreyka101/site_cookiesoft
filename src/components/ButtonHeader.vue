<style scoped lang="scss">
    .button_header{
        --t_link: url('../../public/telegram.svg');
    }
    .button_header{
        div{

            background: var(--t_link) center/cover;
            width: 30px;
            height: 30px;
        }
    }
    .button_header:hover{
        border: 3px #404040 solid;
        background-color: #FFFFFFA4;
    }
</style>

<template>
    <TransparentBox class="button_header" :num="7" :style="componentStyles">
        <div></div>
    </TransparentBox>
</template>

<script lang="ts">
    import TransparentBox from "./TransparentBox.vue";
    export default {
    props: {
        link:{
            type: String
        }
    },
    components:{
        TransparentBox
    },
    mounted() {
        console.log("mounted  /", Date.now())
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
        '--t_link': "url('" + this.link +"')",
      }
    }
  }
    // mounted() {
    //     console.log("mounted  /", Date.now())
    //     // console.log(this.num)
    //     console.log(this.width)
    //     // const div_box = document.querySelector(".transparent_box") as HTMLDivElement
    //     // if(this.num) div_box.style.padding = this.num + "px"
    //     // if(this.width != 0) div_box.style.width = this.width + "px"
    //     // if(this.height != 0) div_box.style.height = this.height + "px"
    // },
}
</script>
