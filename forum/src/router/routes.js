import Login from '../pages/Login.vue'
import Message from '../pages/Message.vue'
import Reading from '../pages/Reading.vue'
import SendMsg from '../pages/SendMsg.vue'
import Register from '../pages/Register'

export default [
    // 重定向，在项目启动时，将其定向到首页
    {
        path: '*',
        redirect: '/login'
    }
    ,
    {
        path:'/login',
        component:Login
    }
    ,
    {
        path:'/message',
        component:Message
    }
    ,
    {
        path:'/reading',
        component:Reading
    },
    {
        path:'/sendmsg',
        component:SendMsg
    }
    ,
    {
        path:'/register',
        component:Register
    }
]