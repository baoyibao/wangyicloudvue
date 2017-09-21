<template>
	<div class="wrapper" ref="wrapper">
		<div class="detail">
			<div class="menu-title">
				<div class="back" @click="back()">
					<i class="fa fa-angle-left" aria-hidden="true"></i>
				</div>
				<div class="title-name">
					歌单
				</div>
				<div class="setting">
					<span class="icon-headmusic"></span>
				</div>
			</div>
			<div class="detailsong">
				<div class="detailbg">
					<div class="img"><img class="picUrl" :src="coverImgUrl" alt=""></div>
					<div class="content">
						<h2>{{name}}</h2>
						<div class="name">
							<div class="autor"><img :src="avatarUrl"></div>
					 		<p>{{nickname}}</p>
							<i class="fa fa-angle-right" aria-hidden="true"></i>
						</div>
					</div>
				</div>
				<div class="background">
					<img :src="coverImgUrl" width="100%" height="100%" alt="">
				</div>
			</div>
			<div class="list-wrapper">
				<div class="info">
					<p>
						<i class="fa fa-play-circle" aria-hidden="true"></i>
						播放全部
						<span>(共{{detailslength}}首歌曲)</span>
					</p>
				</div>
				<ul>
					<li v-for="(item,index) in details" @click="jumpPlay(item.id)">
						<div class="index">{{index+1}}</div>
						<div class="title">
							<p>{{item.name}}</p>
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
	import url from '../api'
	export default {
	name: 'detail',
		data () {
			return {
				details: [],
				avatarUrl: '',
				detailslength:'',
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
			this.$http.get(`${url}/playlist/detail?id=`+this.$route.params.id).then(res =>
			{
				this.avatarUrl = res.data.playlist.creator.avatarUrl;
				this.backgroundUrl = res.data.playlist.creator.backgroundUrl;
				this.nickname = res.data.playlist.creator.nickname;
				this.signature = res.data.playlist.creator.signature;
				this.details = res.data.playlist.tracks;
				this.name = res.data.playlist.name;
				this.detailslength= this.details.length;
				this.coverImgUrl = res.data.playlist.coverImgUrl;
			});
		}
	};
</script>

<style lang="less" scoped>
.menu-title{
	position:fixed;
	width:100%;
	top:0;
	display:flex;
	z-index:110;
	background:rgba(7,17,27,0.5);
	.back{
		flex-basis:0.8rem;
		width:.8rem;
		height:.8rem;
		padding:.15rem;
		i{
			color:#fff;
			font-size: .5rem;
		}
	}
	.title-name{
		flex :1;
		height:.8rem;
		line-height:.8rem;
		text-align:center;
		font-size:.30rem;
		color:#fff;
	}
	.setting{
		flex-basis:.8rem;
		width:.8rem;
		height:.8rem;
		padding:.2rem;
		span{
			color:#fff;
			font-size: .4rem;
		}
	}
} 
.detailsong{
	margin-top:.8rem;
	overflow:hidden;
	display:flex;
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
		display: flex;
		padding:0.3rem;
		.img {
			width: 50%;
		}
		.picUrl{
			width: 100%;
		}
	}
	.content{
		color:#fff;
		margin:0 0.32rem;
		h2{
			margin-top: .16rem;
			font-size: .24rem;
			line-height: 1.4;
		}
		.name{
			display: flex;
			align-items: center;
			margin-top: .4rem;
			.autor {
				width: .6rem;
				height: .6rem;
				img {
					width: 100%;
					border-radius: 50%;
				}
			}
			i {
				font-size: .3rem;
				color:#fff;
			}
			p {
				padding:.1rem;
				font-size: .24rem;
			}
		}
 	}
}
.list-wrapper{
	.info {
		border-bottom: 1px solid #e6e6e6;
		height: 1rem;
		line-height: 1rem;
		padding:0 .2rem;
		font-size: .3rem;
		span {
			color:#ccc;
			font-size: .28rem;
		}
	}
	li{
		display:flex;
		border-bottom:1px solid #e6e6e6;
		height:1rem;
		color:#666;
		overflow: hidden; /*自动隐藏文字*/
		text-overflow: ellipsis;/*文字隐藏后添加省略号*/
		white-space: nowrap;/*强制不换行*/
		.index{
			flex:0 0 1rem;
			text-align: center;
			line-height:1rem;
	 	}
		.title{
			flex:1;
			color:#666;
			font-size:.3rem;
			p {
				margin-top:.2rem;
			}
			.span{
				margin-top:.1rem;
				color:#83888d;
				font-size:0.28rem;
			}
	 	}
	}    
}       
</style>