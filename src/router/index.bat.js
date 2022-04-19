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

//备份VueRouter.prototype原有的push|replace方法
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写VueRouter.prototype的push方法
VueRouter.prototype.push = function (location, resolve, reject) {
    //函数对象的apply与call的区别?
    //相同点:都可以改变函数的上下文一次，而且函数会立即执行一次
    //不同：函数执行的时候，传递参数不同，apply需要的是数组，call传递参数的时候用逗号隔开
    //原始的push方法可以进行路由跳转，但是需要保证上下文this是VueRouter类的实例
    //第一种情况：外部在使用push的时候传递成功与失败的回调
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        //第二种情况：外部在使用push方法的时候没有传递成功与失败的回调函数
        originPush.call(this, location, () => { }, () => { });
    }
}
//重写VueRouter.prototype.replace方法
VueRouter.prototype.replace = function (location, resolve, reject) {
    (resolve && reject) ? originReplace.call(this, location, resolve, reject) : originReplace.call(this, location, () => { }, () => { });
}

// 配置路由
export default new VueRouter({
    routes: [
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
})