<style lang="scss" scoped>
footer {
    margin-top: 100px;
    // height: 400px;
    background-color: #404040;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    padding-top: 60px;
    padding-bottom: 140px;

    .box_width {
        width: 70%;
        display: flex;
        justify-content: space-evenly;

        span {
            color: #fff;
            font-size: 28px;
            margin-bottom: 7px;
            display: inline-block;
        }

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;

            li {
                a {
                    text-decoration: none;
                    color: #fff;
                    font-size: 22px;
                    display: inline-block;
                    margin-bottom: 3px;
                }

                a:hover {
                    color: #d1d1d1;
                }
            }
        }

    }

    ul:hover span {
        color: #e88c8c;
    }


}
</style>
<template>
    <footer>
        <div class="box_width">
            <div>
                <span class="h3_list">Карта сайта</span>
                <nav>
                    <ul>
                        <li>
                            <RouterLink to="/">Главная</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/portfolio">Портфолио</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/small-business">Разработка малого бизнеса</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/medium-business">Разработка среднего бизнеса</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/big-business">Разработка крупного бизнеса</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <span class="h3_list">Контакты</span>
                <ul>
                    <li>
                        <!-- 
                            :href связывает ссылку
                            :class динамически добавляет класс 'button_active', если isActive === true
                            @click.prevent предотвращает переход по ссылке javascript:void(0) на ПК
                            -->
                        <a :href="phoneHref" :class="{ 'button_active': isActive }" @click="fun_phone" class="contact">
                            {{ buttonText }}
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+79528576944" id="whatsapp" class="contact">
                            WhatsApp
                        </a>
                    </li>
                    <li>
                        <a href="https://max.ru/u/f9LHodD0cOLl7TTR_psVQuFEnw7XYNcAGJoSFY4RJoq9pJ2jGQvTNofRCm4" id="MAX"
                            class="contact">
                            MAX
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/+79528576944" id="telegram" class="contact">
                            Telegram
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
// @ts-ignore
let detect = new MobileDetect(window.navigator.userAgent)
// 1. Проверяем, мобильное ли устройство
const isMobile = detect.mobile() !== null

// 2. Реактивные переменные для текста и класса
const buttonText = ref('+79528576944')
const isActive = ref(false)

// 3. Вычисляемый href (для мобильных — звонок, для ПК — заглушка)
const phoneHref = computed(() => {
    return isMobile ? 'tel:+79528576944' : 'javascript:void(0)'
})

// 4. Функция, которая сработает при клике
const fun_phone = async () => {
    // Если это ПК (не мобильный)
    if (!isMobile) {
        try {
            // Копируем почту (или номер, в коде у вас была почта)
            await navigator.clipboard.writeText("+79528576944")

            // Меняем состояние (Vue сам обновит DOM)
            isActive.value = true
            buttonText.value = 'номер скопирован'

            // Возвращаем всё назад через 3 секунды
            setTimeout(() => {
                isActive.value = false
                buttonText.value = '+79528576944'
            }, 3000)

        } catch (err) {
            console.error('Произошла ошибка при копировании текста: ', err)
        }
    }
}
</script>