<style lang="scss" scoped>
footer {
    margin-top: 100px;
    height: 400px;
    background-color: #404040;
    border-radius: 15px;
    display: flex;
    justify-content: center;

    color: aliceblue;

    .box_width {
        width: 70%;
        display: flex;
        justify-content: space-evenly;
    }
}
</style>
<template>
    <footer>
        <div class="box_width">
            <div>
                <span>Карта сайта</span>
                <nav>
                    <ul>
                        <li>
                            <RouterLink to="/">Главная</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/portfolio">Портфолио</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/small-business">Разработка малого бизнеса</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/medium-business">Разработка среднего бизнеса</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/big-business">Разработка крупного бизнеса</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <span>Карта сайта</span>
                <a href=""></a>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
</script>