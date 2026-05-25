  <style scoped lang="scss">
  .svgCookie {
    background: url("/cookiesoft_v_2\ 2.svg") center/cover;
    width: 85px;
    height: 85px;
    margin-right: 6px;
  }

  .textCookie {
    font-family: "lexend";
    font-size: 42px;
    margin: 0;
    font-weight: 500;
  }

  header {
    background-color: var(--plshldColor);
  }

  footer {
    margin-top: 100px;
    height: 400px;
    background-color: #404040;
    border-radius: 15px;
  }

  @media screen and (max-width: 670px) {
    .blockCookie {
      display: none;
    }
  }

  // @keyframes gradient {
  //   100% {
  //     background-position: 100% 100%;
  //   }
  // }

  // .scroll-top-btn {
  //   font-size: 24px;
  //   display: inline-flex;
  //   align-items: flex-end;
  //   height: 0px;

  //   // Класс для поднятия над футером
  //   // &.above-footer {
  //   //   position: relative;
  //   //   display: flex;
  //   //   justify-content: flex-end;
  //   //   bottom: -100px;
  //   //   // top: 50px;
  //   //   z-index: 10;
  //   //   // bottom: auto;
  //   //   // right: auto;
  //   //   // bottom: 120px; // Регулируйте это значение под высоту футера
  //   // }


  //   #scroll_top_but {
  //     display: inline-flex;
  //     align-items: center;
  //   }

  // #free_lesson_but {
  //   // position: relative;
  //   vertical-align: middle;
  //   box-sizing: border-box;
  //   // margin: 10px;
  //   border-radius: 20px;
  //   width: auto;
  //   font-size: 46px;
  //   color: #404040;
  //   font-weight: 600;
  //   text-decoration: none;
  //   background-image: repeating-linear-gradient(-45deg, #ceffff, #ceffff 1rem, #ffc9c9 1rem, #ffc9c9 2rem);
  //   background-size: 200% 200%;
  //   animation: gradient 8s linear infinite;
  //   transform: translate3d(0, 0, 0);
  //   display: inline-flex;
  //   align-items: center;
  //   padding: 8px 46px;
  //   transition: .5s;
  //   border: #404040 4px solid;
  //   position: fixed;
  //   bottom: 30px;
  //   right: 30px;
  //   z-index: 1000;
  //   // margin-right: 50px;
  //   // margin-bottom: 10px;

  //   .color_blue {
  //     transition: .5s;
  //   }

  //   .color_red {
  //     transition: .7s;
  //   }
  // }

  // #free_lesson_but:hover {
  //   animation-play-state: paused;
  //   // border: #ffffff 4px solid;
  //   background-image: repeating-linear-gradient(-45deg, #8dc8c8, #8dc8c8 1rem, #ce7f7f 1rem, #ce7f7f 2rem);

  //   .color_blue {
  //     color: #dbfef7;
  //   }

  //   .color_red {
  //     color: #ffe5e5;
  //   }
  // }

  // }
</style>

<template>
  <div id="div_top" style="height: 0px;"></div>
  <header style="position: sticky; top: 0; z-index: 3; display: flex;">
    <TransparentBox class="blockCookie" width="300px">
      <div class="svgCookie"></div>
      <!-- k - 47 -->
      <div class="textCookie">
        <span>
          ookiesoft
        </span>
      </div>
    </TransparentBox>
    <div style="display: flex;flex-direction: column;justify-content: space-between;align-items: flex-start;">
      <div class="portfolio_none" style="display: flex;">
        <ButtonHeaderTop id="but_id_1" n_id="but_id_1" tag="top" link_photo="/Vector top.svg">
        </ButtonHeaderTop>
        <ButtonHeader id="but_id_2" n_id="but_id_2" tag="telegram" link_photo="/telegram.svg">
        </ButtonHeader>
        <ButtonHeader id="but_id_3" n_id="but_id_3" tag="whatsapp" link_photo="/whatssapp.svg">
        </ButtonHeader>
        <ButtonHeader id="but_id_4" n_id="but_id_4" tag="phone" link_photo="/phone.svg">
        </ButtonHeader>
      </div>
      <div>
        <TransparentBox id="information_block" :num="17" style="font-weight: 600;">
          +79528576944
        </TransparentBox>
      </div>
    </div>
  </header>
  <RouterView></RouterView>


  <!-- оставить заявку -->
  <div class="submit_request_box_non">
    <TransparentBox>
      <h2 class="big_h2">
        Оставить заявку: Начните диалог напрямую с разработчиком
      </h2>
    </TransparentBox>
    <TransparentBox>
      <div class="center_text">
        <p>
          Выбор подрядчика для важного IT-проекта - это серьезное решение, основанное на доверии и компетенции. Давайте
          начнем с открытого диалога, где вы будете общаться непосредственно с тем, кто будет решать вашу задачу.
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
            В рамках бесплатной консультации мы обсуждаем возможные подходы, технологический стек и примерные границы
            проекта.
          </li>
          <li>
            Вы получаете прозрачное коммерческое предложение от исполнителя, с четкой оценкой, этапами и моей личной
            ответственностью за каждый из них.
          </li>
        </ol>

        <p>
          Я не предлагаю шаблонных решений, потому что не верю в их эффективность. Я предлагаю партнерство, свою
          экспертность и код, написанный для вашего успеха.
        </p>
        <!-- <SmallBusinessButton>
          Подробнее про разработку малого бизнеса
        </SmallBusinessButton> -->
        <div ref="targetSection" class="submit_request_block">
          <a v-if="isMoved" ref="buttonRef" href="./probnyy-urok.html" id="submit_request" class="relative_sub">
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


  <footer>

  </footer>
</template>


<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import TransparentBox from "./components/TransparentBox.vue";
import ButtonHeader from "./components/ButtonHeader.vue";
import ButtonHeaderTop from "./components/ButtonHeaderTop.vue";
import router from './router';
const route = useRoute();



// import { ref, onMounted, nextTick } from 'vue';

// const targetSection = ref<HTMLElement | null>(null);
// const isMoved = ref(false);
// const buttonRef = ref<HTMLElement | null>(null);

// const animateButton = async (toMoved: boolean) => {
//   if (!buttonRef.value) return;

//   // 1. First: Запоминаем текущую позицию кнопки перед сменой стейта
//   const firstRect = buttonRef.value.getBoundingClientRect();

//   // 2. Меняем состояние (переключаем v-if в шаблоне)
//   isMoved.value = toMoved;

//   // 3. Ждем, пока Vue перерисует кнопку в новом месте DOM
//   await nextTick();
//   if (!buttonRef.value) return;

//   // 4. Last: Запоминаем новую позицию
//   const lastRect = buttonRef.value.getBoundingClientRect();

//   // 5. Invert: Вычисляем дельту
//   const invertX = firstRect.left - lastRect.left;
//   const invertY = firstRect.top - lastRect.top;

//   // Мгновенно переносим кнопку визуально в старую точку
//   buttonRef.value.style.transition = 'none';
//   buttonRef.value.style.transform = `translate(${invertX}px, ${invertY}px)`;

//   // 6. Play: Плавно возвращаем в 0 (на новое место)
//   requestAnimationFrame(() => {
//     if (!buttonRef.value) return;
//     buttonRef.value.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
//     buttonRef.value.style.transform = 'translate(0, 0)';
//   });
// };

// onMounted(() => {
//   const observer = new IntersectionObserver(([entry]) => {
//     // Если блок появился — летим в центр, если исчез — возвращаемся в угол
//     if (entry.isIntersecting && !isMoved.value) {
//       animateButton(true);
//     } else if (!entry.isIntersecting && isMoved.value) {
//       animateButton(false);
//     }
//   }, {
//     rootMargin: '0px 0px -35% 0px',
//     threshold: 0.1 // Сработает сразу, как только край блока покажется/скроется
//   });

//   if (targetSection.value) observer.observe(targetSection.value);
// });


import { ref, onMounted, nextTick } from 'vue';
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