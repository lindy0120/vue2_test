// 配置路由的地方
import Vue from "vue";
import VueRouter from 'vue-router'
// 使用路由
Vue.use(VueRouter)

// 引入路由
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 配置路由
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
    ]
})