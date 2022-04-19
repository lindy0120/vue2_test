// 引入路由
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
export default [
    {
        path: '/',
        redirect: '/home',  //重定向
        meta: {
            showFooter: true
        }
    },
    {
        path: '/home',
        component: Home,
        meta: {
            showFooter: true
        }
    },
    {
        // path: '/search/:keyword', //params参数需要占位
        path: '/search/:keyword?', //params参数可传可不传
        component: Search,
        meta: {
            showFooter: true
        },
        name: 'search',
        // 一般不通过props传递路由参数，直接使用$route获取
        // props: true ,//只能传递props参数 
        // props: { //给路由组件传递额外的参数，在组件props属性中可接收
        //     a: 1,
        //     b: 2
        // }
        props: ($route) => { //最常用，pramas query参数都可传递，props中接收
            return {
                keyword: $route.params.keyword,
                search: $route.query.search
            }
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            showFooter: false
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            showFooter: false
        }
    },
]