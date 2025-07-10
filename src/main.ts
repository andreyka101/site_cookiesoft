import './assets/main.scss'
import './GLASSlOLLIPOPS/interfaces_GLASSlOLLIPOPS.scss'
import LiveBackgroundMod from './GLASSlOLLIPOPS/live_background.ts'


let liveBackground = new LiveBackgroundMod()
liveBackground.Color.deleteALL()
liveBackground.Color.append(["404040"])
liveBackground.BackgroundPhone.LightBulbs.flashing("#d00000",1)
liveBackground.BackgroundPC.LightBulbs.flashing("#d00000",1)


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(router)

app.mount('#app')
