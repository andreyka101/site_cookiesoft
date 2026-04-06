<style lang="scss">
.previe_visualizer {
    display: grid !important;
    justify-content: normal !important;
    align-items: normal !important;
    grid-template-columns: 500px auto;
    grid-template-rows: auto auto auto auto;
    column-gap: 50px;

    .visualizer_details {
        display: grid;
        grid-template-columns: 80px auto;
        grid-template-rows: 80px;

        .block_figure {
            display: flex;
            align-items: center;
            justify-content: center;

            .figure_line {
                width: 80%;
                height: 80%;
                position: relative;
                background-color: #ff0000;
            }
        }

        .stretch_text {
            display: flex;
        }
    }
}

.package_selection {
    display: flex;
    flex-wrap: wrap;
    width: 2400px;
    // display: grid;
    // grid-template-columns: repeat(5, 1fr);
    // grid-template-rows: masonry;

    .package_button {
        flex: 1 1 auto;
        font-size: 22px;
        background-color: #404040; // 1 background-button
        color: #ffffff;
        border-radius: 8px;
        padding: 10px 20px;
        margin: 7px;
        border: #292929 0px solid;
        transition: 0.3s;
    }

    .package_button:hover {
        font-size: 24px;
        background-color: #404040aa; // 1 background-button
        margin: 2px -5px;
        padding: 13px 20px;
    }

    .active_button {
        flex: 1 1 auto;
        font-size: 22px;
        color: #ffffff;
        border-radius: 8px;
        padding: 10px 20px;
        margin: 7px;
        border: #292929 0px solid;
        transition: 0.3s;
        background-color: #4b9e8d; // 1 background-button
    }

}

.center_text {
    .all_lists {
        display: grid;
        grid-template-columns: auto auto auto;
        // grid-template-rows: auto auto;
        // gap: 20px;
        // justify-content: space-around;

        .div_list {
            // width: 500px;
        }
    }

    .price_center {
        text-align: center;
        font-size: 28px;
        color: #9e4b4b;
        font-weight: 600;
    }
}
</style>

<template>
    <!-- <TransparentBox class="previe_visualizer">
        <div style="background-color: blueviolet; grid-row: span 4; height: 300px; width: 100%;"></div>
        <div class="visualizer_details">
            <div class="block_figure">
                <div class="figure_line"></div>
            </div>
            <div class="stretch_text">
                <span>
                    - 1 ;
                </span>
                <span>
                    line: 5 px ;
                </span>
                <span>
                    width: 500 px ;
                </span>
                <span>
                    height: 300px ;
                </span>
                <span>
                    id: 348762
                </span>
            </div>
        </div>
        <div class="visualizer_details">
            <div class="block_figure">
                <div class="figure_line"></div>
            </div>
            <div>
                <span>
                    - 1 ;
                </span>
                <span>
                    line: 5 px ;
                </span>
                <span>
                    width: 500 px ;
                </span>
                <span>
                    height: 300px ;
                </span>
                <span>
                    id: 348762
                </span>
            </div>
        </div>
        <div class="visualizer_details">
            <div class="block_figure">
                <div class="figure_line"></div>
            </div>
            <div>
                <span>
                    - 1 ;
                </span>
                <span>
                    line: 5 px ;
                </span>
                <span>
                    width: 500 px ;
                </span>
                <span>
                    height: 300px ;
                </span>
                <span>
                    id: 348762
                </span>
            </div>
        </div>
        <div class="visualizer_details">
            <div class="block_figure">
                <div class="figure_line"></div>
            </div>
            <div>
                <span>
                    - 1 ;
                </span>
                <span>
                    line: 5 px ;
                </span>
                <span>
                    width: 500 px ;
                </span>
                <span>
                    height: 300px ;
                </span>
                <span>
                    id: 348762
                </span>
            </div>
        </div>
    </TransparentBox> -->
    <TransparentBox>
        <h1>
            Разработка малого бизнеса
        </h1>
    </TransparentBox>
    <TransparentBox>
        <div class="package_selection">
            <button @click="activeTab = 'Лендинг'"
                :class="[{ active_button: activeTab == 'Лендинг' }, { package_button: activeTab != 'Лендинг' }]">
                Лендинг (одностраничный сайт)
            </button>
            <button @click="activeTab = 'Сайт с каталогом'"
                :class="[{ active_button: activeTab == 'Сайт с каталогом' }, { package_button: activeTab != 'Сайт с каталогом' }]">
                Сайт с каталогом товаров/услуг (без онлайн-оплаты)
            </button>
            <button @click="activeTab = 'Интернет-магазин'"
                :class="[{ active_button: activeTab == 'Интернет-магазин' }, { package_button: activeTab != 'Интернет-магазин' }]">
                Интернет-магазин (базовый, до 500 товаров)
            </button>
            <button @click="activeTab = 'Сайт-визитка'"
                :class="[{ active_button: activeTab == 'Сайт-визитка' }, { package_button: activeTab != 'Сайт-визитка' }]">
                Сайт-визитка
            </button>
            <button @click="activeTab = 'онлайн-записью'"
                :class="[{ active_button: activeTab == 'онлайн-записью' }, { package_button: activeTab != 'онлайн-записью' }]">
                Сайт с онлайн-записью (услуги, врачи, мастера)
            </button>
            <button @click="activeTab = 'Калькулятор услуг'"
                :class="[{ active_button: activeTab == 'Калькулятор услуг' }, { package_button: activeTab != 'Калькулятор услуг' }]">
                Калькулятор услуг на сайте
            </button>
            <button @click="activeTab = 'Промо-сайт'"
                :class="[{ active_button: activeTab == 'Промо-сайт' }, { package_button: activeTab != 'Промо-сайт' }]">
                Промо-сайт под конкретную акцию / продукт
            </button>
            <button @click="activeTab = 'Блог + рассылка'"
                :class="[{ active_button: activeTab == 'Блог + рассылка' }, { package_button: activeTab != 'Блог + рассылка' }]">
                Блог + рассылка
            </button>
            <button @click="activeTab = 'веб-приложение (MVP)'"
                :class="[{ active_button: activeTab == 'веб-приложение (MVP)' }, { package_button: activeTab != 'веб-приложение (MVP)' }]">
                Минимальное веб-приложение (MVP) для проверки идеи
            </button>
            <button @click="activeTab = 'Мобильное приложение'"
                :class="[{ active_button: activeTab == 'Мобильное приложение' }, { package_button: activeTab != 'Мобильное приложение' }]">
                Мобильное приложение (Android + iOS) — каталог, запись, лента
            </button>
            <button @click="activeTab = 'личный кабинет'"
                :class="[{ active_button: activeTab == 'личный кабинет' }, { package_button: activeTab != 'личный кабинет' }]">
                Простой личный кабинет (история заказов, профиль)
            </button>
            <button @click="activeTab = 'Сайт-портфолио'"
                :class="[{ active_button: activeTab == 'Сайт-портфолио' }, { package_button: activeTab != 'Сайт-портфолио' }]">
                Сайт-портфолио с формой обратной связи
            </button>
            <button @click="activeTab = 'Лендинг для сбора лидов'"
                :class="[{ active_button: activeTab == 'Лендинг для сбора лидов' }, { package_button: activeTab != 'Лендинг для сбора лидов' }]">
                Лендинг для сбора лидов (email + телефон)
            </button>
        </div>
    </TransparentBox>

    <BusinessCard v-if="activeTab == 'Сайт-визитка'" />
    <LandingPage v-if="activeTab == 'Лендинг'" />

    <!-- оставить заявку -->
    <div class="submit_request_box_non">
        <TransparentBox>
            <h2 class="submit_request_h2">
                Оставить заявку: Начните диалог напрямую с разработчиком
            </h2>
        </TransparentBox>
        <TransparentBox>
            <div class="center_text">
                <p>
                    Выбор подрядчика для важного IT-проекта - это серьезное решение, основанное на доверии и
                    компетенции. Давайте
                    начнем с открытого диалога, где вы будете общаться непосредственно с тем, кто будет решать вашу
                    задачу.
                </p>
                <h3 class="h3_list">
                    Как проходит первый шаг:
                </h3>
                <ol>
                    <li>
                        Вы оставляете заявку, кратко описав свою задачу или текущую боль.
                    </li>
                    <li>
                        Я лично связываюсь с вами для уточнения деталей и первичного анализа.
                    </li>
                    <li>
                        В рамках бесплатной консультации мы обсуждаем возможные подходы, технологический стек и
                        примерные границы
                        проекта.
                    </li>
                    <li>
                        Вы получаете прозрачное коммерческое предложение от исполнителя, с четкой оценкой, этапами и
                        моей личной
                        ответственностью за каждый из них.
                    </li>
                </ol>

                <p>
                    Я не предлагаю шаблонных решений, потому что не верю в их эффективность. Я предлагаю партнерство,
                    свою
                    экспертность и код, написанный для вашего успеха.
                </p>
                <!-- <SmallBusinessButton>
          Подробнее про разработку малого бизнеса
        </SmallBusinessButton> -->
                <div ref="targetSection" class="submit_request_block">
                    <a v-if="isMoved" ref="buttonRef" href="./probnyy-urok.html" id="submit_request"
                        class="relative_sub">
                        <span class="color_red">
                            о
                        </span>
                        <span class="color_blue">
                            с
                        </span>
                        <span class="color_red">
                            т
                        </span>
                        <span class="color_blue">
                            а
                        </span>
                        <span class="color_red">
                            в
                        </span>
                        <span class="color_blue">
                            и
                        </span>
                        <span class="color_red">
                            т
                        </span>
                        <span class="color_blue">
                            ь
                        </span>
                        &nbsp
                        <span class="color_red">
                            з
                        </span>
                        <span class="color_blue">
                            а
                        </span>
                        <span class="color_red">
                            я
                        </span>
                        <span class="color_blue">
                            в
                        </span>
                        <span class="color_red">
                            к
                        </span>
                        <span class="color_blue">
                            у
                        </span>
                    </a>
                </div>
            </div>
        </TransparentBox>
    </div>


    <a v-if="!isMoved" ref="buttonRef" href="./probnyy-urok.html" id="submit_request" class="fixed_sub">
        <span class="color_red">
            о
        </span>
        <span class="color_blue">
            с
        </span>
        <span class="color_red">
            т
        </span>
        <span class="color_blue">
            а
        </span>
        <span class="color_red">
            в
        </span>
        <span class="color_blue">
            и
        </span>
        <span class="color_red">
            т
        </span>
        <span class="color_blue">
            ь
        </span>
        &nbsp
        <span class="color_red">
            з
        </span>
        <span class="color_blue">
            а
        </span>
        <span class="color_red">
            я
        </span>
        <span class="color_blue">
            в
        </span>
        <span class="color_red">
            к
        </span>
        <span class="color_blue">
            у
        </span>
    </a>
</template>

<script setup lang="ts">
import TransparentBox from "../components/TransparentBox.vue";
import BusinessCard from "../components/smallBusinessText/BusinessCard.vue";
import LandingPage from "../components/smallBusinessText/LandingPage.vue";

import { ref, onMounted, nextTick } from 'vue';

const activeTab = ref<string>('Сайт-визитка')



const targetSection = ref<HTMLElement | null>(null);
const isMoved = ref(false);
const buttonRef = ref<HTMLElement | null>(null);

const animateButton = async (toMoved: boolean) => {
    if (!buttonRef.value) return;

    // 1. First: Запоминаем текущую позицию кнопки перед сменой стейта
    const firstRect = buttonRef.value.getBoundingClientRect();

    // 2. Меняем состояние (переключаем v-if в шаблоне)
    isMoved.value = toMoved;

    // 3. Ждем, пока Vue перерисует кнопку в новом месте DOM
    await nextTick();
    if (!buttonRef.value) return;

    // 4. Last: Запоминаем новую позицию
    const lastRect = buttonRef.value.getBoundingClientRect();

    // 5. Invert: Вычисляем дельту
    const invertX = firstRect.left - lastRect.left;
    const invertY = firstRect.top - lastRect.top;

    // Мгновенно переносим кнопку визуально в старую точку
    buttonRef.value.style.transition = 'none';
    buttonRef.value.style.transform = `translate(${invertX}px, ${invertY}px)`;

    // 6. Play: Плавно возвращаем в 0 (на новое место)
    requestAnimationFrame(() => {
        if (!buttonRef.value) return;
        buttonRef.value.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        buttonRef.value.style.transform = 'translate(0, 0)';
    });
};

onMounted(() => {
    const observer2 = new IntersectionObserver(([entry]) => {
        // Если блок появился - летим в центр, если исчез - возвращаемся в угол
        if (entry.isIntersecting && !isMoved.value) {
            animateButton(true);
        } else if (!entry.isIntersecting && isMoved.value) {
            animateButton(false);
        }
    }, {
        rootMargin: '0px 0px -15% 0px',
        threshold: 0.1 // Сработает сразу, как только край блока покажется/скроется
    });

    if (targetSection.value) observer2.observe(targetSection.value);
});
</script>
