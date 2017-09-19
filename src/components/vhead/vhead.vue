<template>
	<div class="search">
	    <div name="microphone">
		<span class="icon-microphone"></span>
		</div>
		<input type="text" id="inputvalue" placeholder="搜索电台 音乐 歌手" @click="goSearch()">
		<div class="music">
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
		box-sizing: border-box;
		line-height: 45px;
		height:45px;
		padding:8px 8px;
		display:flex;
		background:#d43c33;
		color:#fff;
		.svg-icon{
			flex:0 0 50px;
		}
		input{
			border:none;
			height:25px;
			padding-left:10px;
			margin:0 10px;
			border-radius: 5px;
			flex:1;
	    }
		.musci{
             
		}
	}
</style>