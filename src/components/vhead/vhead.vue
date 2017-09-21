<template>
	<div class="search">
	  <div class="svg-icon microphone">
			<span class="icon-microphone"></span>
		</div>
		<input type="text" id="inputvalue" placeholder="搜索电台 音乐 歌手" @click="goSearch()">
		<div class="svg-icon music">
		   <span class="icon-headmusic"></span>
		</div>	
	</div>
</template>
<script>
export default{
	methods:{
		goSearch:function(){
			this.$router.push({
                   path:'/search'
               });
			this.$store.commit('changefoot');
		}
	}
}
</script>
<style lang="less" scoped>
	.search{
		display:flex;
		height:.8rem;
		background:#d43c33;
		align-items: center;
		color:#fff;
		.svg-icon{
			flex-basis:.8rem;
			width:.8rem;
			height:.8rem;
			padding:.15rem;
			span{
				color:#fff;
				font-size: .5rem;
			}
		}
		input{
			border:none;
			height:.5rem;
			font-size: .24rem;
			padding-left:.1rem;
			margin:0 10px;
			border-radius: .05rem;
			flex:1;
	  }
	}
</style>