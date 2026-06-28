<style scoped lang="scss">
.grid_transparent {
    background-color: #ffffff52;
    backdrop-filter: blur(40px);
    border-radius: 15px;
    padding: 20px;
    margin: 10px 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;


    .grid_table_row {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        overflow-x: auto;
        overflow-y: auto;

        .grid_table_mini {
            min-width: 1000px;
        }
    }

    .grid_table_mini {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 4fr;
        gap: 10px;

        div {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 15px;
            padding: 10px;
            border: 3px #404040 solid;
            transition: 0.5s;
            font-weight: 600;
        }

        .super_long {
            grid-column: span 4;
        }
    }

    .table_mini_hover:hover {
        div {
            border: 3px #d00000 solid;
            color: #d00000;
            background-color: #5d000018;
        }
    }
}
</style>

<template>
    <div class="grid_transparent">
        <div class="grid_table_mini">
            <div class="super_long">
                Решения для мгновенного запуска бизнеса
            </div>
        </div>


        <div class="grid_table_row">
            <div class="grid_table_mini">
                <div class="h3_list">
                    название
                </div>
                <div class="h3_list">
                    цена
                </div>
                <div class="h3_list">
                    время разработки
                </div>
                <div class="h3_list">
                    описание услуги
                </div>
            </div>
            <div class="grid_table_mini table_mini_hover">
                <div class="name_box h3_list">
                    Лендинг
                </div>
                <div>
                    от 5.000 руб
                </div>
                <div>
                    от 3 дней
                </div>
                <div>
                    Продуманная одностраничная воронка продаж с индивидуальной структурой, цепляющими заголовками и
                    чистой
                    анимацией для эффективного сбора лидов под ваш продукт или акцию.
                </div>
            </div>

            <div class="grid_table_mini table_mini_hover">
                <div class="name_box h3_list">
                    Сайт-визитка
                </div>
                <div>
                    от 10.000 руб
                </div>
                <div>
                    от 5 дней
                </div>
                <div>
                    Компактный веб-ресурс ручной работы из 3–7 страниц для быстрой, безопасной и уникальной презентации
                    вашего бизнеса, услуг и контактов в сети.
                </div>
            </div>
            <div class="grid_table_mini table_mini_hover">
                <div class="name_box h3_list">
                    Сайт-портфолио
                </div>
                <div>
                    от 15.000 руб
                </div>
                <div>
                    от 7 дней
                </div>
                <div>
                    Индивидуальный сайт с главным акцентом на эффектную визуальную демонстрацию ваших работ и кейсов для
                    превращения зрителей в реальных клиентов.
                </div>
            </div>
            <div class="grid_table_mini table_mini_hover">
                <div class="name_box h3_list">
                    Сайт-каталог
                </div>
                <div>
                    от 20.000 руб
                </div>
                <div>
                    от 10 дней
                </div>
                <div>
                    Наглядная онлайн-витрина вашего ассортимента без корзины и оплаты, созданная для удобного изучения
                    товаров и быстрого перевода клиента на личное общение.
                </div>
            </div>
            <div class="grid_table_mini table_mini_hover">
                <div class="name_box h3_list">
                    Сайт записью
                </div>
                <div>
                    от 30.000 руб
                </div>
                <div>
                    от 15 дней
                </div>
                <div>
                    Сайт с онлайн-записью для автоматического бронирования услуг, специалистов и времени без звонков.
                    Идеально для салонов, клиник, автосервисов и бьюти-мастеров.
                </div>
            </div>
            <div class="grid_table_mini table_mini_hover">
                <div class="name_box h3_list">
                    Интернет-магазин
                </div>
                <div>
                    от 40.000 руб
                </div>
                <div>
                    от 20 дней
                </div>
                <div>
                    Быстрый интернет-магазин с каталогом, корзиной и оплатой до 500 товаров без ежемесячных платежей.
                    Подходит для локальных брендов, мастерских и розничной торговли.
                </div>
            </div>
            <div class="grid_table_mini table_mini_hover">
                <div class="name_box h3_list">
                    веб-приложение (MVP)
                </div>
                <div>
                    от 40.000 руб
                </div>
                <div>
                    от 20 дней
                </div>
                <div>
                    Упрощенная версия продукта с главной функцией для быстрого тестирования идеи на рынке. Идеально для
                    стартапов, предпринимателей и проверки гипотез без лишних трат.
                </div>
            </div>
            <div class="grid_table_mini table_mini_hover">
                <div class="name_box h3_list">
                    Мобильное приложение
                </div>
                <div>
                    от 50.000 руб
                </div>
                <div>
                    от 25 дней
                </div>
                <div>
                    Мобильное приложение под Android и iOS с push-уведомлениями, каталогом и записью из единого кода.
                    Отлично для сетей салонов, фитнес-студий, клиник и кафе.
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TransparentBox from "./TransparentBox.vue";
</script>
