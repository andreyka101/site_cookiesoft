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
        // background-color: #404040aa; // 1 background-button
        background-color: #565656d9; // 1 background-button
        margin: 2px -15px;
        // padding: 13px 20px;
        z-index: 10;
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
        grid-template-columns: auto auto;
        // grid-template-rows: auto auto;
        // gap: 20px;
        // justify-content: space-around;

        .black_block {
            background-color: #404040; // 1 background-button
            color: #ffffff;
            border-radius: 8px;
            padding: 10px 20px;
            grid-column: span 2;
            display: grid;
            grid-template-columns: auto auto auto;
            margin-bottom: 10px;
            // justify-items: center;
            .h3X{
                grid-column: span 3;
                background-color: #ffffff;
                color: #404040;
                padding: 0 20px;
                border-radius: 8px;
                margin: 10px 0;
                // text-align: center;
            }
            @media screen and (max-width: 900px){
                grid-template-columns: auto auto;
                // background-color: #ffffff;

            }
        }

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
            Разработка среднего бизнеса
        </h1>
    </TransparentBox>
    <TransparentBox>
        <div class="package_selection">

            <button @click="activeTab = 'Интернет-магазин'"
                :class="[{ active_button: activeTab == 'Интернет-магазин' }, { package_button: activeTab != 'Интернет-магазин' }]">
                Интернет-магазин (продвинутый: фильтры, отзывы, сравнение, до 10 000 товаров)
            </button>
            <button @click="activeTab = 'Корпоративный сайт'"
                :class="[{ active_button: activeTab == 'Корпоративный сайт' }, { package_button: activeTab != 'Корпоративный сайт' }]">
                Корпоративный сайт с личным кабинетом
            </button>
            <button @click="activeTab = 'Веб-приложение для клиентов'"
                :class="[{ active_button: activeTab == 'Веб-приложение для клиентов' }, { package_button: activeTab != 'Веб-приложение для клиентов' }]">
                Веб-приложение для клиентов (B2C / B2B)
            </button>
            <button @click="activeTab = 'Веб-приложение для сотрудников'"
                :class="[{ active_button: activeTab == 'Веб-приложение для сотрудников' }, { package_button: activeTab != 'Веб-приложение для сотрудников' }]">
                Веб-приложение для сотрудников (внутренние задачи)
            </button>
            <button @click="activeTab = 'Портал для поставщиков'"
                :class="[{ active_button: activeTab == 'Портал для поставщиков' }, { package_button: activeTab != 'Портал для поставщиков' }]">
                Портал для поставщиков
            </button>
            <button @click="activeTab = 'Сервис с подпиской'"
                :class="[{ active_button: activeTab == 'Сервис с подпиской' }, { package_button: activeTab != 'Сервис с подпиской' }]">
                Сервис с подпиской
            </button>
            <button @click="activeTab = 'Мобильное приложение для клиентов'"
                :class="[{ active_button: activeTab == 'Мобильное приложение для клиентов' }, { package_button: activeTab != 'Мобильное приложение для клиентов' }]">
                Мобильное приложение для клиентов (магазин, услуги, лояльность)
            </button>
            <button @click="activeTab = 'Мобильное приложение для курьеров'"
                :class="[{ active_button: activeTab == 'Мобильное приложение для курьеров' }, { package_button: activeTab != 'Мобильное приложение для курьеров' }]">
                Мобильное приложение для курьеров / сотрудников
            </button>
            <button @click="activeTab = 'Компьютерное приложение для офиса'"
                :class="[{ active_button: activeTab == 'Компьютерное приложение для офиса' }, { package_button: activeTab != 'Компьютерное приложение для офиса' }]">
                Компьютерное приложение для офиса (Windows / macOS)
            </button>
            <!-- <button @click="activeTab = 'Дашборд с аналитикой для руководителя'"
                :class="[{ active_button: activeTab == 'Дашборд с аналитикой для руководителя' }, { package_button: activeTab != 'Дашборд с аналитикой для руководителя' }]">
                Дашборд с аналитикой для руководителя
            </button> -->
            <button @click="activeTab = 'Система управления'"
                :class="[{ active_button: activeTab == 'Система управления' }, { package_button: activeTab != 'Система управления' }]">
                Система управления заказами и доставкой
            </button>
            <button @click="activeTab = 'База данных с админ-панелью'"
                :class="[{ active_button: activeTab == 'База данных с админ-панелью' }, { package_button: activeTab != 'База данных с админ-панелью' }]">
                База данных с админ-панелью под бизнес-процессы
            </button>
        </div>
    </TransparentBox>

    <ComputerApplicationOffice v-if="activeTab == 'Компьютерное приложение для офиса'" />
    <ControlSystem v-if="activeTab == 'Система управления'" />
    <CorporateWebsite v-if="activeTab == 'Корпоративный сайт'" />
    <DatabaseAdminPanel v-if="activeTab == 'База данных с админ-панелью'" />
    <MobileApplicationClients v-if="activeTab == 'Мобильное приложение для клиентов'" />
    <MobileApplicationCouriers v-if="activeTab == 'Мобильное приложение для курьеров'" />
    <OnlineStore v-if="activeTab == 'Интернет-магазин'" />
    <SubscriptionService v-if="activeTab == 'Сервис с подпиской'" />
    <SupplierPortal v-if="activeTab == 'Портал для поставщиков'" />
    <WebApplicationClients v-if="activeTab == 'Веб-приложение для клиентов'" />
    <WebApplicationEmployees v-if="activeTab == 'Веб-приложение для сотрудников'" />


</template>

<script setup lang="ts">
import TransparentBox from "../components/TransparentBox.vue";
import ComputerApplicationOffice from "../components/mediumBusinessText/ComputerApplicationOffice.vue";
import ControlSystem from "../components/mediumBusinessText/ControlSystem.vue";
import CorporateWebsite from "../components/mediumBusinessText/CorporateWebsite.vue";
// import BusinessCard from "../components/mediumBusinessText/DashboardManagers_non.vue";
import DatabaseAdminPanel from "../components/mediumBusinessText/DatabaseAdminPanel.vue";
import MobileApplicationClients from "../components/mediumBusinessText/MobileApplicationClients.vue";
import MobileApplicationCouriers from "../components/mediumBusinessText/MobileApplicationCouriers.vue";
import OnlineStore from "../components/mediumBusinessText/OnlineStore.vue";
import SubscriptionService from "../components/mediumBusinessText/SubscriptionService.vue";
import SupplierPortal from "../components/mediumBusinessText/SupplierPortal.vue";
import WebApplicationClients from "../components/mediumBusinessText/WebApplicationClients.vue";
import WebApplicationEmployees from "../components/mediumBusinessText/WebApplicationEmployees.vue";

import { ref, onMounted, nextTick } from 'vue';

const activeTab = ref<string>('Интернет-магазин')


</script>
