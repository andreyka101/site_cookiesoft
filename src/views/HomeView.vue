<style scoped lang="scss">
.block_link {
  display: flex;

  .transparent_text {
    flex-direction: column;
  }
}

// .block_link:hover {
//   .transparent_box{
//     background-color: #ffffff7e;
//   }
// }
@media screen and (max-width: 860px) {
  .div_img {
    display: none;
  }
  .div_img2 {
    display: flex !important;
  }
}
@media screen and (max-width: 650px) {
  .div_img2 {
    display: none !important;
  }
  // #div_top{
  //   height: 218px !important;
  // }
}
</style>

<template>
  <!-- <div id="div_top" style="height: 0px;"></div> -->
  <TransparentBox>
    <h2 style="margin: 0; font-size: 33px; font-weight: 800;">
      Создание сайтов и приложений любой сложности
    </h2>
  </TransparentBox>

  <!-- <TransparentBox></TransparentBox> -->
  <!-- LINK -->
  <a class="block_link">
    <TransparentBox class="div_img" width="212px">

      <div style="background: url('/svg_website_1.svg') center/cover; width: 300px; height: 150px"></div>
    </TransparentBox>
    <TransparentBox class="transparent_text" width="100%">
      <h3 style="margin: 0;">
        Сайт под ключ
      </h3>
      <p>
        Создание сайта любой сложность для вас и вашего бизнеса это может быть как сайт визитка, так и магазин с базой
        данных.
      </p>
      <h4 style="margin: 0;">
        Преимущество наших сайтов:
      </h4>
      <div style="display: flex;">
        <div class="div_img2" style="display: none; align-items: center;">
          <div style="background: url('/svg_website_1.svg') center/cover; width: 212px; height: 150px;"></div>
        </div>
          
        <ul>
          <li>полная настройка сайта от выбора иконки до выбора домена</li>
          <li>адаптацией под любой экран</li>
          <li>простой и красивый дизайн</li>
          <li>оптимизация для поиска в браузере (seo)</li>
        </ul>
      </div>
      <div>
        <div style="color: #292929;">
          от 30.000 руб.
        </div>
        <!-- <div>
          заказать сайт
        </div> -->
      </div>
    </TransparentBox>
  </a>
  <!-- LINK -->
  <a class="block_link">
    <TransparentBox class="transparent_text" width="100%">
      <h3 style="margin: 0;">
        Мобильное приложение под ключ
      </h3>
      <p>
        Создание приложения любой сложность это может быть как магазин в вашем смартфоне так и сложный и нужный
        инструмент для предприятия
      </p>
      <h4 style="margin: 0;">
        Преимущество наших приложений:
      </h4>
      <div style="display: flex;">
        <div class="div_img2" style="display: none; align-items: center;">
          <div style="background: url('/svg_phone_app_1.svg') center/cover; width: 92px; height: 150px;"></div>
        </div>
        <ul>
          <li>простой и красивый дизайн</li>
          <li>гибкий интерфейс для любых экранов</li>
          <li>оптимизация под слабые устройства</li>
          <li>адаптация под мобильные системы (Android и iOS)</li>
        </ul>
      </div>
      <div>
        <div style="color: #292929;">
          от 60.000 руб.
        </div>
        <!-- <div>
          заказать мобильное приложение
        </div> -->
      </div>
    </TransparentBox>
    <TransparentBox class="div_img" width="212px">
      <div style="background: url('/svg_phone_app_1.svg') center/cover; width: 91px; height: 150px;"></div>
    </TransparentBox>
  </a>
  <!-- LINK -->
  <a class="block_link">
    <TransparentBox class="div_img" width="212px">

      <div
        style="background: url('/svg_computer_application_1.svg') center/cover; width: 300px; height: 150px;">
      </div>
    </TransparentBox>
    <TransparentBox class="transparent_text" width="100%">
      <h3 style="margin: 0;">
        Компьютерное приложение под ключ
      </h3>
      <p>
        Создание приложения под любой компьютер: (Windows, Linux, macOS). Приложение для бизнеса или предприятия может
        быть как автономное и работать без интернета, так и иметь постоянную связь с сервером. Оно будет адоптирован под
        любой экран и хорошо оптимизировано под слабые устройства.
      </p>
      <h4 style="margin: 0;">
        Преимущество наших приложений:
      </h4>
      <div style="display: flex;">
        <div class="div_img2" style="display: none; align-items: center;">
          <div style="background: url('/svg_computer_application_1.svg') center/cover; width: 212px; height: 150px;"></div>
        </div>

        <ul>
          <li>простой и красивый дизайн</li>
          <li>гибкий интерфейс для любых экранов</li>
          <li>оптимизация под слабые устройства</li>
          <li>адаптация под мобильные системы (Android и iOS)</li>
        </ul>
      </div>
      <div>
        <div style="color: #292929;">
          от 80.000 руб.
        </div>
        <!-- <div>
          заказать компьютерное приложение
        </div> -->
      </div>
    </TransparentBox>
  </a>
  <!-- LINK -->
  <a class="block_link">
    <TransparentBox class="transparent_text" width="100%">
      <h3 style="margin: 0;">
        Сервис под ключ
      </h3>
      <p>
        Создание сервиса для бизнеса и большой компании в него будет входить: сайт , приложение , сервер. Всё это будет
        связано на облачном уровне и хорошо взаимодействовать с пользователем (вашим клиентом или сотрудником).
      </p>
      <h4 style="margin: 0;">
        Преимущество наших Сервисов
      </h4>
      <div style="display: flex;">
        <div class="div_img2" style="display: none; align-items: center;">
          <div style="background: url('/svg_service_1.svg') center/cover; width: 212px; height: 150px;"></div>
        </div>
        <ul>
          <li>гибкий интерфейс приложения и сайта для любых экранов</li>
          <li>функциональный и красивый дизайн</li>
          <li>оптимизация приложения и сайта под слабые устройства</li>
          <li>оптимизация сайта для поиска в браузере (seo)</li>
          <li>высокая скорость работы сервера и базы данных</li>
        </ul>
      </div>
      <div>
        <div style="color: #292929;">
          от 150.000 руб.
        </div>
        <!-- <div>
          заказать Сервис
        </div> -->
      </div>
    </TransparentBox>
    <TransparentBox class="div_img" width="212px">

      <div style="background: url('/svg_service_1.svg') center/cover; width: 300px; height: 150px;"></div>
    </TransparentBox>
  </a>

</template>

<script setup lang="ts">
import TransparentBox from "../components/TransparentBox.vue";
</script>