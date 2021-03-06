import {
  createApp
} from 'vue'
import App from './App.vue'
import './index.css'
import {
  createWebHashHistory,
  createRouter
} from "vue-router"
import Peng from "./components/Peng.vue"
import Peng2 from "./components/Peng2.vue"

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [{
    path: '/',
    component: Peng
  }, {
    path: '/xxx',
    component: Peng2
  }]
})

const app = createApp(App)
app.use(router)
app.mount("#app")