<template>
	<div class="wrapper">
     <div class="like">
          <div class="h2">每天听取一些好的节目</div>
          <div class="list">
          <li v-for="item in like">
            <img :src="item.coverUrl" alt="">
            <p>{{item.name}}</p>
          </li>
         </div>
     </div>
	   <div class="dj">
	         <div class="h2">电台个性推荐</div>
	            <div class="list">
		          <li v-for="item in dj">
		             <img :src="item.picUrl" alt="">
		            	<p>{{item.name}}</p>
		          </li>
		       </div>
		  </div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
			dj:[],
      like:[]
		        }
		     },
       mounted(){
       	this.$http.get('http://localhost:3000/personalized/djprogram')
       	.then(res =>{
       		this.dj =  res.data.result
       		return this.$http.get('http://localhost:3000/program/recommend')
          .then(res =>{
            this.like = res.data.programs
          })
       	})
       }
	}
</script>
<style lang="less" scoped>
li{
  list-style:none;
}
 .h2{    
       margin-top: 20px;
       color:#000;
       padding-left:10px;
       border-left: 3px solid #d43c33;
       font-size:16px;
       margin-bottom: 10px;
           }
   .wrapper{
    .like{
      li{
        display:flex;
        height:70px;
        overflow:hidden;
        p{
          flex:1 ;
          font-size:16px;
          line-height: 60px;
          margin-left:20px;
          overflow: hidden; /*自动隐藏文字*/
          text-overflow: ellipsis;/*文字隐藏后添加省略号*/
          white-space: nowrap;/*强制不换行*/
        }
        img{
          flex:0 0 50px;
          width:50px;
          height:50px;
          margin-top:10px;
          border-radius:50%;
        }
      }
    }
   	 .dj{
   	 	margin-bottom:60px;
        .list{
        li{
        	list-style: none;
        	width:33%;
        	display: inline-block;
        	margin-bottom:30px;
        	p{
        		        height: 38px;
                    word-wrap: break-word;
                    overflow: hidden;
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    font-size: 12px;
                    color: #333;
                    line-height:1.5;
                    letter-spacing: 1px;
        	}
        	img{
        	  width:100%;	
        	}
        }
    }
     	}
   }
</style>