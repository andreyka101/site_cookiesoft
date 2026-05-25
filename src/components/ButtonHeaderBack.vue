<style scoped lang="scss">
.button_back {
    transition: 0.7s;
    border: 3px #40404000 solid;

    background-color: #ffffff52;
    backdrop-filter: blur(40px);
    border-radius: 15px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;

    div {
        background: url('.././public/Vector top.svg') center/cover;
        width: 30px;
        height: 30px;
        rotate: -90deg;
    }

}

@media(hover:hover) {

    .button_header:hover {
        transition: 0.1s;
        border: 3px #404040 solid;
    }
}
</style>

<template>
    <button class="button_back" @click="goBack" @mouseover="goMouseOver" @mouseout="goMouseOut">
        <div></div>
    </button>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()
// onMounted(() => {
// })

const goBack = () => {
    router.back() // Перенаправляет на одну страницу назад по истории браузера
}

const goMouseOver = () => {
    const information_block = document.querySelector("#information_block") as HTMLDivElement
    information_block.innerHTML = `Назад`
}

const goMouseOut = () => {
    const information_block = document.querySelector("#information_block") as HTMLDivElement
    information_block.innerHTML = `+79528576944`
}

</script>
