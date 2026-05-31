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
    align-items: stretch;
    text-align: center;

    .grid_box {
        display: grid;
        grid-template-columns: 23% 77%;
        grid-template-rows: auto auto auto;

        input {
            color: #ffffffcc;
            border: #ffffff 0px solid;
            border-radius: 8px;
            padding: 7px;
            font-size: 21px;
            background-color: #40404052;
            margin: 10px;
            text-align: center;
        }

        input::placeholder {
            color: #ffffffcc;
        }

        .call_me_but {
            display: block;
            border-radius: 8px;
            padding: 7px;
            margin: 2px;
            border: #404040 3px solid;
            // transition: 2s;
            background-image: repeating-linear-gradient(-45deg, #ceffff, #ceffff 0.5rem, #ffc9c9 0.5rem, #ffc9c9 1rem);
            grid-column: span 2;

            span {
                display: block;
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
            border: #9a7878 3px solid;

            span {
                color: #e5ffff;
                background-color: #6e9090;

            }
        }

        .back_but {
            border: 3px #404040 solid;

            background-color: #ffffff46;
            border-radius: 8px;
            margin: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;

            grid-row: span 2;
            transition: 0.6s;

            svg {
                fill: #404040;
                transition: 0.6s;
            }
        }

        .back_but:hover {
            border: #ffc9c9 3px solid;
            cursor: pointer;

            background-color: #3f000046;

            svg {
                fill: #ffc9c9;
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
                <button class="active_button back_but" @click="click_Back_LeaveRequest">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <g id="Layer_101" data-name="Layer 101">
                            <path
                                d="m50.35 26.15h-14.48a3.36 3.36 0 0 1 -2.37-5.73l2.68-2.68a5.84 5.84 0 0 0 0-8.28 5.85 5.85 0 0 0 -8.27 0l-18.4 18.4a5.87 5.87 0 0 0 0 8.28l18.4 18.4a5.85 5.85 0 1 0 8.27-8.28l-2.68-2.68a3.36 3.36 0 0 1 2.37-5.73h14.48a5.85 5.85 0 1 0 0-11.7z">
                            </path>
                        </g>
                    </svg>
                </button>
                <input type="text" placeholder="Имя" class="button_mini_text" v-model="nameInput">
                <input type="tel" placeholder="Телефон" class="button_mini_text" v-model="phoneInput">
                <button class="active_button call_me_but" @click="click_Call_Me">
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
import { ref } from 'vue'

const bool_LeaveRequest = defineModel('bool_LeaveRequest');
const click_Back_LeaveRequest = () => {
    bool_LeaveRequest.value = false
    const body = document.querySelector("body") as HTMLBodyElement
    body.classList.remove("no-scroll")
}

const nameInput = ref<string>('')
const phoneInput = ref<string>('')
const click_Call_Me = async () => {
    let data = await fetch("https://api.cookiesoft.ru/api/omega", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            name: nameInput.value,
            phone: phoneInput.value
        })
    }) as any
    data = await data.json()
    console.log(data);

    if (data.ok) {
        bool_LeaveRequest.value = false
        const body = document.querySelector("body") as HTMLBodyElement
        body.classList.remove("no-scroll")
    }
    else {
        console.log("err")
    }

}
</script>