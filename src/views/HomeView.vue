<style scoped lang="scss">

.block_link {
  display: flex;
  .transparent_text{
    flex-direction: column;
  }
}
// .block_link:hover {
//   .transparent_box{
//     background-color: #ffffff7e;
//   }
// }
</style>

<template>
  <TransparentBox style="margin-top: 150px;">
    Создание сайтов и приложений любой сложности
  </TransparentBox>

  <!-- <TransparentBox></TransparentBox> -->
   <!-- LINK -->
  <a class="block_link">
    <TransparentBox width="212px">
      
      <div style="background: url('../../public/svg_website_1.svg') center/cover; width: 300px; height: 150px;"></div>
    </TransparentBox>
    <TransparentBox class="transparent_text" width="100%">
        сайт под ключ
      <p>
        создание сайта любой сложность для вас и вашего бизнеса это может быть как сайт визитка так и магазин с базой данных
      </p>
      <div>
        преимущество наших сайтов:
      </div>
      <ul>
        <li>полная настройка сайта от выбора иконки до выбора домена</li>
        <li>адаптацией под любой экран</li>
        <li>простой и крассивый дизайн</li>
        <li>оптимизация для поиска в браузере (seo)</li>
      </ul>
      <p style="margin-bottom: 0;">
        <div>
          от 30.000 руб.
        </div>
        <div>
          заказать сайт
        </div>
      </p>
    </TransparentBox>
  </a>
  <!-- LINK -->
  <a class="block_link">
    <TransparentBox class="transparent_text" width="100%">
      мобильное приложение под ключ
      <p>
        Создание приложения любой сложность это может быть как магазин в вашем смартфоне так и сложный и нужный инструмент для предприятия
      </p>
      <div>
        преимущество наших приложений:
      </div>
      <ul>
        <li>простой и красивый дизайн</li>
        <li>гибкий интерфейс для любых экранов</li>
        <li>оптимизация под слабые устройства</li>
        <li>адаптация под мобильные системы (Android и iOS)</li>
      </ul>
      <p style="margin-bottom: 0;">
        <div>
          от 60.000 руб.
        </div>
        <div>
          заказать мобильное приложение
        </div>
      </p>
    </TransparentBox>
    <TransparentBox width="212px">
      <div style="background: url('../../public/svg_phone_app_1.svg') center/cover; width: 91px; height: 150px;"></div>
    </TransparentBox>
  </a>
   <!-- LINK -->
  <a class="block_link">
    <TransparentBox width="212px">
      
      <div style="background: url('../../public/svg_computer_application_1.svg') center/cover; width: 300px; height: 150px;"></div>
    </TransparentBox>
    <TransparentBox class="transparent_text" width="100%">
      компьютерное приложение под ключ
      <p>
        Создание приложения под любой компьютер: (Windows , Linux , macOS). Приложение для бизнеса или предприятия может быть как автономное и работать без интернета , так и иметь постоянную связь с сервером.  Оно будет адоптирован под любой экран и хорошо оптимизировано под слабые устройства.
      </p>
      <div>
        преимущество наших приложений:
      </div>
      <ul>
        <li>простой и красивый дизайн</li>
        <li>гибкий интерфейс для любых экранов</li>
        <li>оптимизация под слабые устройства</li>
        <li>адаптация под мобильные системы (Android и iOS)</li>
      </ul>
      <p style="margin-bottom: 0;">
        <div>
          от 80.000 руб.
        </div>
        <div>
          заказать компьютерное приложение
        </div>
      </p>
    </TransparentBox>
  </a>
  <!-- LINK -->
  <a class="block_link">
    <TransparentBox class="transparent_text" width="100%">
      Сервис под ключ
      <p>
        Создание сервиса для бизнеса и большой компании в него будет входить: сайт , приложение , сервер. Всё это будет связано на облачном уровне и хорошо взаимодействовать с пользователем (вашим клиентом или сотрудником).
      </p>
      <div>
        преимущество наших Сервисов
      </div>
      <ul>
        <li>гибкий интерфейс приложения и сайта для любых экранов</li>
        <li>функциональный и крассивый дизайн</li>
        <li>оптимизация приложения и сайта под слабые устройства</li>
        <li>оптимизация сайта для поиска в браузере (seo)</li>
        <li>высокая скорость работы сервера и базы данных</li>
      </ul>
      <p style="margin-bottom: 0;">
        <div>
          от 150.000 руб.
        </div>
        <div>
          заказать Сервис
        </div>
      </p>
    </TransparentBox>
    <TransparentBox width="212px">
      
      <div style="background: url('../../public/svg_service_1.svg') center/cover; width: 300px; height: 150px;"></div>
    </TransparentBox>
  </a>

</template>

<script setup lang="ts">
import TransparentBox from "../components/TransparentBox.vue";
</script>