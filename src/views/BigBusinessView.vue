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




</script>
