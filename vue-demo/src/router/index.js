import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import PoetCatalog from '@/page/poetcatalog'
import PoetRelation from '@/page/poetrelation'
// import PoetPlace from '@/page/poetplace'
import PoetCard from '@/page/poetcard'
import PoetInfo from '@/page/poetinfo'
import PoemCard from '@/page/poemcard'
import SearchAll from '@/page/searchall'
import SearchModel from '@/page/searchmodel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/content/:id',
      component: Content
    }, {
      path: '/poetcatalog',
      component: PoetCatalog
    },{
      path: '/poetrelation',
      component: PoetRelation
    },{
      path: '/poetcard',
      component: PoetCard
    },{
      path: '/poetinfo/:id',
      component: PoetInfo
    },{
      path: '/poemcard',
      component: PoemCard
    },{
      path: '/searchall',
      component: SearchAll
    },{
      path: '/searchmodel',
      component: SearchModel
    }
  ]
})
