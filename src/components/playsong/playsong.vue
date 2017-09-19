<template>
 <div class="wrapper">
	<div class="header">
                <div class="back" onclick="history.go(-1);">
                  <img src="../../../static/back.png" height="24px" width="24px" style="margin-top:8px;" alt="">
                </div>
           <div class="title">
           	   {{name}}
           </div>
        </div>
        <div class="main">
        	<img :src="picUrl" alt="">
        	<span></span>
        </div>
        <div class="audio">
		<audio autoplay="autoplay" controls="controls"loop="loop" preload="auto" :src="url">
        </audio>
        </div>
        <div class="playbg">
           <img class="picUrl" :src="picUrl" width="100%" height="100%" alt="">
        </div>
  </div>      
</template>
<script>
	export default{
		data(){
            return {
            	url:'',
            	picUrl:'',
            	name:''
            }
		},
       mounted(){
       	this.$http.get('http://192.168.0.117:3000/music/url?id=' + this.$route.params.id).then(res => {
       		this.url= res.data.data[0].url;
       		return this.$http.get('http://192.168.0.117:3000/song/detail?ids='+ this.$route.params.id).then(res =>{
       		 this.picUrl = res.data.songs[0].al.picUrl
       		 this.name = res.data.songs[0].name
       		})
	    });
       }
	}
</script>
<style lang="less" scoped>
.wrapper{
	position:relative;
	height:100vh;
	overflow:hidden;
	background:rgba(7,17,27,0.6);
	.playbg{
      position:absolute;
      top:0;
      left: 0;
      width:100%;
      height:100%;
      z-index:-1;
      filter:blur(10px);
      }
}
	.header{
		background:rgba(0,0,0,0.5);
		display:flex;
		height:40px;
		.back{
           flex:0 0 50px;
		}
		.title{
			color:#fff;
			line-height: 40px;
			font-size: 18px;
			margin-left: 30px;
	   overflow: hidden; /*自动隐藏文字*/
        text-overflow: ellipsis;/*文字隐藏后添加省略号*/
        white-space: nowrap;/*强制不换行*/
		}
	}
	.main{
		width:100%;
        padding-top: 100px;
        padding-left:5%;
        position:relative;
        overflow:hidden;
        span{
        	width:100px;
        	height:200px;
        	left:40%;
            top:0;
            transform:rotate(20deg);
        	background:url(stick_bg.png) no-repeat;
        	background-size: 92px 120px;;
        	position:absolute;
        }
	}
	.main img{
		-webkit-transform: rotate(360deg);
         animation: rotation 5s linear infinite;
        -moz-animation: rotation 5s linear infinite;
        -webkit-animation: rotation 5s linear infinite;
         -o-animation: rotation 5s linear infinite;
		width:80%;
		height:80%;
		border-radius:50%;
		border:20px solid rgba(198,196,201,0.3);
	}
	.audio{
		position:absolute;
		bottom:0;
		width:100%;
	}
	@-webkit-keyframes rotation{
        from {-webkit-transform: rotate(0deg);}
        to {-webkit-transform: rotate(360deg);}
           }
</style>	