import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import SmallBusinessView from '../views/SmallBusinessView.vue'
import MediumBusinessView from '../views/MediumBusinessView.vue'
import BigBusinessView from '../views/BigBusinessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
    },
    {
      path: '/small-business',
      name: 'small-business',
      component: SmallBusinessView,
    },
    {
      path: '/medium-business',
      name: 'medium-business',
      component: MediumBusinessView,
    },
    {
      path: '/big-business',
      name: 'big-business',
      component: BigBusinessView,
    },
    {
      path: '/big-business',
      name: 'big-business',
      component: BigBusinessView,
    },
  ],
})
export default router
