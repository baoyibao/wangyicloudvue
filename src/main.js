// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import '../static/reset.css'
import '../static/style.css'
import axios from 'axios'
import BScroll from 'better-scroll'
import store from './store'

/*import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'*/

/*Vue.use(MuseUI)*/
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
    store,
	template: '<App/>',
	components: {
		App
	}
})