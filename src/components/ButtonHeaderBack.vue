<style scoped lang="scss">
.button_header {
    --t_link: url('.././public/telegram.svg');
}

.button_header {
    transition: 0.7s;
    border: 3px #40404000 solid;

    background-color: #ffffff52;
    // background-color: var(--plshldColor);
    backdrop-filter: blur(40px);
    border-radius: 15px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;

    div {
        background: url('.././public/Vector top.svg') center/cover;
        width: 30px;
        height: 30px;
    }

}

// @media screen and (max-width: 800px) {
//     .button_header div {
//         width: 40px;
//         height: 40px;
//     }

// }

@media(hover:hover) {

    .button_header:hover {
        transition: 0.1s;
        border: 3px #404040 solid;
    }
}
</style>

<!-- <template>
    <button class="button_header" :style="componentStyles">
        <div></div>
    </button>
</template> -->

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back() // Перенаправляет на одну страницу назад по истории браузера
}
</script>

<!-- <template>
  <button @click="goBack">Назад</button>
</template> -->
