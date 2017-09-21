// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/router';
import '../static/reset.css';
import '../static/style.css';
import axios from 'axios';
import BScroll from 'better-scroll';
import store from './store';

import 'font-awesome/css/font-awesome.css';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router,
    store,
	template: '<App/>',
	components: {
		App
	}
})