<template>
  <div class="homeBox">
    <type-nav :categoryList="categoryList" mm="1"></type-nav>
    <list-container></list-container>
    <recommend />
    <rank />
    <like />
    <floor />
    <brand />
  </div>
</template>

<script>
import TypeNav from '@/components/TypeNav'
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import {mapState} from 'vuex'
export default {
  components:{
    TypeNav,
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  created(){
    this.$store.dispatch("categoreList")
  },
  computed: {
    ...mapState({
      categoryList: state=>state.home.categoryList
    })
  }
}
</script>

<style>

</style>