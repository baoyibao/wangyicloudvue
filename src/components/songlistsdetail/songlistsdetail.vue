<template>
<div class="wrapper" ref="wrapper">
  <div class="detail">
    <div class="menu-title">
       <div class="back" @click="back()">
         <img src="../../../static/back.png" height="36" width="36" alt="">
       </div>
       <div class="title-name">
         歌单
       </div>
       <div class="setting">
         <img src="../../../static/ph.png" height="36" width="36" alt="">
       </div>
    </div>
    <div class="detailsong">
      <div class="detailbg">
        <img class="picUrl" :src="coverImgUrl" alt="">
      </div>
      <div class="content">
          <p>{{name}}</p>
          <div class="name">
          <img class="autorUrl"  :src="avatarUrl" alt="">
           {{nickname}}
          </div>
       </div>
       <div class="background">
    <img :src="coverImgUrl" width="100%" height="100%" alt="">
  </div>
    </div>
    <div class="list-wrapper">
       <ul>
         <li v-for="(item,index) in details" @click="jumpPlay(item.id)">
           <div class="index">{{index+1}}</div>
           <div class="title">
              {{item.name}}
          <div class="span">{{item.ar[0].name}} - {{item.name}}</div>
           </div>
         </li>
       </ul>
    </div>
  </div>
</div>
</template>
<script>
  import Vue from 'vue';
  export default {
    name: 'detail',
    data () {
      return {
        details: [],
        avatarUrl: '',
        nickname: '',
        signature: '',
        isloading: true,
        coverImgUrl: '',
        name:'',
        id:''
      };
    },
    methods:{
      back:function(){
        window.history.go(-1);
        this.$store.commit('changefoot');
      },
      showContent: function () {
        this.isloading = false;
      },
      jumpPlay:function(id){
         this.$router.push({
           path:'/playsong/' + id
        });
     }
    },
    mounted () {
         setTimeout(this.showContent, 1000);
         this.$http.get('http://192.168.0.117:3000/playlist/detail?id='+this.$route.params.id).then(res => {
         this.avatarUrl = res.data.playlist.creator.avatarUrl;
         this.backgroundUrl = res.data.playlist.creator.backgroundUrl;
         this.nickname = res.data.playlist.creator.nickname;
         this.signature = res.data.playlist.creator.signature;
         this.details = res.data.playlist.tracks;
         this.name = res.data.playlist.name;
         this.coverImgUrl = res.data.playlist.coverImgUrl
      });
    }
  };
</script>

<style lang="less" scoped>
.wrapper{
     margin-bottom:60px;
}
 .menu-title{
      position:fixed;
      width:100%;
      top:0;
      display:flex;
      z-index:110;
      background:rgba(7,17,27,0.5);
      .back{
        flex-basis:36px;
        img{
          width:26px;
          height:26px;
          padding-top:15px;
          padding-left:5px;
        }
      }
      .title-name{
        flex :1;
        height:48px;
        line-height:48px;
        text-align:center;
        font-size:18px;
        color:#fff;
      }
      .setting{
        flex-basis:36px;
        img{
          padding-top:15px;
          width:26px;
          height:26px;
          padding-right:3px;
        }
      }
  } 
   .detailsong{
      margin-top:48px;
      overflow:hidden;
      display:flex;
      line-height:30px;
      height:200px;
      background:rgba(7,17,27,0.6);
      position:relative;
      .background{
      position:absolute;
      top:0;
      left: 0;
      width:100%;
      height:100%;
      z-index:-1;
      filter:blur(10px);
      }
      .detailbg{
        .picUrl{
          width:120px;
          height:120px;
          margin:38px 25px;
              }
  }
 .content{
      color:#fff;
      margin:10px 10px;
     font-size:16px;
     p{
      margin-top:20px;
     }
     .name{
      height:50px;
      line-height:50px;
     }
  .autorUrl{
     width:50px;
     height:50px;
     border-radius: 50%;
   }
 }
}
.list-wrapper{
   height:30px;
   font-size:16px;
    li{
    display:flex;
    padding-left: 10px;
    height:60px;
    font-size:12px;
    color:#666;
    overflow: hidden; /*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    white-space: nowrap;/*强制不换行*/
    .index{
    font-size:24px;
    flex:0 0 30px;
    line-height:60px;
   }
   .title{
    flex:1;
    color:#666;
    font-size:16px;
    line-height:28px;
    border-bottom:1px solid #ccc;
    .span{
      color:#83888d;
      font-size:12px;
    }
   }
   }    
}       
</style>