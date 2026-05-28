<style lang="scss" scoped>
.background_div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #87878733;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
}

.transparent_box {
    border: #404040 4px solid;
    width: 550px;
    display: flex;
    flex-direction: column;

    .grid_box {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto;
        input {
            color: #ffffffcc;
            border: #ffffff 0px solid;
            border-radius: 8px;
            padding: 7px;
            font-size: 15px;
            background-color: #40404052;
            margin: 10px;
        }

        .call_me_but {
            display: inline-block;
            border-radius: 8px;
            padding: 5px;
            margin: 2px;
            border: #000 0px solid;
            // transition: 2s;
            background-image: repeating-linear-gradient(-45deg, #ceffff, #ceffff 0.5rem, #ffc9c9 0.5rem, #ffc9c9 1rem);

            span {
                display: inline-block;
                padding: 8px 10px;
                color: #FFFFFF;
                border-radius: 8px;
                background-color: #404040;
                transition: 0.6s;
                font-weight: 900;
            }
        }

        .call_me_but:hover {
            cursor: pointer;

            span {
                color: #404040;
                background-color: #FFC4C4;

            }
        }

        .back_but{
    //             transition: 0.7s;
    // border: 3px #40404000 solid;

    // background-color: #ffffff52;
    border-radius: 8px;
    // margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 4px;

    grid-row: span 3;

    div {
        background: url('.././public/levaya_strelka_vuvdr4ly3rex.svg') center/cover;
        width: 80px;
        height: 80px;
    }
        }
    }
}
</style>
<template>
    <div class="background_div">
        <!-- <button @click="click_Back_LeaveRequest">назад X</button> -->
        <TransparentBox>
            <h2>
                Нужен сайт, но не знаете с чего начать?
            </h2>
            <p>
                Задайте вопрос нашему ведущему разработчику. Консультация бесплатна и ни к чему не обязывает.
            </p>
            <div class="grid_box">
                <button class="back_but">
                    <div></div>
                </button>
                <input type="text">
                <input type="tel">
                <button class="active_button call_me_but">
                    <span>
                        позвоните мне
                    </span>
                </button>
            </div>
        </TransparentBox>
    </div>
</template>
<script setup lang="ts">
import TransparentBox from './TransparentBox.vue'

const bool_LeaveRequest = defineModel('bool_LeaveRequest');
const click_Back_LeaveRequest = () => {
    bool_LeaveRequest.value = false
    const body = document.querySelector("body") as HTMLBodyElement
    body.classList.remove("no-scroll")
}
</script>