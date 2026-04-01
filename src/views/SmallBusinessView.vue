<!-- <style lang="scss">
// .small_business_page {
// background-color: #b2ffe6;
// background-color: #ceffff;

// background-color: #CEFFFF7F;
// }

</style>

<template>
    цвцвввц
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
    document.body.classList.add('small_business_page');
});
onUnmounted(() => {
    document.body.classList.remove('small_business_page');
})
</script> -->



<template>
    <!-- Кнопка, которая изначально фиксирована в правом нижнем углу -->
    <button ref="fixedBtn" class="request-btn" :class="{ moving: isMoving }" @transitionend="onTransitionEnd">
        Оставить заявку
    </button>

    <!-- Какой‑то контент, чтобы было место для прокрутки -->
    <section class="content">
        <p v-for="i in 30" :key="i">Lorem ipsum dolor sit amet {{ i }}</p>
    </section>

    <!-- Блок‑цель. Когда он появится в зоне видимости – запускаем анимацию -->
    <div ref="targetBlock" class="target">
        Здесь будет кнопка после перемещения
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

/* Ссылки на элементы */
const fixedBtn = ref<HTMLButtonElement | null>(null)
const targetBlock = ref<HTMLElement | null>(null)

/* Флаг – анимируем кнопку сейчас? */
const isMoving = ref(false)

/* Храним координаты начала и конца, чтобы задать transform */
let startRect: DOMRect | null = null
let endRect: DOMRect | null = null

/* IntersectionObserver – следит за появлением targetBlock */
let observer: IntersectionObserver | null = null

onMounted(() => {
    if (!targetBlock.value) return

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                // Запускаем анимацию только один раз, когда блок впервые попал в viewport
                if (e.isIntersecting && !isMoving.value) {
                    startAnimation()
                    // После первого срабатывания наблюдатель можно отключить
                    observer?.disconnect()
                }
            })
        },
        { threshold: 0.5 } // половина блока должна быть видна
    )

    observer.observe(targetBlock.value)
})

onBeforeUnmount(() => {
    observer?.disconnect()
})

/* ----------------- Анимация ----------------- */
function startAnimation() {
    if (!fixedBtn.value || !targetBlock.value) return

    // Текущие координаты кнопки (фиксированная в правом‑нижнем углу)
    startRect = fixedBtn.value.getBoundingClientRect()
    // Координаты места, куда нужно переместить кнопку
    endRect = targetBlock.value.getBoundingClientRect()

    /* Вычисляем смещение по X и Y.
     * Т.к. кнопка будет переключена в `position:relative`,
     * анимацию делаем через transform – это гарантирует плавность. */
    const dx = endRect.left - startRect.left
    const dy = endRect.top - startRect.top

    // Запоминаем смещение в CSS‑переменной (чтобы использовать её в стилях)
    fixedBtn.value.style.setProperty('--dx', `${dx}px`)
    fixedBtn.value.style.setProperty('--dy', `${dy}px`)

    // Включаем класс, который задаёт transition и transform
    isMoving.value = true
}

/* После окончания CSS‑транзиции переводим кнопку в обычный поток */
function onTransitionEnd(e: TransitionEvent) {
    if (e.propertyName !== 'transform') return

    const btn = fixedBtn.value
    if (!btn) return

    // Убираем все временные стили и классы
    btn.style.removeProperty('--dx')
    btn.style.removeProperty('--dy')
    btn.classList.remove('fixed-btn')
    btn.classList.add('relative-btn')

    // Теперь кнопка будет вести себя как обычный элемент (position: relative)
    isMoving.value = false
}
</script>
/* ----------------- End ----------------- */
