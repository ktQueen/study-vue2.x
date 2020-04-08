import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../components/index'
import List from '../components/list'

const router=new VueRouter({
    routes:[
        {
            path:'/',
            component:Index
        },
        {
            path:'/list',
            component:List
        }
    ]
});

export default router

