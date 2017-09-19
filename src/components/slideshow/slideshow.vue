<template>
	 <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
	 	<div class="slide-image">
	 		<img :src="slides[nowIndex].src" alt="">
	 	</div>
	 </div>
</template>
<script>
	export default{
     props:{
        slides:{
        	type:Array,
        	default:[]
        },
        inv:{
        	type:Number,
        	default:2000
        }
     },
     data(){
       return{
       	nowIndex:0
       }  
     },
     computed:{
     nextIndex(){
     if(this.nowIndex===this.slides.length-1){
      return 0
     }
     else{
      return this.nowIndex+1
     }
     }
     },
     methods:{
     	goto(index){
            this.nowIndex = index
     	},
     	runInv(){
     		this.invId =setInterval(() => {
     			this.goto(this.nextIndex)
     		},this.inv)
     	},
     	clearInv () {
     		clearInterval(this.invId)
     	}
     },
    mounted () {
     	this.runInv()
     }
	}
</script>
<style lang="less" scoped>
	.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  margin:0 15px 15px 0;
  overflow: hidden;
  width:100%;
}
img {
	display:block;
	width:100%;
	height:100%;
}

</style>	