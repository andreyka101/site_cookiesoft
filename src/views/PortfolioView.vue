<style scoped lang="scss">
.block_site {
    display: flex;

    img {
        border-radius: 15px;
        height: 220px;
        border: 3px #404040 solid;
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
</style>

<template>
    <TransparentBox>

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
</template>

<script setup lang="ts">
import TransparentBox from "../components/TransparentBox.vue";
</script>