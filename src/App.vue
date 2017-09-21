<template>
  <div id="app">
       <router-view></router-view>
       <foot-item v-if="showfoot"></foot-item> 
    </div>
</template>
<script>
  import footItem from './components/footitem/footitem';
  export default{
    components:{
      footItem
    },
    computed: {
      showfoot () {
        return this.$store.state.showfoot;
      }
    }
  }
</script>
