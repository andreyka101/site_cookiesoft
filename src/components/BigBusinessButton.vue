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
    grid-template-columns: 169px auto;
    align-items: center;
    background-color: #404040bc;
    border-radius: 20px;
    margin: 2px;
    color: #ffffff;
    width: 800px;
    padding: 5px;
    // padding-right: 70px;
    margin: auto;
    transition: 0.5s;
    text-align: center;

    &:hover {
        background-color: #404040;
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
//     color: #cfceff;
//     transition: 1s;
//     background-color: #404040;

//     .svg_div {
//         background-color: #cfceff;
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

        <RouterLink class="link" to="/big-business">

            <div class="flex_w big_business_button" @mouseover="hover_mouse_small = true"
                @mouseleave="hover_mouse_small = false">
                <div class="svg_div">
                    <svg viewBox="0 0 375 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- Левая половина (аппроксимация) -->
                        <path class="box3_1"
                            d="M187 226C173.736 226 160.603 223.388 148.349 218.312C136.095 213.236 124.961 205.797 115.582 196.418C106.203 187.039 98.7639 175.905 93.6882 163.651C88.6124 151.397 86 138.264 86 125C86 111.736 88.6124 98.6029 93.6882 86.349C98.7639 74.0951 106.204 62.9609 115.582 53.5822C124.961 44.2035 136.095 36.7639 148.349 31.6882C160.603 26.6124 173.736 24 187 24L187 125V226Z"
                            fill="#404040" />
                        <path class="box3_2"
                            d="M187 226C213.787 226 239.477 215.359 258.418 196.418C277.359 177.477 288 151.787 288 125C288 98.2131 277.359 72.5234 258.418 53.5822C239.477 34.641 213.787 24 187 24L187 125V226Z"
                            fill="#404040" />
                        <circle class="box3_3" cx="142" cy="-269" r="45" fill="#404040" />
                        <circle class="box3_4" cx="232" cy="381" r="45" fill="#404040" />
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
                targets: '.box3_1',
                d: "M-15 24C-1.73649 24 11.3971 26.6124 23.651 31.6882C35.9049 36.7639 47.0391 44.2035 56.4178 53.5822C65.7965 62.9609 73.2361 74.0951 78.3118 86.349C83.3876 98.6029 86 111.736 86 125C86 138.264 83.3876 151.397 78.3118 163.651C73.2361 175.905 65.7965 187.039 56.4178 196.418C47.0391 205.797 35.9049 213.236 23.651 218.312C11.3971 223.388 -1.7365 226 -15 226L-15 125V24Z5",
                duration: 1500
            }),
            anime({
                targets: '.box3_2',
                d: "M389 24C362.213 24 336.523 34.641 317.582 53.5822C298.641 72.5234 288 98.2131 288 125C288 151.787 298.641 177.477 317.582 196.418C336.523 215.359 362.213 226 389 226L389 125V24Z",
                duration: 1500
            }),
            anime({
                targets: '.box3_3',
                cx: "142",
                cy: "69",
                duration: 3000
            }),
            anime({
                targets: '.box3_4',
                cx: "232",
                cy: "181",
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
                targets: '.box3_1',
                d: "M187 226C173.736 226 160.603 223.388 148.349 218.312C136.095 213.236 124.961 205.797 115.582 196.418C106.203 187.039 98.7639 175.905 93.6882 163.651C88.6124 151.397 86 138.264 86 125C86 111.736 88.6124 98.6029 93.6882 86.349C98.7639 74.0951 106.204 62.9609 115.582 53.5822C124.961 44.2035 136.095 36.7639 148.349 31.6882C160.603 26.6124 173.736 24 187 24L187 125V226Z",
                duration: 1000
            }),
            anime({
                targets: '.box3_2',
                d: "M187 226C213.787 226 239.477 215.359 258.418 196.418C277.359 177.477 288 151.787 288 125C288 98.2131 277.359 72.5234 258.418 53.5822C239.477 34.641 213.787 24 187 24L187 125V226Z",
                duration: 1000
            }),
            anime({
                targets: '.box3_3',
                cx: "142",
                cy: "-269",
                duration: 1000
            }),
            anime({
                targets: '.box3_4',
                cx: "232",
                cy: "381",
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