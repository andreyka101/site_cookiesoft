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

@media screen and (max-width: 800px) {
    .button_header div {
        width: 40px;
        height: 40px;
    }

}

@media(hover:hover) {

    .button_header:hover {
        transition: 0.1s;
        border: 3px #404040 solid;
    }
}
</style>

<template>
    <a class="button_header" :style="componentStyles">
        <div></div>
    </a>

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
        const el = document.querySelector("#" + this.n_id) as HTMLLinkElement
        if (this.tag != "-") {
            if (this.tag == "telegram") {
                el.href = "https://t.me/+79528576944"
                el.addEventListener("mouseover", () => {
                    const information_block = document.querySelector("#information_block") as HTMLDivElement
                    information_block.innerHTML = `Ссылка на Telegram`
                })
                el.addEventListener("mouseout", () => {
                    const information_block = document.querySelector("#information_block") as HTMLDivElement
                    information_block.innerHTML = `+79528576944`
                })
            }
            if (this.tag == "whatsapp") {
                el.href = "https://wa.me/+79528576944"
                el.addEventListener("mouseover", () => {
                    const information_block = document.querySelector("#information_block") as HTMLDivElement
                    information_block.innerHTML = `Ссылка на Whatsapp`
                })
                el.addEventListener("mouseout", () => {
                    const information_block = document.querySelector("#information_block") as HTMLDivElement
                    information_block.innerHTML = `+79528576944`
                })
            }
            if (this.tag == "top") {
                el.href = "#div_top"
                el.addEventListener("mouseover", () => {
                    const information_block = document.querySelector("#information_block") as HTMLDivElement
                    information_block.innerHTML = `На верх`
                })
                el.addEventListener("mouseout", () => {
                    const information_block = document.querySelector("#information_block") as HTMLDivElement
                    information_block.innerHTML = `+79528576944`
                })
            }
            if (this.tag == "phone") {
                if (detect.mobile() != null) {
                    el.href = "tel:+79528576944"
                    // el.addEventListener("mouseover",()=>{
                    //     const information_block = document.querySelector("#information_block") as HTMLDivElement
                    //     information_block.innerHTML = `Ссылка на телефон`
                    // })
                    // el.addEventListener("mouseout",()=>{
                    //     const information_block = document.querySelector("#information_block") as HTMLDivElement
                    //     information_block.innerHTML = `+79528576944`
                    // })
                }
                if (detect.mobile() == null) {
                    let click = false
                    el.addEventListener("mouseover", () => {
                        if (!click) {
                            const information_block = document.querySelector("#information_block") as HTMLDivElement
                            information_block.innerHTML = `Скопировать телефон`
                        }
                    })
                    el.addEventListener("mouseout", () => {
                        if (!click) {
                            const information_block = document.querySelector("#information_block") as HTMLDivElement
                            information_block.innerHTML = `+79528576944`
                        }
                    })
                    el.addEventListener("click", () => {
                        // click = true
                        console.log("123");

                        const information_block = document.querySelector("#information_block") as HTMLDivElement
                        console.log(information_block);

                        navigator.clipboard.writeText("+79189700187").then(function () {
                            click = true
                            console.log('Текст успешно скопирован в буфер обмена');
                            information_block.innerHTML = `Телефон скопирован`
                            setTimeout(() => {
                                click = false
                                information_block.innerHTML = `+79528576944`
                            }, 3000)
                        }, function (err) {
                            console.error('Произошла ошибка при копировании текста: ', err);
                        });
                    })
                }

            }

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
