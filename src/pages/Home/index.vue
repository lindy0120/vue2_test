<template>
  <div class="homeBox">
    <type-nav></type-nav>
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
export default {
  components:{
    TypeNav,
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  }
}
</script>

<style>

</style>