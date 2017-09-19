<template>
	<div class="foot-tab">
         <div class="tab-item">
           <router-link :to="{path:'/findmusic'}" active-class="act"> 
           <span class="icon-wangyi"></span>
           <p>发现音乐</p>
           </router-link>
         </div>
         <div class="tab-item">
           <router-link :to="{path:'/mymusic'}" active-class="act">  
           <span class="icon-music"></span>
           <p>我的音乐</p>
           </router-link>
           </div>
         <div class="tab-item">
           <router-link :to="{path:'/friend'}" active-class="act"> 
           <span class="icon-friend"></span>
           <p>朋友</p>
           </router-link>
         </div>
         <div class="tab-item">
          <router-link :to="{path:'/user'}" active-class="act">  
          <span class="icon-user"></span>
          <p>账号</p>
          </router-link>
         </div>
       </div>
</template>
<script>
	export default{
     computed:{
        changefoot() {
          return this.$store.state.home
        }
     },
     mounted () {
      
     }
	}
</script>
<style lang="less">
   .foot-tab{
    position:fixed;
    padding:3px 8px;
    bottom:0;
    left:0;
    height:60px;
    background:rgb(7,17,27);
    width:100%;
    box-sizing: border-box;
    display:flex;
    text-align: center;
    .tab-item{
          flex:1;
          text-align: center;
          a{
            display:block;
            font-size: 12px;
            }
          .act{
             color: #fff;
            }
        }
   }
</style>