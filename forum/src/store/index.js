import Vue from 'vue';
import Vuex from 'vuex';

import LoginLogout from './LoginLogout'
import Message from './Message'

// 使用插件
Vue.use(Vuex);

export default new Vuex.Store({
    // 实现Vuex仓库模块式开发存储数据
    modules: {
        LoginLogout,
        Message,
    }
})