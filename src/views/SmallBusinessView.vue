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



<script setup lang="ts">
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
    const observer = new IntersectionObserver(([entry]) => {
        // Если блок появился — летим в центр, если исчез — возвращаемся в угол
        if (entry.isIntersecting && !isMoved.value) {
            animateButton(true);
        } else if (!entry.isIntersecting && isMoved.value) {
            animateButton(false);
        }
    }, {
        rootMargin: '0px 0px -35% 0px',
        threshold: 0.1 // Сработает сразу, как только край блока покажется/скроется
    });

    if (targetSection.value) observer.observe(targetSection.value);
});
</script>

<template>
    <div class="container">
        <div class="spacer">Листай вниз...</div>

        <!-- Целевой блок -->
        <div ref="targetSection" class="target-block">
            <h2>Секция с формой</h2>
            <div class="slot">
                <!-- Кнопка ВНУТРИ блока -->
                <button v-if="isMoved" ref="buttonRef" class="btn relative">
                    Оставить заявку
                </button>
            </div>
        </div>

        <div class="spacer">Листай обратно вверх...</div>

        <!-- Кнопка FIXED (внизу справа) -->
        <button v-if="!isMoved" ref="buttonRef" class="btn fixed">
            Оставить заявку
        </button>
    </div>
</template>

<style scoped>
.spacer {
    height: 120vh;
    background: #f9f9f9;
    padding: 20px;
}

.target-block {
    height: 300px;
    background: #e3f2fd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px dashed #2196f3;
}

.slot {
    height: 50px;
    display: flex;
    align-items: center;
}

.btn {
    padding: 15px 30px;
    background: #2196f3;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    z-index: 9999;
}

.fixed {
    position: fixed;
    bottom: 30px;
    right: 30px;
}

.relative {
    position: relative;
}
</style>
