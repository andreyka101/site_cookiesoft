<style scoped lang="scss">
    .block_site{
        display: grid;
        grid-template-columns: 30% 70%;
        justify-content: start;
        img{
            border-radius: 15px;
            height: 180px;
            border: 3px #404040 solid;
        }
        .div_text{
            width: 100%;
            text-align: center;
        }
    }
</style>

<template>
    <TransparentBox>
        
   </TransparentBox>
    <!-- https://padron-rest.ru/ -->
    <a href="https://padron-rest.ru/">
        <TransparentBox class="block_site">
            <img src="/public/Снимок экрана (2).png" alt="">
            <div class="div_text">
                <h2>
                    padron-rest.ru
                </h2>
            </div>
        </TransparentBox>
    </a>
    <!-- https://www.parfumerovv.ru/ -->
     <a href="https://www.parfumerovv.ru//">
         <TransparentBox class="block_site">
             
        </TransparentBox>
    </a>
</template>

<script setup lang="ts">
    import TransparentBox from "../components/TransparentBox.vue";
</script>