<style scoped lang="scss">
.flex_w {
    .svg_div {
        display: inline-flex;
        border: 5px #323232 solid;
        border-radius: 20px;
        background-color: #fff;
        transition: 0.5s;

        svg {
            // width: 150px;
            // height: 100px;
            // display: block;
        }
    }

    // display: flex;
    // align-items: center;
    // justify-content: center;
    // justify-content: space-between;
    display: grid;
    grid-template-columns: 170px auto;
    align-items: center;
    background-color: #ffffffbc;
    border-radius: 20px;
    margin: 2px;
    color: #404040;
    width: 800px;
    padding: 5px;
    // padding-right: 70px;
    margin: auto;
    transition: 0.5s;
    text-align: center;

    &:hover {
        background-color: #ffffff;
    }

    @media screen and (max-width: 1600px) {
        width: 670px;
    }

    @media screen and (max-width: 1100px) {
        width: 550px;
    }
    @media screen and (max-width: 800px) {
        width: 450px;
    }
    @media screen and (max-width: 560px) {
        grid-template-columns: 90px auto;
        width: 250px;
    }
}

// .flex_w:hover {
//     color: #cee5ff;
//     transition: 1s;
//     background-color: #404040;

//     .svg_div {
//         background-color: #cee5ff;
//         transition: 1s;
//     }
// }

.link {
    text-decoration: none;
    display: inline-block;
    margin: auto;
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
    <div style="display: flex;">

        <RouterLink class="link" to="/medium-business">

            <div class="flex_w medium_business_button" @mouseover="hover_mouse_small = true"
                @mouseleave="hover_mouse_small = false">
                <div class="svg_div">
                    <svg viewBox="0 0 375 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect class="box2_1" x="87" y="25" width="200" height="200" fill="#404040" />
                        <rect class="box2_2" x="-85" y="425" width="200" height="200" fill="#404040" />
                        <rect class="box2_3" x="289" y="425" width="200" height="200" fill="#404040" />
                    </svg>
                </div>
                <div class="center_text button_max_text">
                    <slot></slot>
                </div>
            </div>
        </RouterLink>
    </div>


    <!-- <svg @mouseover="hover_mouse = true" @mouseleave="hover_mouse = false" viewBox="0 0 375 250" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <polygon class="box1" points="78,207 187,43 187,207" fill="#404040" />
        <polygon class="box2" points="296,207 187,43 187,207" fill="#404040" />
    </svg> -->
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import anime from 'animejs';
const hover_mouse_small = ref(false)
let animation: any = null;
watch(hover_mouse_small, (newValue) => {
    // console.log('Статус наведения:', newValue)
    if (newValue) {
        if (animation) {
            animation.forEach((anim: any) => anim.pause());
        }
        animation = [
            anime({
                targets: '.box2_1',
                x: "137",
                y: "21",
                width: "100",
                height: "100",
                // easing: 'linear',
                duration: 3000
            }),
            anime({
                targets: '.box2_2',
                x: "85",
                y: "125",
                width: "100",
                height: "100",
                // easing: 'linear',
                duration: 3000
            }),
            anime({
                targets: '.box2_3',
                x: "189",
                y: "125",
                width: "100",
                height: "100",
                // easing: 'linear',
                duration: 3000
            }),
        ];
    }
    else {
        if (animation) {
            animation.forEach((anim: any) => anim.pause());
        }
        animation = [
            anime({
                targets: '.box2_1',
                x: "87",
                y: "25",
                width: "200",
                height: "200",
                // easing: 'linear',
                duration: 1000
            }),
            anime({
                targets: '.box2_2',
                x: "-85",
                y: "425",
                width: "200",
                height: "200",
                // easing: 'linear',
                duration: 1000
            }),
            anime({
                targets: '.box2_3',
                x: "289",
                y: "425",
                width: "200",
                height: "200",
                // easing: 'linear',
                duration: 1000
            }),
        ]
    }
})






// *******************************

// import { ref, watch } from 'vue'
// import TransparentBox from "../components/TransparentBox.vue";
// // @ts-ignore
// import anime from 'animejs';

// const hover_mouse = ref(false)
// let anime1 = null as any
// let anime2 = ref(null) as any
// watch(hover_mouse, (newValue) => {
//     // console.log('Статус наведения:', newValue)
//     if (newValue) {
//         anime1 = anime({
//             targets: '.box1',
//             points: "53,235.5 53,60 162,235.5",
//             duration: 3000
//         });
//         anime2 = anime({
//             targets: '.box2',
//             points: "322,236 322,60.5 213,236",
//             duration: 3000
//         });

//     }
//     else {
//         // if (anime1) anime1.reverse()
//         // if (anime2) anime2.reverse()
//         anime1 = anime({
//             targets: '.box1',
//             points: "78,207 187,43 187,207",
//             // easing: 'linear',
//             duration: 500
//         });
//         anime({
//             targets: '.box2',
//             points: "296,207 187,43 187,207",
//             // easing: 'linear',
//             duration: 500
//         });
//     }
// })

// *******************************





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