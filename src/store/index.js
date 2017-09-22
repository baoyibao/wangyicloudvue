import Vue from 'vue'
import Vuex from 'Vuex'
import Axios from 'axios'
Vue.use(Vuex)

const store =new Vuex.Store({
	state:{
		showfoot:true,
		playmusic:false,
		playlistDetail:{},
		songlist:[],
		isloading:false
	},
	getters:{  
	},
	mutations:{
		playlistInfo(state,obj) {
			state.playlistDetail = obj
		},
		changefoot(state) {
			state.showfoot = ! state.showfoot
		},
		changeplay(state) {
			state.playmusic = ! state.playmusic
		},
		playmusiclist(state,arr) {
			state.songlist = arr
		},
	},
	actions:{
		playinfo({commit},obj) {
			commit('playlistInfo',obj)
		},
		setSong({commit},arr) {
			commit('playmusiclist',arr)
		}
	}
})

export default store