<template>
	<div class="wrapper">
		<div class="header">
			<div class="back" onclick="history.go(-1);">
				<i class="fa fa-angle-left" aria-hidden="true"></i>
			</div>
			<div class="title">
				{{name}}
			</div>
			<div class="share">
				<i class="fa fa-share-square-o" aria-hidden="true"></i>
			</div>
		</div>
		<div class="playmain">
			<div class="playspan">
				<img src="./stick_bg.png" height="414" width="276" alt="">
			</div>
			<div class="main">
				<img :src="picUrl" alt="">
			</div>
		</div>
		<div class="playctrl">
			<div class="progress">
      </div>
      <div class="control">
      	<ul>
      		<li><i class="fa fa-random" aria-hidden="true"></i></li>
      		<li><i class="fa fa-step-backward" aria-hidden="true"></i></li>
      		<li class="play"><i class="fa fa-pause" aria-hidden="true"></i></li>
      		<li><i class="fa fa-step-forward" aria-hidden="true"></i></li>
      		<li><i class="fa fa-align-justify" aria-hidden="true"></i></li>
      	</ul>
      </div>
		</div>
		<div class="audio">
			<audio autoplay="autoplay" loop="loop" preload="auto" :src="url">
			</audio>
		</div>
		<div class="playbg">
			<img class="picUrl" :src="picUrl" width="100%" height="100%" alt="">
		</div>
	</div>      
</template>
<script>
import url from '../api'
	export default{
		data(){
			return {
				url:'',
				picUrl:'',
				name:''
			}
		},
		mounted(){
			this.$http.get(`${url}/music/url?id=` + this.$route.params.id).then(res => {
				this.url= res.data.data[0].url;
				return this.$http.get(`${url}/song/detail?ids=`+ this.$route.params.id).then(res =>{
				 	this.picUrl = res.data.songs[0].al.picUrl
				 	this.name = res.data.songs[0].name
				})
		});
	}
}
</script>
<style lang="less" scoped>
.wrapper{
	position:absolute;
	width:100%;
	height: 100%;
	left:0;
	top:0;
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
	height:.8rem;
	.back{
		flex-basis:0.8rem;
		width:.8rem;
		height:.8rem;
		padding:.15rem;
		i {
			font-size:.5rem;
			display: block;
			color:#fff;
		}
	}
	.title{
		flex:1;
		color:#ccc;
		line-height: .8rem;
		font-size: .3rem;
		overflow: hidden; /*自动隐藏文字*/
		text-overflow: ellipsis;/*文字隐藏后添加省略号*/
		white-space: nowrap;/*强制不换行*/
	}
	.share{
		flex-basis:0.8rem;
		width:.8rem;
		height:.8rem;
		padding:.2rem;
		i {
			color:#fff;
			font-size: .4rem;
		}
	}
}
.playmain {
	position:absolute;
	top:.8rem;
	left: 0;
  right: 0;
  bottom:2rem;
	overflow: hidden;
	.playspan {
		position: absolute;
  	left: 38%;
  	top: -.2rem;
  	width: 1.8rem;
  	height: 2.8rem;
  	z-index: 1;
  	img {
  		width: 100%;
  		height: 100%;
  	}
	}
	.main {
		width: 5rem;
		height: 5rem;
		position: absolute;
		left: .7rem;
		top: 2rem;
		border:.4rem solid rgba(198,196,201,0.3);
		border-radius: 50%;
		img {
			-webkit-transform: rotate(360deg);
			animation: rotation 5s linear infinite;
			-moz-animation: rotation 5s linear infinite;
			-webkit-animation: rotation 5s linear infinite;
			-o-animation: rotation 5s linear infinite;
			width: 100%;
			height: 100%;
			border-radius:50%;
		}
	}
}
.playctrl {
	position: absolute;
	left: 0;
  bottom: 0;
  right: 0; 
  height: 2rem;
  color: #fff;
  .control {
  	padding:0 .3rem;
  	margin-top: .6rem;
  	ul {
  		display: flex;
  		align-items: center;
  		li {
  			flex:1;
  			text-align: center;
  			i {
  				font-size: .4rem;
  			}
  		}
  		.play{
				i {
  				font-size: .6rem;
  			}
			}
  	}
  }
}
@-webkit-keyframes rotation{
	from {-webkit-transform: rotate(0deg);}
	to {-webkit-transform: rotate(360deg);}
			}
</style>	