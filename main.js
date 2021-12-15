import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import store from './store'
import IdleVue from 'idle-vue'
import 'bootstrap/dist/css/bootstrap.min.css';

const eventsHub = new Vue()
//jak nie bedize aktywnosci uzytkownika przez jakis okreslony czas wyloguje automatycznie- bezpieczenstwo
Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 15000
})
//zawiera konfiguracje vue -domyslnie ustawia sie false
Vue.config.productionTip = false
// router odpowiada za ochrone nawigacyjna np poprzez klikanie w inne odnosniki, ponizej petla i trasa nawigacja 
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (!store.getters.loggedIn) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')