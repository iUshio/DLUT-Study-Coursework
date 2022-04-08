import requests from './request'


// 用户登录
// 返回用户的短信信息
export const reqUserLogin = (data) => requests({ url: '/login', data, method: 'post' })

// 用户注册
export const reqUserRegister = (data) => requests({ url: '/register', data, method: 'post' })

// 发送消息
export const reqSendMsg = (data) => requests({ url: '/sendmsg', data, method: 'post' })

// 获取用户消息列表
export const reqgetUserMsg = (data) => requests({ url: '/getmsg', data, method: 'post' })

// 删除消息
export const reqDeleteMsg = (data) => requests({ url: '/delmsg', data, method: 'post' })

// 已读消息
export const reqReadMsg = (data) => requests({ url: '/readmsg', data, method: 'post' })
