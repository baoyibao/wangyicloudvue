<template>
<div>
	<div class="search">
		<input type="text" id="inputvalue" placeholder="搜索电台 音乐 歌手"  @keyup.enter="search">
		<div class="close" @click="back()">
		 取消
		</div>
	</div>
	<div class="wrapper">
		   <li v-for="item in song"  @click="goplay(item.id)">
		     <span>{{item.artists[0].name}} - {{item.name}}</span></li>
		</div>
		</div>
</template>
<script>
export default{
  data() {
    return {
      song: [],
      lshow: false
    };
  },
  methods: {
    search() {
      var name = document.getElementById('inputvalue').value;
      this.$http.get('http://192.168.0.117:3000/search?keywords=' + name).then((res) => {
       	this.song = res.data.result.songs;
       	console.log(this.song)
      });
    },
    back(){
    	window.history.go(-1);
    	this.$store.commit('changefoot')
    },
    goplay(id){
    	this.$router.push({
    		path:'/playsong/'+id
    	})
    }
  }
};
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
		.close{
            line-height:25px;  
		}
	}
	.wrapper li{
		height:50px;
		line-height:50px;
		overflow: hidden; /*自动隐藏文字*/
        text-overflow: ellipsis;/*文字隐藏后添加省略号*/
        white-space: nowrap;/*强制不换行*/
		border-bottom:1px solid #ccc;
		background:url(search.png) no-repeat;
		background-size:30px 30px;
		background-position:10px;
		span{
			margin-left:50px;
		}
	}
</style>