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
import BScroll from 'better-scroll';
import url from '../api'
	export default{
		data(){
			return{
				songlists:[]
			}
		},
    mounted(){
      this.$http.get(`${url}/top/playlist/highquality`)
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
    top:1.6rem;
    bottom:1.2rem;
    width:100%;
    overflow:hidden;
    background-color:#fff;
  }
  .songlist{
    margin-top:.2rem;
    color:#000;
    ul {
      display: flex;
      flex-wrap:wrap;
    }
    .song{
      width:48%;
      margin-left:1%;
      margin-right:1%;
      img{
        width:100%
      }
			.content{
				height: .72rem;
				word-wrap: break-word;
				overflow: hidden;
				display: -webkit-box;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				font-size: .24rem;
				color: #333;
				line-height:1.5;
				letter-spacing: 1px;
			}
		}
	}
</style>	