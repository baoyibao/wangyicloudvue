import Vue from 'vue'
import Vuex from 'Vuex'
import Axios from 'axios'
Vue.use(Vuex)

const store =new Vuex.Store({
  state:{
		showfoot:true,
		playmusic:false,
	},
	getters:{  
		showfoot:state => state.showfoot,
		playmusic:state => state.playmusic
	},
	mutations:{
  	changefoot(state) {
			state.showfoot = ! state.showfoot
		},
		changeplay(state) {
			state.playmusic = ! state.playmusic
		}
	},
	actions:{
    
	}
})

export default store