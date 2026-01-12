<style scoped lang="scss">
.block_site {
    display: flex;

    img {
        border-radius: 15px;
        height: 220px;
        border: 3px #404040 solid;
    }

    @media screen and (max-width: 1000px) {
        img {
            display: none;
        }
    }

    .div_text {
        // display: flex;
        // width: 100%;
        text-align: center;
        flex-grow: 1;
    }
}

a {
    text-decoration: none;
    color: #404040;
}


.foreground_for_photo {
    background-color: rgba(65, 65, 65, 0.485);
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    align-items: center;
    justify-content: center;

    .but_arrow_left {
        svg {
            width: 55px;
        }
    }

    .but_arrow_right {
        svg {
            rotate: 180deg;
            width: 55px;
        }
    }
}
</style>

<template>
    <TransparentBox style="text-align: center; font-size: 28px; font-weight: 600;">
        Портфолио Квашнина Андрея для сайта профи.ру
    </TransparentBox>
    <!-- https://padron-rest.ru/ -->
    <a target="_blank" href="https://padron-rest.ru/">
        <TransparentBox class="block_site">
            <img src="/public/Снимок экрана (3).png" alt="">
            <div class="div_text">
                <h2>
                    padron-rest.ru
                </h2>
                <div>
                    <div>
                        Сайт ресторан с функциями:
                    </div>
                    <ul style="display: inline-flex;flex-direction: column; align-items: flex-start;">
                        <li>бронирования столиков</li>
                        <li>оставления заявки для банкетов</li>
                        <li>просмотра фото ресторана на полном экране</li>
                        <li>встроеннаой картой</li>
                    </ul>
                </div>
            </div>
        </TransparentBox>
    </a>
    <!-- https://goodschool.online/ -->
    <a target="_blank" href="https://goodschool.online/">
        <TransparentBox class="block_site">
            <img src="/public/Снимок экрана (5).png" alt="">
            <div class="div_text">
                <h2>
                    goodschool.online
                </h2>
                <div>
                    <div>
                        Сайт ресторан с функциями:
                    </div>
                    <ul style="display: inline-flex;flex-direction: column; align-items: flex-start;">
                        <li>список репетиторов </li>
                        <li>умное расписание</li>
                        <li>автоматический подбор репетитора</li>
                        <li>встроенная оплата</li>
                        <li>чат с репетитором</li>
                        <li>индивидуальный и групповой видео звонок</li>
                        <li>регистрация и вход</li>
                        <li>восстановление пароля</li>
                    </ul>
                </div>
            </div>
        </TransparentBox>
    </a>
    <!-- https://www.parfumerovv.ru/ -->
    <a target="_blank" href="https://www.parfumerovv.ru/">
        <TransparentBox class="block_site">
            <img src="/public/Снимок экрана (2).png" alt="">
            <div class="div_text">
                <h2>
                    parfumerovv.ru
                </h2>
                <div>
                    <div>
                        Сайт магазин духов с функциями:
                    </div>
                    <ul style="display: inline-flex;flex-direction: column; align-items: flex-start;">
                        <li>список товаров</li>
                        <li>поиск с фильтром и сортировкой</li>
                        <li>анимирование банеры с товаром</li>
                        <li>встроенным чатом</li>
                        <li>встроенная оплата</li>
                        <li>корзиной для покупок </li>
                        <li>доставка</li>
                        <li>регистрация и вход</li>
                        <li>восстановление пароля</li>
                    </ul>
                </div>
            </div>
        </TransparentBox>
    </a>
    <!-- <div class="foreground_for_photo">
        <button class="but_arrow_left">
            <svg width="" version="1.1" id="Capa_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 292.359 292.359" style="enable-background:new 0 0 292.359 292.359;" xml:space="preserve">
                <g>
                    <path
                        d="M222.979,5.424C219.364,1.807,215.08,0,210.132,0c-4.949,0-9.233,1.807-12.848,5.424L69.378,133.331 c-3.615,3.617-5.424,7.898-5.424,12.847c0,4.949,1.809,9.233,5.424,12.847l127.906,127.907c3.614,3.617,7.898,5.428,12.848,5.428 c4.948,0,9.232-1.811,12.847-5.428c3.617-3.614,5.427-7.898,5.427-12.847V18.271C228.405,13.322,226.596,9.042,222.979,5.424z" />
                </g>
            </svg>
        </button>
        <div class="img"></div>
        <button class="but_arrow_right">
            <svg width="" version="1.1" id="Capa_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 292.359 292.359" style="enable-background:new 0 0 292.359 292.359;" xml:space="preserve">
                <g>
                    <path
                        d="M222.979,5.424C219.364,1.807,215.08,0,210.132,0c-4.949,0-9.233,1.807-12.848,5.424L69.378,133.331 c-3.615,3.617-5.424,7.898-5.424,12.847c0,4.949,1.809,9.233,5.424,12.847l127.906,127.907c3.614,3.617,7.898,5.428,12.848,5.428 c4.948,0,9.232-1.811,12.847-5.428c3.617-3.614,5.427-7.898,5.427-12.847V18.271C228.405,13.322,226.596,9.042,222.979,5.424z" />
                </g>
            </svg>
        </button>
    </div> -->
</template>

<script setup lang="ts">
import TransparentBox from "../components/TransparentBox.vue";
</script>