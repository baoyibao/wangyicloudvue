<template>
	<div class="wrapper">
	      	<div>
	      	<img :src="list1.coverImgUrl" alt="">
	      	<div class="title">
	      	<p>{{list1.name}}</p>
	      	     <ul>
	      	  	  <li v-for="(item,index) in lists1">
	      	  		{{index+1}}.{{item.name}} - {{item.artists[0].name}}
	      	  	  </li>
	      	    </ul>
	      	  </div>
	      	</div>
	      	<div>
	      	<img :src="list2.coverImgUrl" alt="">
	      	<div class="title">
	      	<p>{{list2.name}}</p>
	      	     <ul>
	      	  	  <li v-for="(item,index) in lists2">
	      	  		{{index+1}}.{{item.name}} - {{item.artists[0].name}}
	      	  	  </li>
	      	    </ul>
	      	  </div>
	      	</div>
	      	<div>
	      	<img :src="list3.coverImgUrl" alt="">
	      	<div class="title">
	      	<p>{{list3.name}}</p>
	      	     <ul>
	      	  	  <li v-for="(item,index) in lists3">
	      	  		{{index+1}}.{{item.name}} - {{item.artists[0].name}}
	      	  	  </li>
	      	    </ul>
	      	  </div>
	      	</div>
	      	<div>
	      	<img :src="list4.coverImgUrl" alt="">
	      	<div class="title">
	      	<p>{{list4.name}}</p>
	      	     <ul>
	      	  	  <li v-for="(item,index) in lists4">
	      	  		{{index+1}}.{{item.name}} - {{item.artists[0].name}}
	      	  	  </li>
	      	    </ul>
	      	  </div>
	      	</div>
	</div>
</template>
<script>
  import BScroll from 'better-scroll';
  import url from '../api';
	export default{
		data(){
           return{
           	list1:{},
           	lists1:[],
           	list2:{},
           	lists2:[],
           	list3:{},
           	lists3:{},
           	list4:{},
           	lists4:{}
           }
		},
    methods:{
    },
    mounted(){
       	this.$http.get(`${url}/top/list?idx=14`)
       	.then(res =>{
       		this.list1 =  res.data.result
       		this.lists1= res.data.result.tracks
       		return this.$http.get(`${url}/top/list?idx=11`)
          .then(res =>{
            this.list2 = res.data.result
            this.lists2= res.data.result.tracks
            return this.$http.get(`${url}/top/list?idx=21`)
          .then(res =>{
            this.list3 = res.data.result
            this.lists3= res.data.result.tracks
            return this.$http.get(`${url}/top/list?idx=17`)
          .then(res =>{
            this.list4 = res.data.result
            this.lists4= res.data.result.tracks
           })
          })
          });
       	})
       }
	}
</script>
<style lang="less" scoped>
.wrapper{
  margin-bottom:60px;
  div{
    height:120px;
    overflow:hidden;
    margin-bottom:10px;
    img{
	  height:120px;
		width: 30%;
		float:left;
		}
		.title{
		margin-left:5px;
		float:left;
		widht:60%;
		height:120px;
		overflow:hidden;
		p{
			font-size: 18px;
			margin-bottom:10px;
  		font-weight:bold;
  		color:#666;
			overflow: hidden; /*自动隐藏文字*/
			text-overflow: ellipsis;/*文字隐藏后添加省略号*/
			white-space: nowrap;/*强制不换行*/
		}
		li{
			height:30px;
			color:#a8adb0;
			width:210px;
			line-height: 36px;
			overflow: hidden; /*自动隐藏文字*/
			text-overflow: ellipsis;/*文字隐藏后添加省略号*/
			white-space: nowrap;/*强制不换行*/
			}
		}
	}
}
</style>	