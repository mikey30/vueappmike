  
import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from './views/Posts'
import Login from './views/login'
import Logout from './views/logout'

//Następnie wywoluje Vue.use(Router), aby upewnić się, że Router jest dodany do projektu Vue. Vue.use(VueRouter)
Vue.use(VueRouter)

export default new VueRouter({
    //domyslny tryb mieszania 
    //używa skrótu adresu URL do symulacji pełnego adresu URL, aby strona nie była ponownie ładowana po zmianie adresu URL. 
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/',
        name: 'posts',
        component: Posts,
        meta: {
            requiresLogin:true
        }
        },
        {
        path: '/login',
        name: 'login',
        component: Login,
        },
        {
        path: '/logout',
         name: 'logout',
        component: Logout,
        },

    ]
})
//router jest to taka "biblioteka"fukcja dzieki ktorej mozna latwo nawigowac wszystkie aplikacje jednostronciowe