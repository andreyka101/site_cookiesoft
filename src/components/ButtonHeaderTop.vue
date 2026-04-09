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
        background: var(--t_link) center/cover;
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

<template>
    <button class="button_header" :style="componentStyles">
        <div></div>
    </button>

</template>
<script lang="ts">
// import TransparentBox from "./TransparentBox.vue";
export default {
    props: {
        link_photo: {
            type: String
        },
        n_id: {
            type: String
        },
        tag: {
            type: String,
            default: "-",
        },
        link: {
            type: String,
            default: "-",
        },
        func: {
            type: Function
        },
    },
    // components: {
    //     TransparentBox
    // },
    mounted() {
        // @ts-ignore
        let detect = new MobileDetect(window.navigator.userAgent)
        const el = document.querySelector("#" + this.n_id) as HTMLButtonElement
        if (this.tag != "-") {
            if (this.tag == "top") {
                // const button_top = document.getElementById('scroll_top_but') as HTMLButtonElement
                el.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });


                el.addEventListener("mouseover", () => {
                    const information_block = document.querySelector("#information_block") as HTMLDivElement
                    information_block.innerHTML = `На верх`
                })
                el.addEventListener("mouseout", () => {
                    const information_block = document.querySelector("#information_block") as HTMLDivElement
                    information_block.innerHTML = `+79528576944`
                })


            }

        }
        else {
            el.href = this.link + ""
        }


    },
    computed: {
        componentStyles() {
            return {
                '--t_link': "url('" + this.link_photo + "')",
            }
        }
    }
}
</script>
