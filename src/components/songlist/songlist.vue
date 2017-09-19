<template>
  <div class="wrapper" ref="wrapper">
    <div class="songlist">
      <ul>
        <li class="song" v-for="item in songlists">
          <img :src="item.picUrl" @click="jumpPlayListsDetail(item.id)">
          <div class="content">{{item.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
	export default{
		data(){
			return{
				songlists:[]
			}
		},
    mounted(){
      this.$http.get('http://192.168.0.117:3000/top/playlist/highquality')
        .then(res =>{
          res.data.playlists.forEach(item =>{
            let obj = {
              name:item.name,
              id:item.id,
              picUrl:item.coverImgUrl
              };
          this.songlists.push(obj);
          })
        this.$nextTick(() => {
          this._initScroll();
        });
      })
    },
    methods:{
      _initScroll() {
        if (!this.wrapperScroll) {
          this.wrapperScroll = new BScroll(this.$refs.wrapper, {
            lick: true
          });
        } else {
          this.wrapperScroll.refresh();
        }
      },
      jumpPlayListsDetail:function(id) {
        this.$router.push({
          path:'/songlistsdetail/' + id
        });
        this.$store.commit('changefoot');
      }
    }
  }
</script>
<style lang="less" scoped>
  .wrapper{
    position:absolute;
    top:90px;
    bottom:60px;
    width:100%;
    overflow:hidden;
    background-color:#fff;
  }
  .songlist{
    margin-top: 20px;
    color:#000;
    .song{
      min-height: 154px;
      width:48%;
      margin-left:1%;
      margin-right:1%;
      display:inline-block;
      img{
        width:100%
      }
			.content{
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
		}
	}
</style>	