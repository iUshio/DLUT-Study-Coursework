//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由
import routes from './routes'
import {getUserName} from '@/utils/localStorage'
//使用插件
Vue.use(VueRouter)

// 引入store
import store from '@/store'

let router = new VueRouter({
    // mode: 'history',
    //配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        // y表示滚动条在最上方
        return { y: 0 }
    }
})

// 全局路由守卫
router.beforeEach(async (to, from, next) => {
    let username = getUserName('USERNAME')
    
    if(username){
        // 已经登录则不可以去登录和注册界面
        if (to.path == '/login' || to.path == '/register') {
            next('/message')
        }else{
            next()
        }
    }else{
        next()
    }
    
})

export default router