import Vue from 'vue'
import VueRouter from 'vue-router'
import songlistsdetail from '../components/songlistsdetail/songlistsdetail'
import playsong from '../components/playsong/playsong'
import search from '../components/search/search'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/songlistsdetail/:id',
    name: 'songlistsdetail',
    component: songlistsdetail
  }, {
    path: '/playsong/:id',
    name: 'playsong',
    component: playsong
  }, {
    path: '/search',
    name: 'search',
    component: search
  }, {
    path: '/',
    component: require('../App'),
    redirect: '/findmusic',
    children: [{
      path: '/findmusic',
      component: require('../components/findmusic'),
      redirect: '/findmusic/recommend',
      children: [{
        path: 'recommend',
        component: require('../components/recommend/recommend'),
      }, {
        path: 'rank',
        component: require('../components/rank/rank'),
      }, {
        path: 'songlist',
        component: require('../components/songlist/songlist'),
      }, {
        path: 'video',
        component: require('../components/video/video'),
      }],
    }, {
      path: '/mymusic',
      component: require('../components/mymusic')
    }, {
      path: '/friend',
      component: require('../components/friend')
    }, {
      path: '/user',
      component: require('../components/user')
    }]
  }]
})
export default router