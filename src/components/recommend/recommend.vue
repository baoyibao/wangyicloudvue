<template>
	<div class="wrapper" ref="wrapper">
		<div class="recommend">
			<slideshow v-if="slides.length" :slides="slides">      
			</slideshow>
			<div class="circle-bar">
				<div class="circle circle-1">
					<div class="img"></div>
					<p>私人FM</p>
				</div>
				<div class="circle circle-2">
					<div class="img">5</div>
					<p>每日歌曲推荐</p>
				</div>
				<div class="circle circle-3">
					<div class="img">
					</div>
					<p>云音乐热歌榜</p>
				</div>
			</div>
			<div class="h2">推荐歌单</div>
			<div class="songlist">
				<ul>
					<li class="song" v-for="item in songlists" @click="jumpPlayListsDetail(item.id,item)">
						<img :src="item.picUrl">
						<div class="content">{{item.name}}</div>
					</li>
				</ul>
			</div>
			<div class="h2">推荐mv</div>
			<div class="mvlist">
				<ul>
					<li class="mv" v-for="item in resultmv">
						<img :src="item.picUrl">
							<div class="content">
							{{item.name}}
							<div class="autor">{{item.artistName}}</div>
							</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll';
import slideshow from "../slideshow/slideshow";
import url from '../api'
	export default{
		name:'songlists',
		components:{
			slideshow
		},
		mounted () {
			this.getbanner()
			this.$http.get(`${url}/personalized`)
			.then(res =>{
					this.songlists = res.data.result;
					return this.$http.get(`${url}/personalized/mv`)
					.then(res => {
						 this.resultmv=res.data.result;
						 this.$nextTick(() => {
						 this._initScroll();
					 });
				 })
			});
		},
		methods:{
			getbanner() {
				this.$http.get(`${url}/banner`)
					.then(res => {
					this.slides = res.data.banners;
				})
			},
			_initScroll:function () {
				if (!this.wrapperScroll) {
					this.wrapperScroll = new BScroll(this.$refs.wrapper, {
						click: true
					});
				}else {
					this.wrapperScroll.refresh();
				}
			},
			jumpPlayListsDetail:function(id,obj) {
				this.$router.push({
						path:'/songlistsdetail/' + id
				});
				this.$store.commit('changefoot');
				this.$store.dispatch('playinfo',obj);
			}
		},
		data (){
			return{
				result:[],
				resultmv:[],
				scrollY:0,
				songlists:[],
				slides:[]
			}
		}        
	}
</script>
<style lang="less" scoped>
	.wrapper{
		position:absolute;
		top:1.6rem;
		bottom:1.2rem;
		width:100%;
		overflow:hidden;
		background-color:#fff;
		.circle-bar{
			display: flex;
			padding-bottom:.2rem;
			border-bottom: 1px solid rgba(102, 102, 102, 0.24);
			.circle{
				flex:1;
				text-align: center;
				&.circle-1{
					.img{
						margin:0 auto;
						border-radius:50%;
						border:1px solid #d43c33;
						background: url(cricle-1.png) no-repeat 5px;
						background-size: 40px 40px;
						width:1rem;
						margin-bottom: .2rem;
						height:1rem;
					}
				}
				&.circle-2{
					.img{
						margin:0 auto;
						border-radius:50%;
						border:1px solid #d43c33;
						width:1rem;
						margin-bottom: 10px;
						height:1rem;
						line-height:1rem;
						font-size: .48rem;
						color:#d43c33;
					}
				}
				&.circle-3{
				.img{
						margin:0 auto;
						border-radius:50%;
						border:1px solid #d43c33;
						background: url(cricle-2.png) no-repeat 5px;
						background-size: 40px 40px;
						width:1rem;
						height:1rem;
						margin-bottom:.2rem;
					}
				}
				p {
					font-size: .24rem;
				}
			}
		}
		.h2{
			margin-top: .4rem;
			color:#000;
			padding-left:.2rem;
			border-left: 3px solid #d43c33;
			font-size:.32rem;
			margin-bottom: .2rem;
		}
		.songlist{
			color:#000;
				ul {
					display: flex;
					flex-wrap: wrap;
				}
				.song{
					width:33%;
					margin-right:1px;
					img{
					width:100%;
					}
					.content{
						word-wrap: break-word;
						overflow: hidden;
						display: -webkit-box;
						text-overflow: ellipsis;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						font-size: .24rem;
						color: #333;
						line-height: 1.5;
						letter-spacing: 1px;
					}
				}
			}
			.mvlist{
				margin-top:.4rem;
				color:#000;
				.mv{
					width:49%;
					margin-left: 1px;
					margin-right:1px;
					display:inline-block;
					img{
							width:100%;
					}
					.content{
							height:.76rem;
							line-height:.4rem;
							text-overflow:ellipsis;
							white-space:nowrap;
							overflow:hidden;
					.autor{
							color:#666;
					}
				}
			}
		}
	}
</style>	