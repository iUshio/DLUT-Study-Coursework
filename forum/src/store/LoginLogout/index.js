// 用户登录登出仓库
import { setUserName, getUserName } from '@/utils/localStorage'
import { reqUserLogin, reqUserRegister } from '@/api'

const state = {
    username:getUserName('USERNAME')
}

const mutations = {
    USERLOGIN(state,username){
        state.username = username
    }
}

const actions = {
    // 用户登录，会返回用户的各种信息（短信信息）
    // 需要用户输入的名字，密码
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        console.log(result);
        console.log(result.username);
        if (result.state == 'success') {
            // 将用户name存储到本地（不需要管有没有登录）
            setUserName(result.username)
            commit('USERLOGIN',result.username)
        }
    },
    // 用户注册
    // 需要的传参： username password email
    // 返回参数： username state（state:success -注册成功 state:fail -用户已经存在）

    async userRegister({ commit }, data) {
        let result = await reqUserRegister(data)
        
        if (result.code == 200) {
            return result.state
        }
    },
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}