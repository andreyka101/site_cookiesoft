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


  /* Анимация появления и исчезновения */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  /* Автоматическая плавная анимация сдвига для всех ОСТАЛЬНЫХ кнопок */
  .fade-move {
    transition: transform 0.3s ease;
  }

  /* Обязательно для leave-active, чтобы освободить место соседним кнопкам в момент анимации */
  .fade-leave-active {
    position: absolute;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(-10px);
  }
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
      <!-- TransitionGroup сам создаст div с вашим классом и стилями -->
      <TransitionGroup tag="div" name="fade" class="portfolio_none" style="display: flex;">
        <!-- Для TransitionGroup у каждого дочернего элемента ОБЯЗАН быть уникальный :key -->
        <ButtonHeaderBack v-if="route.path !== '/'" key="back-btn" />

        <ButtonHeaderTop key="but_1" id="but_id_1" n_id="but_id_1" tag="top" link_photo="/Vector top.svg" />
        <ButtonHeader key="but_2" id="but_id_2" n_id="but_id_2" tag="telegram" link_photo="/telegram.svg" />
        <ButtonHeader key="but_3" id="but_id_3" n_id="but_id_3" tag="whatsapp" link_photo="/whatssapp.svg" />
        <ButtonHeader key="but_4" id="but_id_4" n_id="but_id_4" tag="phone" link_photo="/phone.svg" />
      </TransitionGroup>
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
          <button v-if="isMoved" @click="click_LeaveRequest" ref="buttonRef" id="submit_request" class="relative_sub">
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
          </button>
        </div>
      </div>
    </TransparentBox>
  </div>


  <button v-if="!isMoved" @click="click_LeaveRequest" ref="buttonRef" id="submit_request" class="fixed_sub">
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
  </button>

<LeaveRequestBlock v-if="bool_LeaveRequest" v-model:title="click_Back_LeaveRequest" />


  <footer>

  </footer>
</template>


<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import TransparentBox from "./components/TransparentBox.vue";
import ButtonHeader from "./components/ButtonHeader.vue";
import ButtonHeaderTop from "./components/ButtonHeaderTop.vue";
import ButtonHeaderBack from "./components/ButtonHeaderBack.vue";
import LeaveRequestBlock from "./components/LeaveRequestBlock.vue";
import router from './router';
const route = useRoute();


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




let bool_LeaveRequest = ref(false)
const click_LeaveRequest = () => {
  bool_LeaveRequest.value = true
}
const click_Back_LeaveRequest = () => {
  bool_LeaveRequest.value = false
}

</script>