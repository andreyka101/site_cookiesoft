  <style scoped lang="scss">
  .svgCookie {
      background: url("../../public/cookiesoft_v_2\ 2.svg") center/cover;
      width: 85px;
      height: 85px;
      margin-right: 6px;
  }
  
  .textCookie {
      font-family: "lexend";
      font-size: 45px;
  }
  header{
    background-color: var(--plshldColor);
  }
  </style>

<template>
    <header style="position: fixed; top: 0; z-index: 3; display: flex;">
    <TransparentBox  width="300px">
      <div class="svgCookie"></div>
      <span class="textCookie">
        ookiesoft
      </span>
    </TransparentBox>
    <div style="display: flex;flex-direction: column;justify-content: space-between;">
      <div style="display: flex;">

        <ButtonHeader link="../../public/telegram.svg"></ButtonHeader>
        <ButtonHeader link="../../public/whatssapp.svg"></ButtonHeader>
        <ButtonHeader link="../../public/phone.svg"></ButtonHeader>
      </div>
      <div>
        <TransparentBox :num="13">
          14353544545
        </TransparentBox>

      </div>
    </div>
  </header>
    <RouterView></RouterView>
</template>


<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TransparentBox from "./components/TransparentBox.vue";
import ButtonHeader from "./components/ButtonHeader.vue";
</script>