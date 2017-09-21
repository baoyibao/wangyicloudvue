<template>
	<div class="findmusic">
		<div class="header-bar">
			<vhead></vhead>
			<div class="tab"> 
				<div class="tab-item">
					<router-link :to="{path:'recommend'}"> 
						个性推荐
					</router-link>
				</div>
				<div class="tab-item">
					<router-link :to="{path:'songlist'}"> 
						歌单
					</router-link>
				</div>
				<div class="tab-item">
					<router-link :to="{path:'video'}"> 
						主播电台
					</router-link>
				</div>
				<div class="tab-item">
					<router-link :to="{path:'rank'}"> 
						排行榜
					</router-link>
				</div>
			</div>
		</div>
	<router-view></router-view>	
	</div>
</template>
<script>
import  vhead from '../components/vhead/vhead';
	export default{
		components:{
			vhead
		}
	}
</script>
<style lang="less">
@import "../common/css/mixin.less";
.tab{
	display:flex;
	background-color:#f8f8f9;
	.tab-item{
		flex:1;
		height:.8rem;
		line-height:.8rem; 
		font-size: .28rem;
		text-align: center;
		.router-link-active{
			display:block;
			color:red;
			.border_1px(red);
		}
	}
}
</style>	