<template>
  <div id="app">
    <app-header />
    <router-view />
    <!-- footer在登录和注册页不显示 -->
    <!-- 根据获取路由盘带 -->
    <!-- <app-footer v-show="showFooter" />  -->
    <!-- 根据获取路由的meeta属性判断 -->
    <app-footer v-show="$route.meta.showFooter" /> 
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  created(){
  },
  data(){
    return {
      showFooter: true
    }
  },
  watch: {
    // 根据路由判断footer组件是否需要显示,根据获取路由判断
    $route: {
      immediate: true,
      handler(val){
        if(val.path === "/login" || val.path === "/register"){
          this.showFooter = false
        }else {
          this.showFooter = true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100vw;
}
</style>
