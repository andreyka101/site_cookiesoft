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

  @media screen and (max-width: 800px) {
    #information_block {
      display: none;
    }
  }

  @media screen and (max-width: 650px) {

    // .textCookie span {
    //     display: none;
    // }
    // .svgCookie{
    //   margin: 0;
    // }
    // .blockCookie{
    //   width: 85px !important;
    // }
    header {
      flex-direction: column;
      top: -140px !important;
    }
  }
</style>

<template>
  <div id="div_top" style="height: 0px;"></div>
  <header style="position: sticky; top: 0; z-index: 3; display: flex;">
    <TransparentBox class="blockCookie" width="300px">
      <div class="svgCookie"></div>
      <h1 class="textCookie">
        <span>
          ookiesoft
        </span>
      </h1>
    </TransparentBox>
    <div v-if="route.path != '/portfolio'" style="display: flex;flex-direction: column;justify-content: space-between;align-items: flex-start;">
      <div class="portfolio_none" style="display: flex;">
        <ButtonHeader id="but_id_1" n_id="but_id_1" tag="top" link_photo="/Vector top.svg">
        </ButtonHeader>
        <ButtonHeader id="but_id_2" n_id="but_id_2" tag="telegram" link_photo="/telegram.svg">
        </ButtonHeader>
        <ButtonHeader id="but_id_3" n_id="but_id_3" tag="whatsapp" link_photo="/whatssapp.svg">
        </ButtonHeader>
        <ButtonHeader id="but_id_4" n_id="but_id_4" tag="phone" link_photo="/phone.svg">
        </ButtonHeader>
      </div>
      <div v-if="route.path != '/portfolio'">
        <TransparentBox id="information_block" :num="17" style="font-weight: 600;">
          +79528576944
        </TransparentBox>

      </div>
    </div>
  </header>
  <RouterView></RouterView>
</template>


<script setup lang="ts">
import { RouterLink, RouterView,useRoute } from 'vue-router'
import TransparentBox from "./components/TransparentBox.vue";
import ButtonHeader from "./components/ButtonHeader.vue";
import router from './router';
const route = useRoute();


// if(window.location.href == "https://cookiesoft.ru/portfolio")
  // if (window.location.href == "http://localhost:5173/portfolio")
</script>