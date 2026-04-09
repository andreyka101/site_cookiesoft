<style scoped lang="scss">
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
        // font-size: 22px;
        background-color: #404040; // 1 background-button
        color: #ffffff;
        border-radius: 8px;
        padding: 10px 20px;
        margin: 7px;
        border: #292929 0px solid;
        transition: 0.3s;
    }

    .package_button:hover {
        // font-size: 24px;
        background-color: #404040aa; // 1 background-button
        margin: 2px -5px;
        padding: 13px 20px;
    }

    .active_button {
        flex: 1 1 auto;
        // font-size: 22px;
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
            Разработку крупного бизнеса
        </h1>
    </TransparentBox>
    <TransparentBox>
        <div class="package_selection">
            <button @click="activeTab = 'Корпоративный портал'"
                :class="[{ active_button: activeTab == 'Корпоративный портал' }, { package_button: activeTab != 'Корпоративный портал' }]">
                Корпоративный портал (тысячи сотрудников / клиентов)
            </button>
            <button @click="activeTab = 'Интернет-магазин'"
                :class="[{ active_button: activeTab == 'Интернет-магазин' }, { package_button: activeTab != 'Интернет-магазин' }]">
                Интернет-магазин (высоконагруженный, 100 000+ товаров)
            </button>
            <button @click="activeTab = 'Маркетплейс'"
                :class="[{ active_button: activeTab == 'Маркетплейс' }, { package_button: activeTab != 'Маркетплейс' }]">
                Маркетплейс (несколько продавцов на одной платформе)
            </button>
            <button @click="activeTab = 'Портал поставщиков'"
                :class="[{ active_button: activeTab == 'Портал поставщиков' }, { package_button: activeTab != 'Портал поставщиков' }]">
                Портал поставщиков (тендеры, документы, закупки)
            </button>
            <button @click="activeTab = 'Система электронного'"
                :class="[{ active_button: activeTab == 'Система электронного' }, { package_button: activeTab != 'Система электронного' }]">
                Система электронного документооборота (СЭД)
            </button>
            <button @click="activeTab = 'Веб-приложение'"
                :class="[{ active_button: activeTab == 'Веб-приложение' }, { package_button: activeTab != 'Веб-приложение' }]">
                Веб-приложение с высокой нагрузкой (RPS > 1000)
            </button>
            <button @click="activeTab = 'Мобильное приложение'"
                :class="[{ active_button: activeTab == 'Мобильное приложение' }, { package_button: activeTab != 'Мобильное приложение' }]">
                Мобильное приложение для тысяч пользователей (с push, офлайн-режим)
            </button>
            <button @click="activeTab = 'Компьютерное приложение для сотрудников'"
                :class="[{ active_button: activeTab == 'Компьютерное приложение для сотрудников' }, { package_button: activeTab != 'Компьютерное приложение для сотрудников' }]">
                Компьютерное приложение для сотрудников (внутренняя логистика, склад, производство)
            </button>
            <button @click="activeTab = 'Аналитическая платформа'"
                :class="[{ active_button: activeTab == 'Аналитическая платформа' }, { package_button: activeTab != 'Аналитическая платформа' }]">
                Аналитическая платформа (большие данные, отчеты, дашборды)
            </button>
            <button @click="activeTab = 'Система мониторинга'"
                :class="[{ active_button: activeTab == 'Система мониторинга' }, { package_button: activeTab != 'Система мониторинга' }]">
                Система мониторинга и алертинга (DevOps-решение)
            </button>
            <!-- <button @click="activeTab = 'Микросервисная архитектура'"
                :class="[{ active_button: activeTab == 'Микросервисная архитектура' }, { package_button: activeTab != 'Микросервисная архитектура' }]">
                Микросервисная архитектура под конкретную задачу
            </button> -->
            <button @click="activeTab = 'Система с разграничением'"
                :class="[{ active_button: activeTab == 'Система с разграничением' }, { package_button: activeTab != 'Система с разграничением' }]">
                Система с разграничением доступа (роли: админ, директор, менеджер, оператор)
            </button>
        </div>
    </TransparentBox>

    <AnalyticalPlatform v-if="activeTab == 'Аналитическая платформа'" />
    <ComputerApplicationEmployees v-if="activeTab == 'Компьютерное приложение для сотрудников'" />
    <CorporatePortal v-if="activeTab == 'Корпоративный портал'" />
    <ElectronicSystem v-if="activeTab == 'Система электронного'" />
    <MarketplacePlatform v-if="activeTab == 'Маркетплейс'" />
    <!-- <MicroserviceArchitecture v-if="activeTab == 'Микросервисная архитектура'" /> -->
    <MobileApplication v-if="activeTab == 'Мобильное приложение'" />
    <MonitoringSystem v-if="activeTab == 'Система мониторинга'" />
    <OnlineStore v-if="activeTab == 'Интернет-магазин'" />
    <SupplierPortal v-if="activeTab == 'Портал поставщиков'" />
    <SystemDemarcation v-if="activeTab == 'Система с разграничением'" />
    <WebApplication v-if="activeTab == 'Веб-приложение'" />

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


import AnalyticalPlatform from "../components/bigBusinessText/AnalyticalPlatform.vue";
import ComputerApplicationEmployees from "../components/bigBusinessText/ComputerApplicationEmployees.vue";
import CorporatePortal from "../components/bigBusinessText/CorporatePortal.vue";
import ElectronicSystem from "../components/bigBusinessText/ElectronicSystem.vue";
import MarketplacePlatform from "../components/bigBusinessText/MarketplacePlatform.vue";
import MicroserviceArchitecture from "../components/bigBusinessText/MicroserviceArchitecture.vue";
import MobileApplication from "../components/bigBusinessText/MobileApplication.vue";
import MonitoringSystem from "../components/bigBusinessText/MonitoringSystem.vue";
import OnlineStore from "../components/bigBusinessText/OnlineStore.vue";
import SupplierPortal from "../components/bigBusinessText/SupplierPortal.vue";
import SystemDemarcation from "../components/bigBusinessText/SystemDemarcation.vue";
import WebApplication from "../components/bigBusinessText/WebApplication.vue";

import { ref, onMounted, nextTick } from 'vue';

const activeTab = ref<string>('Система с разграничением')



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
