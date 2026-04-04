<style lang="scss">
.previe_visualizer {
    display: grid !important;
    justify-content: normal !important;
    align-items: normal !important;
    grid-template-columns: 500px auto;
    grid-template-rows: auto auto auto auto;
    column-gap: 50px;

    .visualizer_details {
        display: grid;
        grid-template-columns: 80px auto;
        grid-template-rows: 80px;

        .block_figure {
            display: flex;
            align-items: center;
            justify-content: center;

            .figure_line {
                width: 80%;
                height: 80%;
                position: relative;
                background-color: #ff0000;
            }
        }

        .stretch_text {
            display: flex;
        }
    }
}
</style>

<template>
    <TransparentBox class="previe_visualizer">
        <div style="background-color: blueviolet; grid-row: span 4; height: 300px; width: 100%;"></div>
        <div class="visualizer_details">
            <div class="block_figure">
                <div class="figure_line"></div>
            </div>
            <div class="stretch_text">
                <span>
                    - 1 ;
                </span>
                <span>
                    line: 5 px ;
                </span>
                <span>
                    width: 500 px ;
                </span>
                <span>
                    height: 300px ;
                </span>
                <span>
                    id: 348762
                </span>
            </div>
        </div>
        <div class="visualizer_details">
            <div class="block_figure">
                <div class="figure_line"></div>
            </div>
            <div>
                <span>
                    - 1 ;
                </span>
                <span>
                    line: 5 px ;
                </span>
                <span>
                    width: 500 px ;
                </span>
                <span>
                    height: 300px ;
                </span>
                <span>
                    id: 348762
                </span>
            </div>
        </div>
        <div class="visualizer_details">
            <div class="block_figure">
                <div class="figure_line"></div>
            </div>
            <div>
                <span>
                    - 1 ;
                </span>
                <span>
                    line: 5 px ;
                </span>
                <span>
                    width: 500 px ;
                </span>
                <span>
                    height: 300px ;
                </span>
                <span>
                    id: 348762
                </span>
            </div>
        </div>
        <div class="visualizer_details">
            <div class="block_figure">
                <div class="figure_line"></div>
            </div>
            <div>
                <span>
                    - 1 ;
                </span>
                <span>
                    line: 5 px ;
                </span>
                <span>
                    width: 500 px ;
                </span>
                <span>
                    height: 300px ;
                </span>
                <span>
                    id: 348762
                </span>
            </div>
        </div>
    </TransparentBox>
</template>

<script setup lang="ts">
import TransparentBox from "../components/TransparentBox.vue";
</script>
