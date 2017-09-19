import Vue from 'vue'
import Vuex from 'Vuex'
import Axios from 'axios'
Vue.use(Vuex)

const store =new Vuex.Store({
      state:{
          showfoot:true,
      },
      getters:{  
        showfoot:state => state.showfoot
      },
      mutations:{
        changefoot(state) {
          state.showfoot = ! state.showfoot
      	 }
      },
      actions:{
          
      }
})

export default store