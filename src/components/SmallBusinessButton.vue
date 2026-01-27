<style scoped lang="scss">
.svg_div {
    display: inline-block;
    border: 5px #404040 solid;
    border-radius: 20px;
    svg{
        width: 150px;
        height: 100px;
    }
}
</style>

<template>
    <!-- <div @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <slot></slot>
    </div> -->
    <!-- <svg class="box4" width="135" height="104" viewBox="0 0 135 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_116_3)">
            <path
            d="M54.1471 8.75155L23.5729 14.5156L4.61228 36.0791L20.4062 62.6036L53.0962 66.1549L37.3222 37.8277L54.1471 8.75155Z"
            fill="#D9D9D9" stroke="#000000" stroke-width="2" />
        </g>
    </svg> -->


    <!-- <div @mouseover="hover_mouse = true" @mouseleave="hover_mouse = false">
        <svg class="box4" width="135" height="104" viewBox="0 0 135 104" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_116_3)">
                <path
                    d="M54.1471 8.75155L23.5729 14.5156L4.61228 36.0791L20.4062 62.6036L53.0962 66.1549L37.3222 37.8277L54.1471 8.75155Z"
                    fill="#D9D9D9" stroke="#000000" stroke-width="2" />
            </g>
        </svg>
    </div> -->


    <TransparentBox @mouseover="hover_mouse = true" @mouseleave="hover_mouse = false">
        <div class="svg_div">
            <svg viewBox="0 0 375 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon class="box1" points="78,207 187,43 187,207" fill="#404040" />
                <polygon class="box2" points="296,207 187,43 187,207" fill="#404040" />
            </svg>
        </div>
        <div class="center_text">
            <slot></slot>
        </div>
    </TransparentBox>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import TransparentBox from "../components/TransparentBox.vue";
// @ts-ignore
import anime from 'animejs';

const hover_mouse = ref(false)
let anime1 = null as any
let anime2 = ref(null) as any
watch(hover_mouse, (newValue) => {
    // console.log('Статус наведения:', newValue)
    if (newValue) {
        anime1 = anime({
            targets: '.box1',
            points: "53,235.5 53,60 162,235.5",
            duration: 3000
        });
        anime2 = anime({
            targets: '.box2',
            points: "322,236 322,60.5 213,236",
            duration: 3000
        });

    }
    else {
        // if (anime1) anime1.reverse()
        // if (anime2) anime2.reverse()
            anime({
                targets: '.box1',
                points: "78,207 187,43 187,207",
                easing: 'linear',
                duration: 500
            });
        anime({
            targets: '.box2',
            points: "296,207 187,43 187,207",
            easing: 'linear',
            duration: 500
        });
    }
})







// import { onMounted, useTemplateRef } from 'vue'
// import anime from 'animejs';
// onMounted(() => {
//     anime({
//         // обрати внимание я передаю не весь svg , а его фигуру (path)
//         targets: '.box4 path',
//         // ему меняю переменную которая отвечает за точки многоугольника
//         // количество точек координат старой и новой фигуры должны совпадать
//         d: "M119.5 93.5L124.5 18.5L83 55L49.0002 14L44.5001 93.5L83 74.5L119.5 93.5Z",
//         // меняю переменную заливки
//         fill: "#303030",
//         // меняю переменную цвета рамки
//         stroke: "#FFD505",
//         // меняю переменную размера рамки
//         strokeWidth: "7",
//         // easing - режим анимации
//         easing: 'easeInOutBack',
//         // время анимации
//         duration: 1000
//     });
// })

// const startAnimation = () => {
//     // console.log(anime);
//     // @ts-ignore
//     anime({
//         // обрати внимание я передаю не весь svg , а его фигуру (path)
//         targets: '.box4 path',
//         // ему меняю переменную которая отвечает за точки многоугольника
//         // количество точек координат старой и новой фигуры должны совпадать
//         d: "M119.5 93.5L124.5 18.5L83 55L49.0002 14L44.5001 93.5L83 74.5L119.5 93.5Z",
//         // меняю переменную заливки
//         fill: "#303030",
//         // меняю переменную цвета рамки
//         stroke: "#FFD505",
//         // меняю переменную размера рамки
//         strokeWidth: "7",
//         // easing - режим анимации
//         easing: 'easeInOutBack',
//         // время анимации
//         duration: 1000
//     });
// }

</script>