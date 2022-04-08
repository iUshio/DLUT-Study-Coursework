// 消息存储仓库
import { reqgetUserMsg, reqSendMsg, reqDeleteMsg, reqReadMsg } from '@/api'

const state = {
    msg: [],
    nowContent:{}
}

const mutations = {
    GETUSERMSG(state, msg) {
        state.msg = msg
    },
    NOWREADING(state,nowContent){
        state.nowContent = nowContent
    }
}

const actions = {
    // 发送消息
    async userSendMsg({ commit }, data) {
        let result = await reqSendMsg(data)
        console.log(result);
    },
    // 获取用户消息列表
    async getUserMsg({ commit }, username) {
        let result = await reqgetUserMsg(username)
        // 获取消息成功，将消息存储到仓库中
        commit('GETUSERMSG', result.msg_list)

    },
    // 删除消息
    async deleteMsg({ commit }, msgid) {
        let result = await reqDeleteMsg(msgid)
        
    },
    // 已读消息
    readMsg({ commit }, msgid) {
        let result = reqReadMsg(msgid)
        console.log(result);
    },
    // 设置当前阅读的信息
    nowReading({ commit }, message){
        commit('NOWREADING',message)
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}